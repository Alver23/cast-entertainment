// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

// Entities
import { ICatalogEntity } from '@api/catalogs/domain/entities/catalog';

export interface ICatalogService extends IBaseCrudService<ICatalogEntity, ICatalogEntity> {
	getByParentId(id: number, page: number | string, limit: number | string, filters?: any): Promise<ICatalogEntity[]>;
}
