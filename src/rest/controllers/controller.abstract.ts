import { Router, Response } from 'express';

import { Logger } from '../../shared/libs/logger.js';

import { IRoute } from '../../types/route.js';

import { StatusCodes } from 'http-status-codes';
import { Components } from '../../types/components.js';

import { inject, injectable } from 'inversify';


interface IBaseController {
  readonly router: Router;
  addRoute(route: IRoute): void;
  send<T>(res: Response, statusCode: number, data: T): void;
  ok<T>(res: Response, data: T): void;
  created<T>(res: Response, data: T): void;
  noContent<T>(res: Response, data: T): void;
}


@injectable()
export class BaseController implements IBaseController {
  private readonly DEFAULT_CONTENT_TYPE = 'application/json';
  private readonly _router: Router;

  constructor (
    @inject(Components.Logger) protected readonly logger: Logger
  ) {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  public addRoute(route: IRoute) {
    route.handler.bind(this);
    this._router[route.method](route.path, route.handler);

    this.logger.info(`Route with [${route.method.toUpperCase()}] registered on path: ${route.path}`);
  }

  public send<T>(res: Response, statusCode: number, data: T): void {
    res
      .type(this.DEFAULT_CONTENT_TYPE)
      .status(statusCode)
      .json(data);
  }

  public created<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.CREATED, data);
  }

  public noContent<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.NO_CONTENT, data);
  }

  public ok<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.OK, data);
  }
}
