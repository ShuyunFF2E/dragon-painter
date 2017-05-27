/*
 * @Author: Picker
 * @Date: 2017-05-27 16:02:38
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-27 16:03:28
 */

/**
 * 统一数据来源
 */

// TODO:以下两个数据为测试使用数据
import mockConfig from '../mock/config';

import { transformConfigToComponentTree } from '@/utils/transformer';

const pagesConfig = transformConfigToComponentTree(mockConfig);

export default pagesConfig;
