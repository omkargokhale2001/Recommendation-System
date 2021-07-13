import React from 'react';
import  { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media} from 'reactstrap';
import bajaj from '../Images/bajaj.png'

function MidSection() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <h3>About Us</h3>
                <hr/>
            </div>                
        </div>
        <div className="row row-content">
            <div className="col-12 col-md-6">
                <h2>Our Journey</h2>
                <p>Bajaj Finserv was formed in April 2007 as a result of its demerger from Bajaj Auto Limited as a seperate entity to focus purely on financial services buisness of the group . The process of demerger was completed in Feb 2008
                    The constantly changing demographics and dynamics of the India economy , has led to creation of varoius needs of the customer . The Indian customer now demands proper avenues of channelizing their savings , financial protection and is also desirous of spending more on valuable goods and services. All these wants need to be met by dynamic players in the 
                    financial service space.Bajaj Finserv was formed specifically to cater to these needs.
                </p>
                <p>The operating companies carry with Bajaj brand,which carries with it decades of commitment to buisness ethics,integrity and highest standards of 
                    fiduciary responsibilty 
                </p>
            </div>
            <div className="col-12 col-md-5">
                <Card>
                    <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                    <CardBody>
                        <dl className="row p-1">
                            <dt className="col-6">Started</dt>
                            <dd className="col-6">April 2007</dd>
                            <dt className="col-6">Founder</dt>
                            <dd className="col-6">Rahul Bajaj</dd>
                            <dt className="col-6">Industry</dt>
                            <dd className="col-6">Financial Services</dd>
                            <dt className="col-6">Headquaters</dt>
                            <dd className="col-6">Pune,Maharashtra,India</dd>
                            <dt className="col-6">Products</dt>
                            <dd className="col-6">Lending, fixed deposits, mutual funds</dd>
                        </dl>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12">
                <Card>
                    <CardBody className="bg-faded">
                        <blockquote className="blockquote">
                            <p className="mb-0"> We believe good is the enemy of great. And this belief fuels the desire to create a better reality every day.</p>
                            <footer className="blockquote-footer">
                            <cite title="Source Title">Bajaj Finserv</cite>
                            </footer>
                        </blockquote>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
    )
}

export default MidSection


