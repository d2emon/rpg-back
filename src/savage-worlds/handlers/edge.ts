import express from 'express';
import { Query } from 'mongoose';
import Edge, {
    IEdgeDocument,
} from '../models/edge';
import edgesFixture from '../fixtures/edges';

export const getEdges = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const edges = await Edge
            .find(query)
            .select([
                'slug',
                'name',
                'major',
            ]);
        return res.json({ edges });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addEdge = async (req: express.Request, res: express.Response) => {
    try {
        const edge = new Edge(req.body);
        const result = await edge.save();
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getEdge = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';
        const edge = await Edge.findOne({ slug });
        return res.json({ edge });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateEdge = async (req: express.Request, res: express.Response) => {
    try {
        const result = await Edge.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeEdge = async (req: express.Request, res: express.Response) => {
    try {
        const result = await Edge.findByIdAndDelete(req.params.id);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const fillEdges = async (req: express.Request, res: express.Response) => {
    try {
        const slugs: string[] = edgesFixture.map((edge) => edge.slug);
        const models = await Edge
            .find({
                slug: {
                    $in: slugs,
                }
            })
            .select([
                'slug',
            ]);

        const found: string[] = models.map((edge) => edge.slug);
        const updates: Query<any, any>[] = [];
        const newEdges: IEdgeDocument[] = edgesFixture.reduce(
            (edges: IEdgeDocument[], edge: IEdgeDocument) => {
                if (found.indexOf(edge.slug) < 0) {
                    edges.push(edge);
                } else {
                    updates.push(Edge.updateOne({ slug: edge.slug }, edge.toObject()));
                }
                return edges;
            },
            [],
        );

        const update = await Promise.all(updates);
        const add = await Edge.insertMany(newEdges);
        return res.json({ add, update });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
