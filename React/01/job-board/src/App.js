import './App.css';
import Title from './components/header/Title';
import Jobs from './components/jobs/Jobs';

const App = () => {
	return (
		<>
			<Title />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
				}}>
				<Jobs
					className='red'
					title='Full Time Sales Associate - Sydney Boutique'
					contractType='CDI'
					country='Australie'
					city='Sydney'
				/>
				<Jobs
					className='green'
					title='Agent de Sécurité - Pantin'
					contractType='CDI'
					country='France'
					city='Pantin'
				/>
				<Jobs
					className='yellow'
					title="Responsable d'Atelier (H/F)"
					contractType='CDI'
					country='France'
					city='Paris'
				/>
				<Jobs
					className='blue'
					title='Chef de Projets'
					contractType='CDD'
					country='France'
					city='Sydney'
				/>
				<Jobs
					className='pink'
					title='Développeur React.js'
					contractType='CDI'
					country='France'
					city='Sydney'
				/>
				<Jobs
					className='red'
					title='Sales Associate Stockholm'
					contractType='CDI'
					country='Suede'
					city='Sydney'
				/>
				<Jobs
					className='green'
					title='Vendeur/se - Crans Montana'
					contractType='CDI'
					country='Suisse'
					city='Sydney'
				/>
				<Jobs
					className='yellow'
					title='CRM & Data Quality Analyst'
					contractType='CDI'
					country='USA'
					city='Sydney'
				/>
				<Jobs
					className='blue'
					title='Infirmier (H/F)'
					contractType='CDI'
					country='Australie'
					city='Sydney'
				/>
			</div>
		</>
	);
};

export default App;
