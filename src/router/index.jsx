import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { RouterData } from "./index-data"
import { Spin } from "antd"
import './index.css'
function RouterComponent() {
  return (
    <>
      <Routes>
        {RouterData.map(elem =>
          <Route key={elem.id} path={elem.path} element={
            <Suspense fallback={
              <div className="spin_wrapp">
                <div class="jelly-triangle">
                  <div className="jelly-triangle__dot"></div>
                  <div className="jelly-triangle__traveler"></div>
                </div>

                <svg width="100px" height="100p" className="jelly-maker">
                  <defs>
                    <filter id="uib-jelly-triangle-ooze">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="7.3"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="ooze"
                      />
                      <feBlend in="SourceGraphic" in2="ooze" />
                    </filter>
                  </defs>
                </svg>
              </div>
            }>
              {elem.component}
            </Suspense>
          } />
        )}
      </Routes>
    </>
  )
}

export default RouterComponent