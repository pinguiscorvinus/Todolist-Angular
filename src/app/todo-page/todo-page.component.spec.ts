import { ComponentFixture, TestBed } from '@angular/core/testing';

// 匯入核心元件
import { TodoComponent } from './todo-page.component';

// 定義一個測試套件，名稱是 'TodoPageComponent'
describe('TodoPageComponent', () => {
  // 宣告要在測試中使用的變數：component 和 fixture
  let component: TodoComponent; // 實際的元件實例
  let fixture: ComponentFixture<TodoComponent>; // 用來存取元件和其 HTML DOM 的包裝器

  // 每一個測試案例之前都會執行這個區塊，通常用來初始化測試環境
  beforeEach(async () => {
    // 設定測試模組的內容，指定要使用的元件
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ] // 宣告測試中會用到的元件
    })
    .compileComponents(); // 編譯元件模板（對於使用外部樣板/樣式的元件是必要的）

    // 建立元件的 fixture 實例
    fixture = TestBed.createComponent(TodoComponent);
    // 取得元件實例本身，方便後續測試存取和操作
    component = fixture.componentInstance;
    // 觸發 Angular 的變更偵測，以初始化元件的畫面與資料繫結
    fixture.detectChanges();
  });

  // 實際的測試案例：檢查元件是否成功建立
  it('should create', () => {
    // 預期這個元件實例存在（truthy），代表有成功建立
    expect(component).toBeTruthy();
  });
});

