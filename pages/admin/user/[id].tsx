import * as React from 'react';
import Head from 'next/head'
import {withRouter} from 'next/router'
export interface IAppProps {
}

export interface IAppState {
}

 class App extends React.Component<IAppProps, IAppState> {


  constructor(props: IAppProps) {
    super(props);
    console.log("App -> constructor -> props", props)

    this.state = {
    }
  }

  public render() {
    return (
      <div>
      <Head>
        <title>User 123</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        Usser123
      </div>
    );
  }
}

export default withRouter(App)