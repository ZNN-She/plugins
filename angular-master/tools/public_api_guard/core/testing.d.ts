/** @deprecated */
export declare function addProviders(providers: Array<any>): void;

/** @stable */
export declare function async(fn: Function): (done: any) => any;

/** @stable */
export declare class ComponentFixture<T> {
    changeDetectorRef: ChangeDetectorRef;
    componentInstance: T;
    componentRef: ComponentRef<T>;
    debugElement: DebugElement;
    elementRef: ElementRef;
    nativeElement: any;
    ngZone: NgZone;
    constructor(componentRef: ComponentRef<T>, ngZone: NgZone, autoDetect: boolean);
    autoDetectChanges(autoDetect?: boolean): void;
    checkNoChanges(): void;
    destroy(): void;
    detectChanges(checkNoChanges?: boolean): void;
    isStable(): boolean;
    whenStable(): Promise<any>;
}

/** @experimental */
export declare var ComponentFixtureAutoDetect: OpaqueToken;

/** @experimental */
export declare var ComponentFixtureNoNgZone: OpaqueToken;

/** @experimental */
export declare function discardPeriodicTasks(): void;

/** @experimental */
export declare function fakeAsync(fn: Function): (...args: any[]) => any;

/** @experimental */
export declare function flushMicrotasks(): void;

/** @experimental */
export declare function getTestBed(): TestBed;

/** @stable */
export declare function inject(tokens: any[], fn: Function): () => any;

/** @experimental */
export declare class InjectSetupWrapper {
    constructor(_moduleDef: () => TestModuleMetadata);
    inject(tokens: any[], fn: Function): () => any;
}

/** @experimental */
export declare type MetadataOverride<T> = {
    add?: T;
    remove?: T;
    set?: T;
};

/** @experimental */
export declare function resetFakeAsyncZone(): void;

/** @experimental */
export declare class TestBed implements Injector {
    ngModule: Type<any>;
    platform: PlatformRef;
    compileComponents(): Promise<any>;
    configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): void;
    configureTestingModule(moduleDef: TestModuleMetadata): void;
    createComponent<T>(component: Type<T>): ComponentFixture<T>;
    execute(tokens: any[], fn: Function): any;
    get(token: any, notFoundValue?: any): any;
    /** @experimental */ initTestEnvironment(ngModule: Type<any>, platform: PlatformRef): void;
    overrideComponent(component: Type<any>, override: MetadataOverride<ComponentMetadataType>): void;
    overrideDirective(directive: Type<any>, override: MetadataOverride<DirectiveMetadataType>): void;
    overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModuleMetadataType>): void;
    overridePipe(pipe: Type<any>, override: MetadataOverride<PipeMetadataType>): void;
    /** @deprecated */ reset(): void;
    /** @experimental */ resetTestEnvironment(): void;
    resetTestingModule(): void;
    static compileComponents(): Promise<any>;
    static configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): typeof TestBed;
    static configureTestingModule(moduleDef: TestModuleMetadata): typeof TestBed;
    static createComponent<T>(component: Type<T>): ComponentFixture<T>;
    /** @experimental */ static initTestEnvironment(ngModule: Type<any>, platform: PlatformRef): TestBed;
    static overrideComponent(component: Type<any>, override: MetadataOverride<ComponentMetadataType>): typeof TestBed;
    static overrideDirective(directive: Type<any>, override: MetadataOverride<DirectiveMetadataType>): typeof TestBed;
    static overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModuleMetadataType>): typeof TestBed;
    static overridePipe(pipe: Type<any>, override: MetadataOverride<PipeMetadataType>): typeof TestBed;
    /** @experimental */ static resetTestEnvironment(): void;
    static resetTestingModule(): typeof TestBed;
}

/** @deprecated */
export declare class TestComponentBuilder {
    protected _injector: Injector;
    constructor(_injector: Injector);
    createAsync<T>(rootComponentType: Type<T>): Promise<ComponentFixture<T>>;
    createFakeAsync<T>(rootComponentType: Type<T>): ComponentFixture<T>;
    protected createFromFactory<C>(ngZone: NgZone, componentFactory: ComponentFactory<C>): ComponentFixture<C>;
    createSync<T>(rootComponentType: Type<T>): ComponentFixture<T>;
    overrideAnimations(componentType: Type<any>, animations: AnimationEntryMetadata[]): TestComponentBuilder;
    overrideDirective(componentType: Type<any>, from: Type<any>, to: Type<any>): TestComponentBuilder;
    overrideProviders(type: Type<any>, providers: any[]): TestComponentBuilder;
    overrideTemplate(componentType: Type<any>, template: string): TestComponentBuilder;
    overrideView(componentType: Type<any>, view: ViewMetadata): TestComponentBuilder;
    overrideViewProviders(type: Type<any>, providers: any[]): TestComponentBuilder;
}

/** @experimental */
export declare class TestComponentRenderer {
    insertRootElement(rootElementId: string): void;
}

/** @experimental */
export declare type TestModuleMetadata = {
    providers?: any[];
    declarations?: any[];
    imports?: any[];
    schemas?: Array<SchemaMetadata | any[]>;
};

/** @experimental */
export declare function tick(millis?: number): void;

/** @experimental */
export declare function withModule(moduleDef: TestModuleMetadata): InjectSetupWrapper;

/** @deprecated */
export declare function withProviders(providers: () => any): InjectSetupWrapper;