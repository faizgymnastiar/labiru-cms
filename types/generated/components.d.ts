import type { Schema, Struct } from '@strapi/strapi';

export interface ItemDestinasi extends Struct.ComponentSchema {
  collectionName: 'components_item_destinasis';
  info: {
    displayName: 'destinasi';
  };
  attributes: {
    nama_destinasi: Schema.Attribute.String;
  };
}

export interface ItemFasilitas extends Struct.ComponentSchema {
  collectionName: 'components_item_fasilitas';
  info: {
    displayName: 'fasilitas';
  };
  attributes: {
    nama_fasilitas: Schema.Attribute.String;
  };
}

export interface ItemHargaPaket extends Struct.ComponentSchema {
  collectionName: 'components_item_harga_pakets';
  info: {
    displayName: 'harga-paket';
  };
  attributes: {
    harga_paket: Schema.Attribute.Integer;
    jenis_kamar: Schema.Attribute.String;
    jenis_kapal: Schema.Attribute.Enumeration<['Siginjai', 'Ekspress Bahari']>;
    nama_penginapan: Schema.Attribute.String;
    satuan: Schema.Attribute.Enumeration<['pax', 'couple']>;
  };
}

export interface ItemPerlengkapan extends Struct.ComponentSchema {
  collectionName: 'components_item_perlengkapans';
  info: {
    displayName: 'perlengkapan';
  };
  attributes: {
    nama_barang: Schema.Attribute.String;
  };
}

export interface ItineraryAgenda extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_agenda';
  info: {
    displayName: 'agenda';
  };
  attributes: {
    kegiatan: Schema.Attribute.String;
    waktu: Schema.Attribute.String;
  };
}

export interface ItineraryHari extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_haris';
  info: {
    displayName: 'hari';
  };
  attributes: {
    agenda: Schema.Attribute.Component<'itinerary.agenda', true>;
    hari_ke: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'item.destinasi': ItemDestinasi;
      'item.fasilitas': ItemFasilitas;
      'item.harga-paket': ItemHargaPaket;
      'item.perlengkapan': ItemPerlengkapan;
      'itinerary.agenda': ItineraryAgenda;
      'itinerary.hari': ItineraryHari;
    }
  }
}
