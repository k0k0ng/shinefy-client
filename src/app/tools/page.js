import Image from 'next/image'

export default function tools() {
  return (
    <div>
      <header className="font-montserrat flex flex-col global-header-background-custom">
        <div className="flex flex-col items-center justify-center global-header-container-parent">
          <div className="flex flex-col justify-center">
            <article>
              <div className="legal-header-container">
                <span className="header-text flex flex-col">
                  <h3 className="text-base rounded min-w-max flex items-center justify-center global-header-text-1">
                    Products
                  </h3>
                  <h3 className="text-base rounded min-w-max mb-2 global-header-text-2">
                    Shine Ranker Tools
                  </h3>
                </span>
              </div>
            </article>
          </div>
        </div>
      </header>

      {/* Contents */}
      <div className="font-montserrat global-content-container">
        
      </div>

    </div>
  )
}
