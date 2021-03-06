import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { createDS, columnFactory } from '@pebula/ngrid';

import { Person, DemoDataSource } from '@pebula/apps/shared-data';
import { Example } from '@pebula/apps/shared';

@Component({
  selector: 'pbl-manual-example',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Example('pbl-manual-example', { title: 'Block UI: Manual' })
export class ManualExample {
  columns = columnFactory()
    .default({minWidth: 200})
    .table(
      { prop: 'id' },
      { prop: 'name' },
    )
    .build();

  ds = createDS<Person>().onTrigger( () => this.datasource.getPeople(1000) ).create();

  constructor(private datasource: DemoDataSource) { }
}
