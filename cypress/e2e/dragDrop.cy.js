describe('Test suite drag and drop', () => {
  it('shoud drag and drop', () => {
    cy.visit('https://demoqa.com/droppable')
    cy.get('#draggable').drag('#droppable', {force:true}).then((success)=>{
      assert.isTrue(success)
    })

    cy.contains('Dropped!')
  })
})