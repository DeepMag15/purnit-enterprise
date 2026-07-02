/**
 * Notification Service
 * Placeholder for notification business logic
 */

// TODO: Implement push notifications
// TODO: Implement email notifications
// TODO: Implement real-time subscriptions

export const NotificationService = {
  getNotifications: async () => {
    throw new Error('Not implemented');
  },

  sendNotification: async (_data: Record<string, unknown>) => {
    throw new Error('Not implemented');
  },

  markAsRead: async (_id: string) => {
    throw new Error('Not implemented');
  },

  subscribe: (_callback: (notification: unknown) => void) => {
    void _callback;
    throw new Error('Not implemented');
  },
};
