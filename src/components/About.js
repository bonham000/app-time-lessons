import React from 'react';
import { Link } from 'react-router-dom';
import { connectScreenSize } from 'react-screen-size';
import { mapScreenSizeToProps } from '../utils/helpers';

/* About Component */
export default connectScreenSize(mapScreenSizeToProps)(
class About extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }
  handleKeyDown = ({ code }) => {
		if (code === 'Escape') this.props.history.push('/');
	}
  render() {
    const { screen } = this.props;
    return (
      <div className='studyWrapper reviewContainer'>
				<div className='studyContainer'>
          <div className='quizHeader'>
            <div className='quizTitle'>
            <span>About</span>
            </div>
            {!screen.isMobile && <span id="return">
              <Link to='/'>
                <i className="fa fa-times-circle" aria-hidden="true"></i>
              </Link>
            </span>}
          </div>
          <div className='about'>
            <h1>App Time!™ Practice Lessons 🤹‍♂️</h1>
            <p>These are weekly review quizzes for the content we cover in class.</p>
            <p>The questions should be simply and easy but enough to keep the concepts fresh in your mind.</p>
            <p>Spaced repetition is the key to learning. 😃
            </p>
            <button className='aboutContribute'>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bonham000/app-time-lessons">
                Contribute</a>
            </button><br />
            <Link className='finishBtn' to='/'>
							<button>Return to Quiz Page</button>
						</Link>
          </div>
				</div>
			</div>
    )
  }
});
