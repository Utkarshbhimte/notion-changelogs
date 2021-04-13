export interface NotionSection {
    role: string
    value: Value
    collection?: Collection
}

export type NotionResponse = Record<string, NotionSection>


export interface Value {
    id: string
    version: number
    type: string
    view_ids?: string[]
    collection_id?: string
    properties?: Properties
    content?: string[]
    permissions?: Permission[]
    created_time: number
    last_edited_time: number
    parent_id: string
    parent_table: string
    alive: boolean
    created_by_table: string
    created_by_id: string
    last_edited_by_table: string
    last_edited_by_id: string
    space_id: string
}

export interface Properties {
    title: string[][]
}

export interface Permission {
    role: string
    type: string
    user_id?: string
}

export interface Collection {
    title: string[][]
    schema: Schema
    types: Type[]
    data: NotionCollectionRow[]
}

export type Schema = Record<string, KeyDescription>

export interface KeySelectOption {
    id: string,
    color: string,
    value: string
}

export interface KeyDescription {
    name: string
    type: string
    options?: KeySelectOption[]
}

export interface Title {
    name: string
    type: string
}

export interface Type {
    id: string
    version: number
    type: string
    name: string
    format: Format
    parent_id: string
    parent_table: string
    alive: boolean
    page_sort: string[]
    space_id: string
}

export interface Format {
    table_wrap: boolean
    table_properties: TableProperty[]
}

export interface TableProperty {
    width?: number
    visible: boolean
    property: string
}

export interface Aggregation {
    property: string
    aggregator: string
}

export interface RowId {
    id: string
}

export type RowDataStringValue = string[][]

export type RowDataFileValue = [string, string[][]][]

export type RowData = Record<string, RowDataStringValue | RowDataFileValue>

export type NotionCollectionRow = RowId | RowData

export interface Option {
    id: string
    color: string
    value: string
}

export interface PublishedDate {
    type: string
    start_date: string
}
