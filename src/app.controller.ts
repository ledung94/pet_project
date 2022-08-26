import { Controller, Get, HttpStatus, Param, Query, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('od')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':id')
  // @Redirect()
  // getHello(@Param() params): string {
  //   return params;
    // return this.appService.getHello();
    // return { url: 'https://www.google.com.vn/?hl=vi' };
  // }
  @Get()
  getHello1(@Query() queries, @Res({passthrough: true}) res) {
    // return res.status(HttpStatus.OK).json({id: queries.id});
    res.status(HttpStatus.OK);
    return queries.id;
  }
}
