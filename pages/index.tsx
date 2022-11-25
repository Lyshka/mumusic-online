import MainLayouts from "../layouts/MainLayouts"

const Index = () => {
  return (
    <>
      <MainLayouts>
        <div className="center">
          <h1>
            Добро пожаловать!
          </h1>

          <h3>
            Здесь собраны лучшие треки!
          </h3>
        </div>
      </MainLayouts>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}
export default Index