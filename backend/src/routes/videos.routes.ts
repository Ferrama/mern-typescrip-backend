import {Router} from 'express';
const router = Router();
import * as videoCtrl from './video.controller'


router.get('/videos', videoCtrl.getVideos);
router.get('/video/:id', videoCtrl.getVideo);
router.post('/videos', videoCtrl.createVideo);
router.delete('/videos/:id', videoCtrl.deleteVideo);
router.put('/videos/:id', videoCtrl.updateVideo);

export default router