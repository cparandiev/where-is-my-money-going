import React from 'react'

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({file: file, imagePreviewUrl: reader.result});
        }

        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt='receipt'/>);
        } else {
            $imagePreview = (
                <div className="previewText was">Please select an Image for Preview</div>
            );
        }

        return (
            <div className="previewComponent">
                <div
                    className="imgPreview"
                    style={{
                    marginTop: "20px"
                }}>
                    {$imagePreview}
                </div>
                <input
                    {...this.props.input}
                    className="form-control"
                    type="file"
                    name="photo"
                    style={{
                        marginTop: "20px"
                    }}
                    onChange={(e) => this._handleImageChange(e)}/>

            </div>
        )
    }
}

export default ImageUpload