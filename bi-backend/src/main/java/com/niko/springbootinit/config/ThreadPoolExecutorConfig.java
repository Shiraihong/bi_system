package com.niko.springbootinit.config;

import org.jetbrains.annotations.NotNull;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

@Configuration
public class ThreadPoolExecutorConfig {

    @Bean
    public ThreadPoolExecutor threadPoolExecutor() {
        ThreadFactory threadFactory = new ThreadFactory() {
            private int count = 1;

            @Override
            public Thread newThread(@NotNull Runnable r) {
                Thread thread = new Thread(r);
                thread.setName("线程" + count);
                count++;
                return thread;
            }
        };

        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(
                2,                              // corePoolSize：核心线程数
                4,                              // maximumPoolSize：最大线程数
                100, TimeUnit.SECONDS,          // keepAliveTime：非核心线程空闲存活时间
                new ArrayBlockingQueue<>(4),    // workQueue：有界队列，容量为4
                threadFactory                   // 自定义线程工厂
        );

        return threadPoolExecutor;
    }
}
