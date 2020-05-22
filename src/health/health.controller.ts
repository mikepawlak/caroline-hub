import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get('liveness')
  getLiveness(): string {
    return 'okay';
  }

  @Get('readiness')
  getReadiness(): string {
    // put dependency tests here
    return 'okay';
  }
}
