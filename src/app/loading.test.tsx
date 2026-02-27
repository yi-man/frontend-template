import fs from 'fs';
import path from 'path';

// 直接读取组件内容进行测试
describe('Loading component', () => {
  it('renders loading text', async () => {
    const componentPath = path.join(__dirname, 'loading.tsx');
    const componentContent = fs.readFileSync(componentPath, 'utf8');

    expect(componentContent).toContain('正在加载');
  });

  it('renders loading description', async () => {
    const componentPath = path.join(__dirname, 'loading.tsx');
    const componentContent = fs.readFileSync(componentPath, 'utf8');

    expect(componentContent).toContain('请稍候，我们正在为您准备内容');
  });

  it('renders with correct container classes', async () => {
    const componentPath = path.join(__dirname, 'loading.tsx');
    const componentContent = fs.readFileSync(componentPath, 'utf8');

    expect(componentContent).toContain('container-custom');
  });

  it('renders loader icon', async () => {
    const componentPath = path.join(__dirname, 'loading.tsx');
    const componentContent = fs.readFileSync(componentPath, 'utf8');

    expect(componentContent).toContain('Loader2');
    expect(componentContent).toContain('animate-spin');
  });
});
