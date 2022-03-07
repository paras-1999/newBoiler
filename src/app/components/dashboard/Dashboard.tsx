import React from "react";
import { Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ITenantData } from "../../../../types/index";

const Dashboard = () => {
	const user: ITenantData = useSelector((state: any) => state.setUserData);
	return (
		<React.Fragment>
			<Container>
				{!!user && (
					<Card style={{ width: "550px" }} className="m-1 p-2">
						<Card.Title style={{ fontSize: "32px" }} className="text-center">
							Tenant Details
						</Card.Title>
						<hr />
						<Card.Body
							style={{
								fontSize: "20px",
								fontWeight: "bold",
								textAlign: "left",
							}}
						>
							<Card.Text>
								Name:&nbsp; <span>{user.name} </span>
							</Card.Text>
							<Card.Text>
								<span>Description:&nbsp;{user.description}</span>
							</Card.Text>
							<Card.Text>
								<span>UserId:&nbsp;{user.userid}</span>
							</Card.Text>
							<Card.Text>
								<span> Email:&nbsp;{user.email}</span>
							</Card.Text>

							<hr />
						</Card.Body>
					</Card>
				)}
			</Container>
		</React.Fragment>
	);
};
export default Dashboard;
