import Nullstack from 'nullstack';
// import './Application.css';
import "./tailwind.css";
import Home from './Home';
import ListNFT from './ListNFT';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </head>
    )
  }

  render() {
    return (
      <main class='bg-blue-500 h-screen'>
        {/* <Head /> */}
        {/* <Home route="/" /> */}
        <section class='bg-red-500 flex flex-col items-center'>
          <ListNFT />
        </section>
      </main>
    )
  }

}

export default Application;