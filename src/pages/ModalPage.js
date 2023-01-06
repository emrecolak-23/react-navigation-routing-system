import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary rounded onClick={handleClick}>
        Show Modal!
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        volutpat sit amet leo eu aliquam. Nam rutrum diam diam, a ultricies
        lacus ornare eget. Vivamus tempus ex id sem ultricies, id posuere diam
        volutpat. Etiam vel vulputate metus. Phasellus eget ullamcorper urna.
        Etiam finibus enim at odio efficitur, quis lacinia sem tincidunt. Nam
        consequat tellus mollis lectus interdum rhoncus. Pellentesque
        scelerisque leo accumsan risus finibus, vitae scelerisque ante congue.
        Nulla elit eros, interdum eu commodo vel, tincidunt vitae sem. Nulla
        tempor iaculis ante, et faucibus sem malesuada sit amet. Nam ultricies
        ultrices eros, nec feugiat arcu ultrices eu. Integer sed massa non dolor
        sagittis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        volutpat sit amet leo eu aliquam. Nam rutrum diam diam, a ultricies
        lacus ornare eget. Vivamus tempus ex id sem ultricies, id posuere diam
        volutpat. Etiam vel vulputate metus. Phasellus eget ullamcorper urna.
        Etiam finibus enim at odio efficitur, quis lacinia sem tincidunt. Nam
        consequat tellus mollis lectus interdum rhoncus. Pellentesque
        scelerisque leo accumsan risus finibus, vitae scelerisque ante congue.
        Nulla elit eros, interdum eu commodo vel, tincidunt vitae sem. Nulla
        tempor iaculis ante, et faucibus sem malesuada sit amet. Nam ultricies
        ultrices eros, nec feugiat arcu ultrices eu. Integer sed massa non dolor
        sagittis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        volutpat sit amet leo eu aliquam. Nam rutrum diam diam, a ultricies
        lacus ornare eget. Vivamus tempus ex id sem ultricies, id posuere diam
        volutpat. Etiam vel vulputate metus. Phasellus eget ullamcorper urna.
        Etiam finibus enim at odio efficitur, quis lacinia sem tincidunt. Nam
        consequat tellus mollis lectus interdum rhoncus. Pellentesque
        scelerisque leo accumsan risus finibus, vitae scelerisque ante congue.
        Nulla elit eros, interdum eu commodo vel, tincidunt vitae sem. Nulla
        tempor iaculis ante, et faucibus sem malesuada sit amet. Nam ultricies
        ultrices eros, nec feugiat arcu ultrices eu. Integer sed massa non dolor
        sagittis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        volutpat sit amet leo eu aliquam. Nam rutrum diam diam, a ultricies
        lacus ornare eget. Vivamus tempus ex id sem ultricies, id posuere diam
        volutpat. Etiam vel vulputate metus. Phasellus eget ullamcorper urna.
        Etiam finibus enim at odio efficitur, quis lacinia sem tincidunt. Nam
        consequat tellus mollis lectus interdum rhoncus. Pellentesque
        scelerisque leo accumsan risus finibus, vitae scelerisque ante congue.
        Nulla elit eros, interdum eu commodo vel, tincidunt vitae sem. Nulla
        tempor iaculis ante, et faucibus sem malesuada sit amet. Nam ultricies
        ultrices eros, nec feugiat arcu ultrices eu. Integer sed massa non dolor
        sagittis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        volutpat sit amet leo eu aliquam. Nam rutrum diam diam, a ultricies
        lacus ornare eget. Vivamus tempus ex id sem ultricies, id posuere diam
        volutpat. Etiam vel vulputate metus. Phasellus eget ullamcorper urna.
        Etiam finibus enim at odio efficitur, quis lacinia sem tincidunt. Nam
        consequat tellus mollis lectus interdum rhoncus. Pellentesque
        scelerisque leo accumsan risus finibus, vitae scelerisque ante congue.
        Nulla elit eros, interdum eu commodo vel, tincidunt vitae sem. Nulla
        tempor iaculis ante, et faucibus sem malesuada sit amet. Nam ultricies
        ultrices eros, nec feugiat arcu ultrices eu. Integer sed massa non dolor
        sagittis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        volutpat sit amet leo eu aliquam. Nam rutrum diam diam, a ultricies
        lacus ornare eget. Vivamus tempus ex id sem ultricies, id posuere diam
        volutpat. Etiam vel vulputate metus. Phasellus eget ullamcorper urna.
        Etiam finibus enim at odio efficitur, quis lacinia sem tincidunt. Nam
        consequat tellus mollis lectus interdum rhoncus. Pellentesque
        scelerisque leo accumsan risus finibus, vitae scelerisque ante congue.
        Nulla elit eros, interdum eu commodo vel, tincidunt vitae sem. Nulla
        tempor iaculis ante, et faucibus sem malesuada sit amet. Nam ultricies
        ultrices eros, nec feugiat arcu ultrices eu. Integer sed massa non dolor
        sagittis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        volutpat sit amet leo eu aliquam. Nam rutrum diam diam, a ultricies
        lacus ornare eget. Vivamus tempus ex id sem ultricies, id posuere diam
        volutpat. Etiam vel vulputate metus. Phasellus eget ullamcorper urna.
        Etiam finibus enim at odio efficitur, quis lacinia sem tincidunt. Nam
        consequat tellus mollis lectus interdum rhoncus. Pellentesque
        scelerisque leo accumsan risus finibus, vitae scelerisque ante congue.
        Nulla elit eros, interdum eu commodo vel, tincidunt vitae sem. Nulla
        tempor iaculis ante, et faucibus sem malesuada sit amet. Nam ultricies
        ultrices eros, nec feugiat arcu ultrices eu. Integer sed massa non dolor
        sagittis rutrum.
      </p>
    </div>
  );
}

export default ModalPage;
