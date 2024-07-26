export function snackEmoji(name: string) {
  switch(name.toLowerCase()) {
    case 'burguer':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'acompanhamento':
      return '🍟'
    case 'bebidas':
      return '🥤'
    case 'sobremesa':
      return '🍨'
    case 'default':
      return '🤔🔎'
  }
}
