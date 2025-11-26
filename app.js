import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Logo Section */}
      <header className="header">
        <div className="logo">
          {/* TODO: 插入logo图片 */}
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="智绘旅途 Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <button className="nav-btn">注册</button>
          <button className="nav-btn">登录</button>
        </nav>
      </header>

      {/* Search Bar */}
      <section className="search-section">
        <h1 className="main-title">智绘旅途</h1>
        <p className="slogan">灵活出行，智在不设限</p>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="请输入您的地点或要求"
          />
          <button className="search-btn">搜索</button>
        </div>
      </section>

      {/* Main Functional Blocks */}
      <main className="main-content">
        <div className="blocks-container">
          <a href="#" className="block block-one">
            <h2>用户画像</h2>
            <p>整合多渠道数据，精准描绘用户偏好</p>
            <div className="img-placeholder"> {/* TODO: 用户画像相关图片/广告位 */}</div>
          </a>
          <a href="#" className="block block-two">
            <h2>AI智能生成</h2>
            <p>个性化方案可视化，满足您的定制化出游需求</p>
            <div className="img-placeholder"> {/* TODO: 方案可视化图片/广告位 */}</div>
          </a>
          <a href="#" className="block block-three">
            <h2>旅行私人管家</h2>
            <p>方案确认后自动提醒、订票，并智能推荐周边玩法</p>
            <div className="img-placeholder"> {/* TODO: 私人管家图片/广告位 */}</div>
          </a>
        </div>
      </main>

      {/* Footer/Extra */}
      <footer className="footer">
        <div className="ad-space">
          {/* TODO: 插入广告图片或合作方标识 */}
          <img src={process.env.PUBLIC_URL + '/ad.png'} alt="广告位" className="ad-img" />
        </div>
        <div className="copyright">
          © 2025 智绘旅途 | 让旅行成为千人千面的美好体验
        </div>
      </footer>
    </div>
  );
}

export default App;
