import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SlideshowInfo from './SildeshowInfo';

import '../style/aboutus.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <p className='header-title'>+15 NĂM KINH NGHIỆM</p>
            <Grid style={{ padding: '0 40px' }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Item><SlideshowInfo /></Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item>
                        <div class="about-us-content">
                            <h1>
                                <b>Đại Thuận Phát</b> là Công ty chuyên <b>in lụa</b> được thành lập từ năm 2006, <b>trụ sở chính ở Tp HCM.</b>
                            </h1>
                            <p>Công ty chuyên thêu và in trên các loại quần áo thời trang xuất khẩu, áo thể thao, (áo thun, lụa,  trên tất cả các chất liệu) tại Việt Nam, đặc biệt là dòng sản phẩm cao cấp, cung cấp sản phẩm in, thêu cho những thương hiệu thời trang nổi tiếng trên thế giới.</p>
                            <p>Với chúng tôi, một đội ngũ kỹ thuật có tay nghề cao và nhiều kinh nghiệm đóng vai trò rất quan trọng trong sự thành công và phát triển của chúng tôi. Chúng tôi luôn đầu tư máy móc thiết bị hiện đại tiên tiến nhất trên thế giới như Đức, Úc, Hàn Quốc, Nhật...Chúng tôi tin rằng sẽ đáp ứng được mọi yêu cầu và độ phức tạp</p>
                            <a class="" href="">
                                Xem Thêm
                            </a>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}