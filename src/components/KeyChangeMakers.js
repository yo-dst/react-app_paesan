import { Row, Col, Image } from "react-bootstrap";

import "../styles/KeyChangeMakers.scss";

const makersContent = [
	{
		name: "Albert Einstein",
		country: "US",
		role: "Militant"
	},
	{
		name: "Albert Einstein",
		country: "US",
		role: "Militant"
	},
	{
		name: "Albert Einstein",
		country: "US",
		role: "Militant"
	},
	{
		name: "Albert Einstein",
		country: "US",
		role: "Militant"
	},
	{
		name: "Albert Einstein",
		country: "US",
		role: "Militant"
	},
	{
		name: "Albert Einstein",
		country: "US",
		role: "Militant"
	}
]

const MakersMobile = () => {
	return (
		<Col xs={12} xl={8} className="makers-mobile">
			<div className="makers-border-mobile"></div>
			<Row className="justify-content-around">
				{makersContent.map((item, index) => (
					<Col xs={12} sm={5} className="makers-mobile-item" key={`makers-${index}`}>
						<Image src="https://picsum.photos/500" fluid />
						<div className="makers-mobile-item-title">
							<div className="makers-mobile-item-title-name">{item.name}, {item.country}</div>
							<div className="makers-mobile-item-title-role">{item.role}</div>
					</div>
				</Col>
				))}
			</Row>
		</Col>
	);
}

const Makers = () => {
	return (
		<Col xs={12} xl={8} className="key-makers-makers-container">
			<div className="key-makers-makers-border"></div>
			<Row style={{marginRight: "5rem"}}>
				<Col className="key-maker" style={{marginRight: "1.5rem"}}>
					<Image src="https://picsum.photos/500" fluid />
					<div className="key-maker-title">
						<div className="key-maker-title-name">Albert Einstein, US</div>
						<div className="key-maker-title-role">Militant</div>
					</div>
				</Col>
				<Col className="key-maker" style={{marginRight: "1.5rem"}}>
					<Image src="https://picsum.photos/500" fluid />
					<div className="key-maker-title">
						<div className="key-maker-title-name">Albert Einstein, US</div>
						<div className="key-maker-title-role">Militant</div>
					</div>
				</Col>
				<Col className="key-maker" style={{marginRight: "1.5rem"}}>
					<Image src="https://picsum.photos/500" fluid />
					<div className="key-maker-title">
						<div className="key-maker-title-name">Albert Einstein, US</div>
						<div className="key-maker-title-role">Militant</div>
					</div>
				</Col>
			</Row>
			<Row style={{marginLeft: "5rem", marginTop: "3rem"}}>
				<Col className="key-maker" style={{marginLeft: "1.5rem"}}>
					<Image src="https://picsum.photos/500" fluid />
					<div className="key-maker-title">
						<div className="key-maker-title-name">Albert Einstein, US</div>
						<div className="key-maker-title-role">Militant</div>
					</div>
				</Col>
				<Col className="key-maker" style={{marginLeft: "1.5rem"}}>
					<Image src="https://picsum.photos/500" fluid />
					<div className="key-maker-title">
						<div className="key-maker-title-name">Albert Einstein, US</div>
						<div className="key-maker-title-role">Militant</div>
					</div>
				</Col>
				<Col className="key-maker" style={{marginLeft: "1.5rem"}}>
					<Image src="https://picsum.photos/500" fluid />
					<div className="key-maker-title">
						<div className="key-maker-title-name">Albert Einstein, US</div>
						<div className="key-maker-title-role">Militant</div>
					</div>
				</Col>
			</Row>
		</Col>
	);
}

const KeyChangeMakers = () => {
	return (
		<Row className="key-makers">
			<Col xs={12} className="centered-content">
				<Row className="align-items-center  justify-content-between">
					<Col xl={3}>
						<Row>
							<Col xs={12} md={5} xl={12} className="key-makers-title">Key Change<br/>Makers</Col>
							<Col xs={12} md={7} xl={12}>
								<div className="key-makers-subtitle">Get Inspired by the voice and experience of lifetime militants.</div>
								<div className="key-makers-txt">Get pratical guidance find mentors.</div>
							</Col>
						</Row>
					</Col>
					<Makers />
					<MakersMobile />
				</Row>
			</Col>
			
		</Row>
	);
}

export default KeyChangeMakers;