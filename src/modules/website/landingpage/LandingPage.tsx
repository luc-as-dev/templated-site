interface DemoPageContainerProps {
  color: {
    background: string
    text: string
  }
  children: React.ReactNode
}
const DemoPageContainer: React.FC<DemoPageContainerProps> = (props) => {
  return (
    <div style={{ backgroundColor: props.color.background, color: props.color.text, height: 600, width: 800 }}>
      {props.children}
    </div>
  )
}

export interface LandingPageProps {
  config: {
    company: {
      name: string,
      slogan?: string
    };
    color: {
      text: string,
      background: string
    },
  }
  style?: number
}
const LandingPage: React.FC<LandingPageProps> = ({ config, style }) => {
  switch (style) {
    case 1:
      return (
        <DemoPageContainer color={config.color}>
          <div style={{ height: 100, padding: 8 }}>
            <h1 style={{ fontSize: 32 }}>{config.company.name}</h1>
            {config.company.slogan &&
              <p style={{ fontSize: 18 }}>{config.company.slogan}</p>
            }
          </div>
        </DemoPageContainer>
      );
    case 2:
      return (
        <DemoPageContainer color={config.color}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "end", height: "100%", width: "100%" }}>
            <div style={{ height: 100, padding: 8 }}>
              <h1 style={{ fontSize: 32 }}>{config.company.name}</h1>
              {config.company.slogan &&
                <p style={{ fontSize: 18 }}>{config.company.slogan}</p>
              }
            </div>
          </div>
        </DemoPageContainer>
      );
    default:
      return (
        <DemoPageContainer color={config.color}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
            <div style={{ height: 200, padding: 8 }}>
              <h1 style={{ fontSize: 48 }}>{config.company.name}</h1>
              {config.company.slogan &&
                <p style={{ fontSize: 32 }}>{config.company.slogan}</p>
              }
            </div>
          </div>
        </DemoPageContainer>
      );
  }
}

export default LandingPage;