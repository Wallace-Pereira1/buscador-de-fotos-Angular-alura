import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule ({

    imports: [
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
      // HttpClientModule,
      // CommonModule
    ]
})

export class PhotosModule {}
