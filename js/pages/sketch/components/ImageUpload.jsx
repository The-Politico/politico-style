import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import { Sketch } from 'lib';
const { ImageUpload } = Sketch;

const snippet = `const { ImageUpload } = Sketch;

<ImageUpload
  id='example-image-upload'
  label='S3 Image Service'
  env='staging'
  token='191be108ceaa481c890da1fba25c73'
  value={this.state.value}
  size={800}
  onDelete={() => this.setState({ value: '' })}
  onUpload={({canonicalUrl, cacheUrl}) => this.setState({ value: cacheUrl })}
/>
`;

class ImageUploadExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <section>
        <h2>Image Upload</h2>

        <ImageUpload
          id='example-image-upload'
          label='S3 Image Service'
          env='staging'
          token='191be108ceaa481c890da1fba25c73'
          value={this.state.value}
          size={800}
          onDelete={() => this.setState({ value: '' })}
          onUpload={({canonicalUrl, cacheUrl}) => this.setState({ value: cacheUrl })}
        />

        <Snippet snippet={snippet} />
      </section>
    );
  }
};

export default ImageUploadExample;
