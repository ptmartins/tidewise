// https://www.sanity.io/docs/structure-builder-cheat-sheet
// Moderation first (reports waiting for review), then content, then admin.
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Reports to review')
        .icon(() => '🕓')
        .child(S.documentList().title('Reports to review').filter('_type == "report" && status == "pending"').defaultOrdering([{ field: 'date', direction: 'desc' }])),
      S.documentTypeListItem('report').title('All field reports'),
      S.divider(),
      S.documentTypeListItem('species'),
      S.documentTypeListItem('article').title('Stories'),
      S.documentTypeListItem('region'),
      S.documentTypeListItem('glossaryTerm').title('Glossary'),
      S.documentTypeListItem('resource').title('Resources'),
      S.divider(),
      S.documentTypeListItem('partner').title('Partners & sponsors'),
      S.documentTypeListItem('subscriber').title('Newsletter subscribers'),
    ])
