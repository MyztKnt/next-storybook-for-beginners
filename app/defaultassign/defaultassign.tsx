'use client';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { DefaultAssignData } from './types';

export default function DefaultAssignComponent({ defaultassign }: { defaultassign: DefaultAssignData }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-[1000px] p-5">
        <Typography className="font-noto-sans-jp py-8 text-center text-2xl font-bold text-blue-700">
          <strong>デフォルトアサイン設定</strong>
        </Typography>
        <Paper elevation={1} className="mb-4 items-center gap-8 p-10">
          <div className="flex gap-8 p-0">
            <div className="gap-5 p-0">
              <Typography className="pb-3 text-sm font-bold text-blue-700">休日/平日設定</Typography>
              <div className="flex gap-1 pb-5">
                <Box className="flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm text-red-500">
                  日曜
                  <Paper className="flex justify-center bg-red-50 px-0 py-10 text-base font-bold text-red-500">
                    {defaultassign.data.sunday ? '平日' : '休日'}
                  </Paper>
                </Box>
                <Box className="flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm text-gray-300">
                  月曜
                  <Paper className="flex justify-center px-0 py-10 text-base font-bold">
                    {defaultassign.data.monday ? '平日' : '休日'}
                  </Paper>
                </Box>
                <Box className="flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm text-gray-300">
                  火曜
                  <Paper className="flex justify-center px-0 py-10 text-base font-bold">
                    {defaultassign.data.tuesday ? '平日' : '休日'}
                  </Paper>
                </Box>
                <Box className="flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm text-gray-300">
                  水曜
                  <Paper className="flex justify-center px-0 py-10 text-base font-bold">
                    {defaultassign.data.wednesday ? '平日' : '休日'}
                  </Paper>
                </Box>
              </div>
              <div className="flex gap-1 pb-5">
                <Box className="flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm text-gray-300">
                  木曜
                  <Paper className="flex justify-center px-0 py-10 text-base font-bold">
                    {defaultassign.data.thursday ? '平日' : '休日'}
                  </Paper>
                </Box>
                <Box className="flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm text-gray-300">
                  金曜
                  <Paper className="flex justify-center px-0 py-10 text-base font-bold">
                    {defaultassign.data.friday ? '平日' : '休日'}
                  </Paper>
                </Box>
                <Box className="flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm text-gray-300">
                  土曜
                  <Paper className="flex justify-center px-0 py-10 text-base font-bold">
                    {defaultassign.data.saturday ? '平日' : '休日'}
                  </Paper>
                </Box>
                <Box className="flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm text-red-500">
                  祝日
                  <Paper className="flex justify-center bg-red-50 px-0 py-10 text-base font-bold text-red-500">
                    {defaultassign.data.holiday ? '平日' : '休日'}
                  </Paper>
                </Box>
              </div>
              <Typography className="text-sm">
                曜日をクリックすると平日と休日を切り替えることができます。
                <br />
                休日として設定された曜日はデフォルトで休に配置されます。
              </Typography>
            </div>
            <div className="w-[280px] gap-5 p-0">
              <Typography className="pb-3 text-sm font-bold text-blue-700">平日アサイン先</Typography>
              <TextField
                label="名称"
                variant="outlined"
                defaultValue={defaultassign.data.weekdayAssign}
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end gap-2.5">
            <Button variant="outlined" className="rounded bg-blue-700 px-4 py-2 text-sm text-white">
              変更を保存
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
