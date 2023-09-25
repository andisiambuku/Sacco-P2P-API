import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TransactionStatusModule } from './transaction_status/transaction_status.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [TransactionStatusModule]
})
export class TransactionsModule {}
