import { useState } from 'react'
import Preview from './components/Preview'

const initialCSS = `/* Try changing the CSS! */

.festival-header {
  background-color: #ffffff;
}

.festival-hero {
  background-color: #f4f4f5;
}

.festival-title {
  color: #18181b;
  font-size: 64px;
}

.event-grid {
  grid-template-columns: repeat(2, 1fr);
}

.event-card {
  background-color: #ffffff;
  border-radius: 16px;
}

.festival-button {
  background-color: #18181b;
  color: #ffffff;
  border-radius: 999px;
}`

function App() {
  const [css, setCss] = useState(initialCSS)

  const resetCSS = () => {
    setCss(initialCSS)
  }

  return (
    <>
      <style>{css}</style>

      <div className="app">
        <header className="header">
          <div className="logo">
            <span className="logo-mark">&lt;/&gt;</span>
            <span>CSS LAB</span>
          </div>

          <button
            className="reset-button"
            onClick={resetCSS}
          >
            Reset
          </button>
        </header>

        <main className="workspace">
          <section className="preview-panel">
            <div className="panel-label">
              PREVIEW
            </div>

            <div className="preview-area">
              <Preview />
            </div>
          </section>

          <section className="editor-panel">
            <div className="editor-header">
              <div>
                <div className="panel-label">
                  CSS EDITOR
                </div>

                <p className="editor-description">
                  コードを書き換えると、左側のサイトが変化します。
                </p>
              </div>
            </div>

            <div className="guide">
              <div className="guide-title">
                <span className="guide-icon">?</span>
                GUIDE
              </div>

              <p className="guide-description">
                CSSで文化祭サイトの見た目を変えてみよう。
              </p>

              <div className="guide-items">
                <div className="guide-item">
                  <code>color</code>
                  <span>文字の色</span>
                </div>

                <div className="guide-item">
                  <code>background-color</code>
                  <span>背景の色</span>
                </div>

                <div className="guide-item">
                  <code>font-size</code>
                  <span>文字の大きさ</span>
                </div>

                <div className="guide-item">
                  <code>border-radius</code>
                  <span>角の丸さ</span>
                </div>
              </div>

              <div className="guide-tip">
                <span>TIP</span>
                CSSの値を1つ変えてみよう。
              </div>
            </div>
            
            <textarea
              className="editor"
              value={css}
              onChange={(event) =>
                setCss(event.target.value)
              }
              spellCheck={false}
            />


          </section>
        </main>
      </div>
    </>
  )
}

export default App
