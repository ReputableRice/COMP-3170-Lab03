import news_feed from './sample_news_stories.json';
import Card from './components/Card';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;
  // const storyContent = stories.map((story) => <div>{story}</div>)

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div className="feed">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
