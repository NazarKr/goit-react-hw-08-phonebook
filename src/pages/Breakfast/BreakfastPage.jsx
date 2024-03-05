import useLang from 'shared/hooks/useLang';
import breakfast from './enTostada.json';
import baguette from './enBocadillos.json';
import sandwich from './enSandwich.json';
import breakfasts from './enBreakfasts.json';
import menu from './esMenu.json';
import {
  Container,
  Heading1,
  Heading2,
  List,
  ListItem,
  Name,
  PriceLabel,
  PriceValue,
  WraperMenu,
} from './BreakfastPage.styled';

const BreakfastPage = () => {
  const { lang } = useLang();
  const Menu = menu.Menu[lang];
  const Toasted = menu.Toasted[lang];
  const Baguette = menu.Baguette[lang];
  const Breakfast = menu.Breakfast[lang];
  const Price = menu.Price[lang];

  const renderMenuItems = (items, lang) => {
    return items.map(item => (
      <ListItem key={item.id}>
        <Name>{item.name[lang]}</Name>
        <PriceValue>{item.price}€</PriceValue>
      </ListItem>
    ));
  };

  const ToastedMenu = renderMenuItems(breakfast, lang, Price[lang]);
  const BaguetteMenu = renderMenuItems(baguette, lang, Price[lang]);
  const SandwichMenu = renderMenuItems(sandwich, lang, Price[lang]);
  const BreakfastsMenu = renderMenuItems(breakfasts, lang, Price[lang]);

  return (
    <Container>
      <Heading1>{Menu}</Heading1>
      <WraperMenu>
        <Heading2>{Toasted}</Heading2>
        <PriceLabel>{Price}: </PriceLabel>
      </WraperMenu>
      <List>{ToastedMenu}</List>

      <WraperMenu>
        <Heading2>{Baguette}</Heading2>
        <PriceLabel>{Price}: </PriceLabel>
      </WraperMenu>
      <List>{BaguetteMenu}</List>

      <WraperMenu>
        <Heading2>Sandwich</Heading2>
        <PriceLabel>{Price}: </PriceLabel>
      </WraperMenu>
      <List>{SandwichMenu}</List>

      <WraperMenu>
        <Heading2>{Breakfast}</Heading2>
        <PriceLabel>{Price}: </PriceLabel>
      </WraperMenu>
      <List>{BreakfastsMenu}</List>
    </Container>
  );
};

export default BreakfastPage;
