http://localhost:5000/api/posts

<Card  className="card_detail" >
<Card.Header>{animal.milkPerDay} लीटर दूध 
, {animal.whatTimePregnant} ब्यात, ₹ {animal.price}  
{' '}|{' '}<Moment date={animal.date} fromNow/>
</Card.Header>
<SRLWrapper>
<a href={animal.photo[0]} data-attribute="SRL">
<Card.Img variant="top" src={animal.photo[0]} width='150px' height="150px" />
</a>
</SRLWrapper>
<Card.Body>
<Card.Text>ये {animal.bride} {animal.age} साल की है।यह 2 महीने पहलेब्यायी है अभी गभभवती  है|</Card.Text>
</Card.Body>
</Card>
//hhhhh
<Card.Header>{animal.post[0].milkPerDay} लीटर दूध 
, {animal.post[0].whatTimePregnant} ब्यात, ₹ {animal.post[0].price}  
{' '}|{' '}<Moment date={animal.post[0].date} fromNow/>
</Card.Header>
<SRLWrapper>
<a href={animal.post[0].photo[0]} data-attribute="SRL">
<Card.Img variant="top" src={animal.post[0].photo[0]} width='150px' height="150px" />
</a>
</SRLWrapper>
<Card.Body>
<Card.Text>ये {animal.post[0].bride} {animal.post[0].age} साल की है।यह 2 महीने पहलेब्यायी है अभी गभभवती  है|</Card.Text>
</Card.Body>