import { Module } from '@nestjs/common';
import { TypeOrmDataServicesModule } from '../../frameworks/data-services/typeorm/typeorm-data-services.module';
import { BookUseCase } from './book.use-case';

@Module({

    // imports: [TypeOrmDataServicesModule] : Le module TypeOrmDataServicesModule est importé, ce qui signifie que ce module peut utiliser les services de données fournis par TypeOrmDataServicesModule.

    imports: [TypeOrmDataServicesModule],

    //   providers: [BookUseCase] : La classe BookUseCase est enregistrée comme fournisseur, ce qui signifie qu’elle peut être injectée dans d’autres parties de l’application
    providers: [BookUseCase],

    //   exports: [BookUseCase] : La classe BookUseCase est exportée, ce qui permet à d’autres modules de l’utiliser
    exports: [BookUseCase],
})
export class BookUseCaseModule { }