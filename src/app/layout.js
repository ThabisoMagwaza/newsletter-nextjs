import GlobalStyle from "@/components/GlobalStyle";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: 'Fontend Mentor | Newsletter sign-up form with success message',
  description: 'Frontend mentor challange completed using next 14',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon-32x32.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
