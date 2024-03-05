import useLang from 'shared/hooks/useLang';
import kidsMenu from './enKidsMenu.json';
import menu from './esMenu.json';
import {
  Container,
  Heading1,
  // Heading2,
  List,
  ListItem,
  Name,
  PriceLabel,
  PriceValue,
  WraperMenu,
} from './TapasPage.styled';

const KidsMenuPage = () => {
  const { lang } = useLang();
  const Menu = menu.Menu[lang];
  const Price = menu.Price[lang];

  const renderMenuItems = (items, lang) => {
    return items.map(item => (
      <ListItem key={item.id}>
        <Name>{item.name[lang]}</Name>
        <PriceValue>{item.price}€</PriceValue>
      </ListItem>
    ));
  };  

  const KidsdMenu = renderMenuItems(kidsMenu, lang, Price[lang]);

  return (
    <Container>
      <Heading1>{Menu}</Heading1>
      <WraperMenu>
        {/* <Heading2>{}</Heading2> */}
        <PriceLabel>{Price}: </PriceLabel>
      </WraperMenu>
      <List>{KidsdMenu}</List>
    </Container>
  );
};

export default KidsMenuPage;
