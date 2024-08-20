'use client';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { DefaultAssignData } from './types';

export default function DefaultAssignComponent({ defaultassign }: { defaultassign: DefaultAssignData }) {
  const getDayBoxStyle = (isWeekday: boolean) => {
    return isWeekday ? 'bg-white text-black' : 'bg-white text-red-500';
  };

  const getDayPaperStyle = (isWeekday: boolean) => {
    return isWeekday ? 'bg-gray-50 text-black border-glay-300' : 'bg-red-50 text-red-500 border-red-200';
  };

  const renderDayBox = (day: string, isWeekday: boolean) => (
    <Box className={`flex h-[137px] w-[153.5px] flex-col gap-3 text-center text-sm ${getDayBoxStyle(isWeekday)}`}>
      {day}
      <Paper
        variant="outlined"
        className={`flex justify-center px-0 py-10 text-base font-bold ${getDayPaperStyle(isWeekday)}`}
      >
        {isWeekday ? '平日' : '休日'}
      </Paper>
    </Box>
  );

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
                {renderDayBox('日曜', defaultassign.data.sunday)}
                {renderDayBox('月曜', defaultassign.data.monday)}
                {renderDayBox('火曜', defaultassign.data.tuesday)}
                {renderDayBox('水曜', defaultassign.data.wednesday)}
              </div>
              <div className="flex gap-1 pb-5">
                {renderDayBox('木曜', defaultassign.data.thursday)}
                {renderDayBox('金曜', defaultassign.data.friday)}
                {renderDayBox('土曜', defaultassign.data.saturday)}
                {renderDayBox('祝日', defaultassign.data.holiday)}
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
