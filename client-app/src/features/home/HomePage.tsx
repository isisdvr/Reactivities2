import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Image } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>

        <Header as="h2" inverted content="Welcome to Reactivities" />
        <Button as={Link} to="/activities" size="huge" inverted>
          Tame me to the Activities!
        </Button>
      </Container>
    </Segment>
  );
}
