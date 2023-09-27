import React from 'react';
import PodcastEpisode from './PodcastEpisode'; 
import './Dashboard.css'; 
// import Taskbar from './Taskbar';
import Top from './Top';
import DownFooter from './DownFooter';
import Slideshow from './Slideshow';
import { Link } from 'react-router-dom';
import './Privacy.css'

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//import Typography from '@mui/material/Typography';
import { selectUser } from './Redux/UserSlice';
import { useSelector } from 'react-redux';


  const images = [
    'https://wallpapers.com/images/high/po-and-little-panda-4k-cartoon-f05eupba6wvk234i.webp',
    'https://wallpapers.com/images/high/minions-food-4k-cartoon-6t9jkcgtaxpolggl.webp',
    'https://wallpapers.com/images/high/sonic-4k-cartoon-0k55pacmrdxmiqy3.webp',
    'https://wallpapers.com/images/high/lion-king-4k-cartoon-hoelkape6mmgo3wa.webp'
  ];



const episodes = [
  {
    id: 1,
    title: 'The Adventure Begins',
    description: 'Join us on a magical journey through the enchanted forest.',
    audioUrl: 'audio/episode1.mp3',
    imageUrl: 'https://image.smythstoys.com/zoom/205722_3.jpg',
  },
  {
    id: 2,
    title: 'The Lost Treasure',
    description: 'Captain Jack and his crew search for buried treasure.',
    audioUrl: 'audio/episode2.mp3',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKzvVzHlY0ptFxulYco-LNso6r_4fgdcUrQ&usqp=CAU',
  },
  {
    id: 3,
    title: 'The Secret Garden',
    description: 'Discover the hidden wonders of the secret garden.',
    audioUrl: 'audio/episode3.mp3', 
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmAvWzupUeFIPkx61O5rU2keD9R4UPlLt-YBZgvrEKCmfjsKVls0HZkDOWzRnznn7tuts&usqp=CAU', 
  },
  {
    id: 4,
    title: 'Dora Bujji',
    description: 'Travel with Dora.',
    audioUrl: 'audio/episode3.mp3', 
    imageUrl: 'https://i.playboard.app/p/c313a0177f6a16b825de0129ac4b4b63/default.jpg', 
  },
  {
    id: 5,
    title: 'When do hippos play',
    description: 'When do hippos play.',
    audioUrl: 'audio/episode3.mp3', 
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1d6ebd3f-333f-4a58-830f-9d834d6d3956/When+Do+Hippos+Play+Cover+Small+Thumbnail.jpeg', 
  },
  {
    id: 6,
    title: 'The lion and the mouse',
    description: 'Story about the lion and mouse.',
    audioUrl: 'audio/episode3.mp3', 
    imageUrl: 'https://chimesradio.com/wp-content/uploads/2021/11/Lion-and-mouse-1024x1024.jpeg', 
  },  
  
];
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function DashboardPage({ username, emailid, password, phoneNumber }) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const user = useSelector(selectUser);
  const email = user ? user.email:"Guest";  
 
  return (
    <div className='inpage1'>
       <div>
      <Slideshow images={images} interval={5000} />
    </div>

    <div className="page-container">
      <div className='top'>
        <Top/>
      </div>
  
  <div className="header">
  <div className="navigation-menu">
    
  <Link to="/All" style={{textDecoration:'none',color:'whitesmoke'}}>All</Link>
    <Link to="/TrendingNow" style={{textDecoration:'none',color:'whitesmoke'}}>Trending Now</Link>
    <Link to="/OldStories" style={{textDecoration:'none',color:'whitesmoke'}}>Old Stories</Link>
    <Link to="/newstories" style={{textDecoration:'none',color:'whitesmoke'}}>New Stories</Link>
    <Link to="/MoodsAndGenre" style={{textDecoration:'none',color:'whitesmoke'}}>Moods & Genre</Link>
    <Link to="/FaQ" style={{textDecoration:'none',color:'whitesmoke'}}>FAQ</Link>
    <div>
    <h6 style={{textDecoration:'none',color:'whitesmoke'}} variant="outlined" onClick={handleClickOpen}>
    PRIVACY POLICY
  </h6>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        PRIVACY POLICY
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <h4>Information We Collect</h4>

        <p>Personal Information: We may collect certain personal information when users register for an account or use certain features of the App. This information may include:
        
        Child's first name (no last names)
        Parent or legal guardian's email address
        We do not collect any personally identifiable information from children without parental consent. Parents and legal guardians are responsible for providing consent for their children to use the App.
        
        Non-Personal Information: We may also collect non-personal information such as device type, device ID, IP address, and usage data to improve the App's performance and user experience.</p>
        
        <h4>How We Use Information</h4>
        
        <p>We use the information collected for the following purposes:
        
        Account Creation: To create and manage user accounts for the App.
        
        Communication: To communicate with parents and legal guardians regarding the App, including updates, promotions, and important information.
        
        Customization: To personalize the App's content based on user preferences and usage patterns.
        
        Analytics: To analyze user behavior and improve the App's functionality and content.</p>
        
        <h4>Sharing of Information</h4>
        
        <p>We do not sell, trade, or share personal information with third parties for their marketing purposes. We may share information as follows:
        
        Service Providers: We may share information with third-party service providers who assist in app development, hosting, maintenance, and other related services.
        
        Compliance with Law: We may disclose information as required by law or to protect our rights, privacy, safety, or property.</p>
        
        <h4>Parental Consent</h4>
        
        <p>We require parental consent for the collection of personal information from children. Parents and legal guardians can review, update, or request the deletion of their child's information by contacting us at [contact@email.com].</p>
        
        <h4>Security</h4>
        
        <p>We take reasonable measures to protect the security and confidentiality of information collected through the App. However, no data transmission or storage system is 100% secure. We cannot guarantee the security of information provided to or collected by the App.</p>
        
        <h4>Changes to Privacy Policy</h4>
        
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices and services. We will notify users of any material changes to this policy through the App or via email.</p>
        
        <h4>Contact Information</h4>
        
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at [contact@email.com].</p>
        
        <h4>Effective Date</h4>
        
        <p>This Privacy Policy is effective as of [Effective Date].
        
        This privacy policy is provided as a general template and should be customized to fit your specific needs and legal requirements. Consulting with a legal professional is advisable to ensure compliance with applicable laws and regulations, especially those related to children's privacy protection, such as the Children's Online Privacy Protection Act (COPPA) in the United States.</p>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
    
    <Link to="/TandC" style={{textDecoration:'none',color:'whitesmoke'}}>Terms&Conditions</Link>
  </div>
</div>

    
      <div className="dashboard1">
      <h1 className='kids'>Kids Story telling Podcast</h1>
      <div className="episode-list">
        {episodes.map((episode) => (
          <PodcastEpisode key={episode.id} episode={episode} />
        ))}
      </div> 
    </div>
    </div>
    <DownFooter />
   </div>
  );
}

export default DashboardPage;
