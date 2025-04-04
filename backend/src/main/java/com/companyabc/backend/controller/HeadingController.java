package com.companyabc.backend.controller;

import com.companyabc.backend.model.Heading;
import com.companyabc.backend.service.HeadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/headings")
@CrossOrigin(origins = "*")  // Allow all origins during development
public class HeadingController {

    private static final Logger logger = LoggerFactory.getLogger(HeadingController.class);

    @Autowired
    private HeadingService headingService;

    @GetMapping
    public ResponseEntity<Heading> getHeading() {
        logger.info("GET request received for /api/headings");
        Heading heading = headingService.getFirstHeading();
        if (heading == null) {
            logger.info("No heading found, creating default heading");
            heading = new Heading();
            heading.setHeadingText("Welcome to Company ABC");
            heading = headingService.saveHeading(heading);
        }
        logger.info("Returning heading: {}", heading.getHeadingText());
        return ResponseEntity.ok(heading);
    }

    @PostMapping
    public ResponseEntity<Heading> updateHeading(@RequestBody Heading heading) {
        try {
            logger.info("POST request received for /api/headings");
            logger.info("Request body: {}", heading);
            
            if (heading == null) {
                logger.warn("Heading object is null");
                return ResponseEntity.badRequest().build();
            }
            
            if (heading.getHeadingText() == null || heading.getHeadingText().trim().isEmpty()) {
                logger.warn("Heading text is null or empty");
                return ResponseEntity.badRequest().build();
            }
            
            logger.info("Saving heading with text: {}", heading.getHeadingText());
            Heading savedHeading = headingService.saveHeading(heading);
            logger.info("Heading saved successfully with ID: {}", savedHeading.getId());
            
            return ResponseEntity.ok(savedHeading);
        } catch (Exception e) {
            logger.error("Error updating heading", e);
            return ResponseEntity.internalServerError().build();
        }
    }
} 