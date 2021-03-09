// https://www.redditstatic.com/desktop2x/Subreddit.58c50b274c2467daaf91.js
// Retrieved at 3/9/2021, 6:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit"], {
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class r {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new r(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const a = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[a] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.next = r, n.prev = r.prev, r.prev = n, n.prev && (n.prev.next = n);
					const a = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[a] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/doubleclickForPublishers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/isFakeSubreddit/index.ts"),
				o = n("./src/lib/fastdom/index.ts");
			const i = new Map,
				c = (e, t) => {
					const n = [s.a.dfpSlotPrefix];
					return t !== r.Db.PROFILE && (Object(a.a)(e) ? n.push("frontpage") : n.push(`r.${e}`)), t === r.Db.INDEX ? n.push(r.Db.LISTING) : t && n.push(t), n.join("/")
				},
				d = (e, t) => {
					e.setTargeting("keywords", t.keywords);
					for (const n in t.properties) e.setTargeting(n, t.properties[n])
				},
				l = (e, t) => {
					p(e);
					const {
						id: n,
						slot: s,
						sizes: r
					} = t, a = window.googletag = window.googletag || {};
					return a.cmd = a.cmd || [], new Promise(c => {
						a.cmd.push(() => {
							o.a.write(() => {
								const o = a.defineSlot(s, r, n);
								if (!o) return c();
								o.addService(a.pubads()), i.set(e, o), o.setCollapseEmptyDiv(!0), d(o, t), a.display(n), c()
							})
						})
					})
				},
				u = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], s.cmd.push(() => {
						Object.keys(t).forEach(e => n.setTargeting(e, t[e]))
					})
				},
				m = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					d(n, t);
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], window.aax && window.aax.cmd.push(() => {
						window.aax.getAbpStatus && window.aax.getAbpStatus() && s.cmd.push(() => {
							s.pubads().refresh([n])
						})
					}), window.apstag.fetchBids({
						slots: [{
							slotID: t.id,
							slotName: [t.slot, t.id].join("/"),
							sizes: t.sizes
						}],
						timeout: 2e3
					}, () => {
						s.cmd.push(() => {
							window.apstag.setDisplayBids(), s.pubads().refresh([n])
						})
					})
				},
				p = e => {
					const t = i.get(e);
					if (!t) return;
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], n.cmd.push(() => {
						o.a.write(() => {
							n.destroySlots([t]), i.delete(e)
						})
					})
				},
				b = e => {
					const t = () => {
						const t = document.createElement("script");
						t.src = e, t.async = !0;
						const n = document.getElementsByTagName("script")[0];
						n && n.parentNode && n.parentNode.insertBefore(t, n)
					};
					if (document.head && (() => {
							const {
								relList: e
							} = document.createElement("link");
							if (!e || !e.supports) return !1;
							try {
								return e.supports("preload")
							} catch (t) {
								return !1
							}
						})()) {
						const n = document.createElement("link");
						n.href = e, n.rel = "preload", n.as = "script", n.onload = t, document.head.insertBefore(n, document.head.firstChild)
					} else t()
				},
				f = e => {
					const t = window.googletag = window.googletag || {};
					t.cmd = t.cmd || [], b("//www.googletagservices.com/tag/js/gpt.js"), t.cmd.push(() => {
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", t => e.onAdView(t, !1)), t.pubads().disableInitialLoad(), t.enableServices()
					}), window.apstag || (window.apstag = {
						_Q: []
					}, window.apstag.init = (...e) => {
						window.apstag._Q.push(["i", e])
					}, window.apstag.fetchBids = (...e) => {
						window.apstag._Q.push(["f", e])
					}, b("//c.amazon-adsystem.com/aax2/apstag.js"), window.apstag.init({
						pubID: "3379",
						adServer: "googletag",
						bidTimeout: 2e3,
						params: {
							aps_privacy: e.limitDataProcessing ? "1YY" : "1--"
						}
					})), window.aax || (window.aax = {
						pubId: "AAX763KC6",
						ver: 1.2,
						initTime: (new Date).getTime(),
						hst: location.hostname,
						deliverExchangeDemand: () => {},
						cmd: [() => window.aax.addEventListener("impressionViewable", t => e.onAdView(t, !0))],
						execute: [() => window.aax.limitDataProcessing(e.limitDataProcessing)]
					}, b(`//c.aaxads.com/aax.js?pub=${window.aax.pubId}&hst=${window.aax.hst}&ver=${window.aax.ver}`))
				}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(s.c)(t)
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "EMBEDS__UNLOADABLE",
				a = "EMBEDS__LOADABLE",
				o = Object(s.a)(r),
				i = Object(s.a)(a)
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "JSAPI__CONSUMER_SUBSCRIBED",
				a = Object(s.a)(r)
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "h", (function() {
				return M
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(r.a)(b),
				g = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				y = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				v = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				_ = Object(r.a)(y),
				E = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				x = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				j = Object(r.a)(x),
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				S = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				P = Object(r.a)(C),
				T = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				w = Object(r.a)(N),
				A = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				L = Object(r.a)(k),
				D = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						o = Object(p.T)(a, {
							subredditId: e
						}).name;
					n(f());
					const i = await Object(c.k)(r(), o, t);
					if (i.ok) {
						n(h({
							subredditId: e,
							isEnabled: t
						}))
					} else n(g());
					return i.ok
				}, R = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						o = Object(p.T)(a, {
							subredditId: e
						}).name;
					n(v());
					const i = await Object(c.j)(r(), t, l.d.LinkFlair, o);
					if (i.ok) {
						n(_({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(E());
					return i.ok
				}, B = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const d = r(),
						m = Object(p.T)(d, {
							subredditId: t
						}).name;
					n(O());
					const b = await Object(c.f)(a(), e, m, l.d.LinkFlair);
					let f = b.ok && !(b.body && !1 === b.body.success);
					if (f) {
						const s = b.body;
						if (n(j({
								subredditId: t,
								template: s
							})), s.id) {
							const r = e.styleTemplate,
								a = d.structuredStyles.flairTemplate.models[s.id];
							r ? f = await n(Object(o.d)(t, s.id, r)) : a && (f = await n(Object(o.c)(t, s.id)))
						}
					}
					if (f) {
						const e = Object(i.d)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(i.e)(e))
					} else {
						n(I());
						const r = Object(i.d)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), B(e, t));
						n(Object(i.e)(r))
					}
					return f
				}, F = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const o = r(),
						d = Object(p.T)(o, {
							subredditId: t
						}).name;
					if (n(S()), (await Object(c.b)(a(), e, d)).ok) {
						n(P({
							subredditId: t,
							templateId: e
						}));
						const r = Object(i.d)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(i.e)(r))
					} else {
						n(T());
						const r = Object(i.d)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(i.e)(r))
					}
				}, U = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const o = r(),
						d = Object(m.d)(o, {
							subredditId: t
						}).templateIds,
						b = Object(p.T)(o, {
							subredditId: t
						}).name;
					if (n(w({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(a(), b, l.d.LinkFlair, e)).ok) {
						n(A());
						const e = Object(i.d)(s.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(i.e)(e))
					} else {
						n(L({
							subredditId: t,
							templateIds: d
						}));
						const r = Object(i.d)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						n(Object(i.e)(r))
					}
				}, M = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (s, r, {
					apiContext: o
				}) => {
					const i = e.flair.filter(e => !Object(d.p)(e.type));
					if (t && i.unshift(t), s(Object(a.L)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const s = Object(d.g)(t);
						Object(c.h)(o(), e.id, n, s)
					} else Object(c.h)(o(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "c", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forEach.js"),
				r = n.n(s),
				a = n("./node_modules/lodash/isEqual.js"),
				o = n.n(a),
				i = n("./node_modules/lodash/values.js"),
				c = n.n(i),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/trackers/blade.ts"),
				g = n("./src/reddit/models/Image/index.tsx"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/telemetry/index.ts");
			const _ = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: s
			}) => async (r, a, o) => {
				const i = a(),
					c = Object(y.T)(i, {
						subredditId: e
					});
				if (!c) return !1;
				r(Object(l.k)(s));
				const d = await (async (e, t, n, s, r, a) => Object(p.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: m.cb.POST,
					data: {
						filepath: s,
						imagetype: r,
						mimetype: a
					}
				}))(o.apiContext(), c.name, t, s.file.name, n, await Object(u.g)(s.file));
				let h = !1;
				try {
					const e = await Object(l.g)(a(), d, s, g.a.FlairTemplates);
					e && r(Object(l.j)(e)), h = !0
				} catch (v) {
					if (v instanceof Error) throw v;
					r(Object(l.i)(v))
				}
				return h
			}, E = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", x = Object(d.a)(E), O = (e, t, n) => async (s, a, i) => {
				const {
					apiContext: d
				} = i;
				let u = a();
				const {
					pendingImages: E,
					...O
				} = n;
				let j = O;
				const I = Object(y.T)(u, {
					subredditId: e
				});
				if (!I) return !1;
				const C = u.structuredStyles.flairTemplate.models[t];
				if (C && o()(C, j)) return !0;
				if (E) {
					const n = [];
					if (r()(E, (r, a) => {
							r && n.push(s(_({
								flairId: t,
								imageData: Object(g.m)(r),
								imageKey: a,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					j = ((e, t, n) => {
						const s = {
							...e
						};
						return r()(t, (e, t) => {
							const r = e && n.imageUploads[e.id];
							r && r.kind === g.b.TempUploaded && (s[t] = r.url)
						}), s
					})(j, E, a())
				}
				u = a();
				let S = null,
					P = null;
				const T = [];
				try {
					(S = await Object(l.f)(u, g.a.FlairTemplates)) && (P = Object(l.m)(S)(s, a, i), T.push(...c()(S.imagesByKey)))
				} catch (A) {
					return !1
				}
				const N = await (async (e, t, n, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.cb.PUT,
						data: s
					}))(d(), I.name, t, j),
					k = C ? "edit_post_flair_template" : "save_post_flair_template",
					w = Object(h.e)(u, k);
				if (N.ok) {
					let e;
					if (P) try {
						await P, e = ((e, t, n) => {
							const s = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === g.b.Uploaded && (e.url === s.postBackgroundImage ? s.postBackgroundImage = t.url : e.url === s.postPlaceholderImage && (s.postPlaceholderImage = t.url))
							}), s
						})(j, T, a())
					} catch (A) {
						e = null
					} else e = j;
					s(x({
						flairId: t,
						template: e || j
					}))
				} else S && S.websocket.close();
				return Object(v.a)({
					...w,
					actionInfo: {
						...w.actionInfo,
						success: N.ok
					}
				}), N.ok
			}, j = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", I = Object(d.a)(j), C = (e, t) => async (n, s, {
				apiContext: r
			}) => {
				const a = s(),
					o = Object(y.T)(a, {
						subredditId: e
					});
				if (!o) return !1;
				const i = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.cb.DELETE
					}))(r(), o.name, t),
					c = Object(h.e)(a, "delete_flair_template");
				return i.ok && n(I({
					flairId: t
				})), Object(v.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const a = "POSTLIST__MARKED_END",
				o = "POSTLIST__UNMARKED_END",
				i = Object(s.a)(a),
				c = Object(s.a)(o),
				d = (e, t) => async (n, s) => {
					const a = s();
					e in a.listings.postOrder.fetchedTokens ? e in a.listings.postOrder.ids ? n(c({
						listingKey: e
					})) : r.j(a, e) : n(i({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				a = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return A
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "b", (function() {
				return H
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var f = n("./src/graphql/operations/SubscribedSubreddits.json"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var y = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = n("./src/reddit/models/GqlTopLevelField.ts"),
				E = n("./src/reddit/models/User/index.ts");

			function x(e) {
				const t = [],
					n = [],
					s = {},
					r = {},
					{
						followedRedditorsInfo: a
					} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== E.c.AvailableRedditor) continue;
					const e = Object(y.a)(i.node.profile);
					s[e.id] = e;
					const {
						isFavorite: n
					} = i.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== _.a.Subreddit) continue;
					const e = Object(v.a)(i.node);
					r[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: s,
					subreddits: r
				}
			}
			var O = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/profile.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/subscriptions.ts"),
				S = n("./src/reddit/selectors/user.ts");
			const P = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				T = Object(a.a)(d.c),
				N = Object(a.a)(d.b),
				k = Object(a.a)(d.a),
				w = Object(a.a)(d.h),
				A = (Object(a.a)(d.i), Object(a.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(N());
					const r = await (e => Object(h.a)(e, f))(n());
					if (r.ok) {
						const t = x(r.body.data);
						e(T(t))
					} else e(k({
						error: r.error
					}))
				}),
				L = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, n) => async (a, d, {
					apiContext: f
				}) => {
					let h = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(I.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(j.m)(d(), e.name),
						name: `${r.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(S.J)(d())) return a(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void a(Object(i.j)());
					const y = Object(S.i)(d());
					if (y) {
						const t = h.length,
							n = e.length;
						if (h = h.filter(e => !L(y, e)), (e = e.filter(e => !L(y, e))).length !== n || h.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							a(Object(l.e)(Object(l.d)(e, O.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					if (a(w({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(C.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: s
						}) => Object(m.a)(Object(p.a)(e, [b.a]), {
							method: r.cb.POST,
							endpoint: Object(g.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: s ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(f(), {
							subredditNames: h.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : `${s.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						a(Object(l.e)({
							text: 1 === e.length && "profile" === e[0].type ? s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "followed" : "unfollowed"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "joined" : "left"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						a(w({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(C.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const r = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						a(Object(l.e)(Object(l.d)(r, O.b.Error)))
					}
				}, R = Object(a.a)(d.f), B = e => async (t, n, {
					apiContext: s
				}) => {
					const a = n(),
						o = Object(I.L)(a, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = a.subscriptions.favoriteSubredditOrder || [],
						d = a.subscriptions.favoriteProfileOrder || [],
						f = c.indexOf(e.id),
						h = d.indexOf(e.id),
						g = -1 === f && -1 === h,
						y = a.subreddits.models,
						v = a.profiles.models;
					t(R({
						makeFavorite: g,
						identifier: e,
						subredditModels: y,
						profileModels: v
					}));
					const _ = {
							type: e.type,
							name: o.name
						},
						E = () => Object(I.gb)(n(), {
							identifier: _
						});
					(E() || (await t(D([_], !0)), E())) && ((await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(s(), i, g)).ok || (t(R({
						makeFavorite: !g,
						identifier: e,
						subredditModels: y,
						profileModels: v
					})), t(Object(l.e)({
						text: P(),
						kind: O.b.Error
					}))))
				}, F = Object(a.a)(d.d), U = e => async (t, n, {
					apiContext: s
				}) => {
					const a = n().multireddits.models,
						o = () => {
							t(Object(l.e)({
								text: P(),
								kind: O.b.Error
							}))
						},
						i = a[e];
					if (!i) return void o();
					const c = !i.isFavorited;
					t(F({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, c)).ok || (t(F({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), o())
				}, M = Object(a.a)(d.e), H = e => async (t, n, {
					apiContext: a
				}) => {
					const o = n(),
						i = o.multireddits.models;
					if (!Object(S.J)(o)) return;
					const c = (e = !0) => {
							t(Object(l.e)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: O.b.Error
							}))
						},
						d = i[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(M({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(a(), e, u)).ok || (t(M({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c(u))
				}
		},
		"./src/reddit/components/AwardedListingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "Euf0eewj0MUfCAneI6fj_",
				title: "_3ugv2ujLUVD37KHjuncuRT",
				close: "_3JAHw6m54Wrjm0rnX7GgRZ",
				dismissedContainer: "_1HciFW1Gf3BHBs0dEvE_tk",
				dismissedText: "_1cXKsx4apv5X14RmNQ0794",
				iconCarouselWrapper: "_2BnXKMLxfFWoe-pZcfIiIm",
				awardIcon: "_34m3e-Z2OR_TEdYH0Ih7O6",
				linearAnimation: "_4HAlQmVogiasYQ9srm4z4",
				iconCarouselInnerWrapper0: "_2fP0vb7wP0Afwdaw6cwZpG",
				slide0: "_3GqXepZa1qvL1X0wE8N0e2",
				iconCarouselInnerWrapper1: "_2O70Ew5pvoBSnOqL4T5EGx",
				slide1: "Fo2rMgLePrq248kivE__Q",
				scale: "_1IMFuS4ukJn7lP178Rtiqd",
				fadeInALittle: "_2KMwT7J3kyGA-____-iftE",
				fadeInTheRest: "_2BxmXNxZx082mr62D3k1LQ"
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/banners.ts"),
				i = n("./src/reddit/constants/page.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./node_modules/lodash/sampleSize.js"),
				b = n.n(p),
				f = n("./src/reddit/models/Gold/Award.ts"),
				h = n("./src/reddit/components/AwardedListingBanner/index.m.less"),
				g = n.n(h);
			const y = 11,
				v = 1e3,
				_ = 500,
				E = [g.a.iconCarouselInnerWrapper0, g.a.iconCarouselInnerWrapper1];

			function x({
				asset: e
			}) {
				return r.a.createElement("div", {
					className: g.a.awardIcon,
					style: {
						backgroundImage: `url('${e}')`
					}
				})
			}
			const O = Object(m.c)({
				awards: e => e.awards.models
			});
			class j extends s.Component {
				constructor(e) {
					super(e), this.state = {
						animationClass: E[0],
						icons: []
					}
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateOrdering(), v + _)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateOrdering() {
					this.setState(e => {
						const t = [...e.icons];
						return t.unshift(t.pop()), {
							icons: t,
							animationClass: e.animationClass === E[0] ? E[1] : E[0]
						}
					})
				}
				shouldComponentUpdate(e, t) {
					return this.state.animationClass !== t.animationClass
				}
				static getDerivedStateFromProps(e, t) {
					if (t.icons.length) return null;
					const n = Object.values(e.awards).filter(e => {
						return e.awardType === f.f.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: b()(n, y).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return r.a.createElement(x, {
								asset: n,
								key: e.id
							})
						})
					} : null
				}
				render() {
					const {
						animationClass: e,
						icons: t
					} = this.state;
					return r.a.createElement("div", {
						className: g.a.iconCarouselWrapper
					}, r.a.createElement("div", {
						className: e
					}, t))
				}
			}
			var I = Object(u.b)(O)(j);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var S;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(S || (S = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.f)(o.a.AWARDED_LISTING_BANNER, i.f), [u, m] = Object(s.useState)(n ? S.Hidden : S.Visible);
				if (u === S.Hidden) return null;
				const p = () => {
					m(S.Visible), Object(c.W)(o.a.AWARDED_LISTING_BANNER, !1, i.f)
				};
				return u === S.Dismissed ? r.a.createElement("div", {
					className: Object(a.a)(g.a.dismissedContainer, t)
				}, r.a.createElement("div", {
					className: g.a.dismissedText
				}, C._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), r.a.createElement(d.i, {
					onClick: p
				}, C._("undo", null, {
					hk: "1A9z3Y"
				}))) : r.a.createElement("div", {
					className: Object(a.a)(g.a.container, t)
				}, r.a.createElement("h2", {
					className: g.a.title
				}, C._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), r.a.createElement(I, null), r.a.createElement(l.a, {
					className: g.a.close,
					onClick: () => {
						m(S.Dismissed), Object(c.W)(o.a.AWARDED_LISTING_BANNER, !0, i.f)
					}
				}))
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/connectors/PostViewable/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(o.a)(null),
				l = ({
					className: e,
					post: t
				}) => t.isSponsored ? r.a.createElement(a.a, {
					post: t,
					trackDisplay: !0
				}, r.a.createElement("div", {
					className: Object(i.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(c.b)(d(l))
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				buttonFontXS: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontXs: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontS: "_1l-KcydphK1LZ0DY8WNS7-",
				buttonFontM: "_2-Ytw7EJuJ76FU11odY0vH",
				buttonFontL: "_1fMOhvVkzFghuFsd8kzAEz",
				buttonFontXL: "_25jU9LTEsPZrTgo4UTgEvr",
				buttonFontXl: "_25jU9LTEsPZrTgo4UTgEvr",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/banners.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				p = n("./src/reddit/icons/svgs/CirclePost/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				g = n.n(h);
			const y = Object(o.b)(null, e => ({
				showToast: () => {
					e(Object(i.e)({
						kind: f.b.SuccessCommunity,
						text: s.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class v extends a.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.W)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(m.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(m.a)())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = !Object(u.f)(d.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(m.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? a.a.createElement("div", {
						className: g.a.banner
					}, a.a.createElement("button", {
						className: g.a.closeContainer,
						onClick: this.closeBanner
					}, a.a.createElement(b.a, {
						className: g.a.close
					})), a.a.createElement(p.a, {
						className: g.a.postIcon
					}), a.a.createElement("div", {
						className: g.a.heading
					}, s.fbt._("Create the ideal {subredditDisplayText} post", [s.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), a.a.createElement("div", {
						className: g.a.text
					}, s.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), a.a.createElement("br", null), s.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), a.a.createElement("div", {
						className: g.a.buttonWrapper
					}, a.a.createElement(l.j, {
						className: g.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, s.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = y(Object(c.c)(v))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = n.n(o);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(a.a)(i.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(a.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(a.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/DownToChatBanner/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundAnimationStyles: "nu9ZkGwD7hyrRLI6Isf0L",
				Container: "_3HwENDlXUGoAOP6zptLsmD",
				container: "_3HwENDlXUGoAOP6zptLsmD",
				backgroundAnimation: "E0C3InHZ3RJwQ52gcvYvk",
				Footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				Title: "_1XKqWvpbNVuWQvCDOzDnY9",
				title: "_1XKqWvpbNVuWQvCDOzDnY9",
				Description: "_2jyh4u7PkcB4yzPbeF0o5D",
				description: "_2jyh4u7PkcB4yzPbeF0o5D",
				AvatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				avatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				Avatar: "_368cN6FwbMRDo7PzTz7IsF",
				avatar: "_368cN6FwbMRDo7PzTz7IsF",
				editableIcon: "_191Gjm6x9puYH4dNQ6ISjj",
				emptyEditableIcon: "iM8M6DgU7p5Ok8n_Ks0gt",
				CloseButton: "_32Qext59XJHMV7WLlayaa",
				closeButton: "_32Qext59XJHMV7WLlayaa",
				Close: "_1KqEjgaeL1FeIc48mzjBo4",
				close: "_1KqEjgaeL1FeIc48mzjBo4",
				Counter: "_1I9s8rY01sj6dSMpZ120Pu",
				counter: "_1I9s8rY01sj6dSMpZ120Pu"
			}
		},
		"./src/reddit/components/DownToChatBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/actions/downToChat.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				m = n("./src/reddit/icons/svgs/DownToChatAvatar/index.tsx"),
				p = n("./src/reddit/selectors/downToChat.ts"),
				b = n("./src/reddit/selectors/experiments/downToChat.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				g = n("./src/reddit/components/DownToChatBanner/index.m.less"),
				y = n.n(g);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = i.a.wrapped(m.a, "Avatar", y.a), E = i.a.div("AvatarContainer", y.a), x = i.a.wrapped(u.a, "Close", y.a), O = i.a.button("CloseButton", y.a), j = i.a.div("Counter", y.a), I = i.a.p("Description", y.a), C = i.a.div("Footer", y.a), S = i.a.h1("Title", y.a), P = i.a.div("Container", y.a), T = Object(o.c)({
				accountsActive: (e, t) => {
					const {
						subreddit: n
					} = t;
					if (n && n.name) {
						const t = Object(f.x)(e, {
							subredditName: n.name
						});
						return t && t.accountsActive
					}
				},
				isDownToChatExperimentEnabled: b.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(p.b)(e, t.id)
			}), N = Object(a.b)(T, e => ({
				dismissBanner: t => e(Object(d.h)(t)),
				fetchDownToChatAvailability: t => e(Object(d.j)(t))
			}));
			class k extends r.a.Component {
				constructor(e) {
					super(e), this.onCloseButtonClick = () => {
						const {
							subreddit: e,
							dismissBanner: t
						} = this.props, {
							isDismissed: n
						} = this.state;
						n || (this.setState({
							isDismissed: !0
						}), t(e.id))
					}, this.state = {
						isDismissed: !1
					}
				}
				render() {
					const {
						accountsActive: e,
						isDownToChatExperimentEnabled: t,
						subreddit: n,
						isEnabled: s
					} = this.props, {
						isDismissed: a
					} = this.state;
					return t && s && !a ? r.a.createElement(P, null, r.a.createElement(E, null, r.a.createElement(_, null)), r.a.createElement(S, null, v._("Find people who want to chat", null, {
						hk: "3Y6Pm1"
					})), r.a.createElement(I, null, v._("Bored at home? Want someone to talk to? Reddit will match you with members who want to chat too.", null, {
						hk: "3HaCWZ"
					})), r.a.createElement(C, null, r.a.createElement(h.a, {
						subreddit: n
					}), e ? r.a.createElement(j, null, v._("{viewingCount} Online", [v._param("viewingCount", Object(c.b)(e))], {
						hk: "LsWtb"
					})) : null), r.a.createElement(O, {
						onClick: this.onCloseButtonClick
					}, r.a.createElement(x, null))) : null
				}
			}
			t.a = N(Object(l.c)(k))
		},
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PowerupsLevel2PerksBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PowerupsLevel2PerksBanner").then(n.bind(null, "./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", a)
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-ClaimPointsBanner").then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = Object(r.a)("spClaimablePoints", a)
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistrationStellarBanner").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spStellarWalletRegistration
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				trending: "_2H51id1RX9dGNrtrAIOMGK",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				multi: "_3Hhjob0kyyqVjBXut8STgU",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				trendingContent: "BNJ5Y52EyQmTHFZJwjoXJ",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: o,
					title: c
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? r.a.createElement(d, null, s) : r.a.createElement(d, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: i.a.title
				}, c), o && r.a.createElement("div", {
					className: i.a.subtitle
				}, o)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				f = n.n(b);
			const h = a.a.createElement(u.a, {
					className: f.a.icon
				}),
				g = Object(i.c)({
					subreddit: m.A,
					subredditAboutInfo: m.x
				}),
				y = Object(o.b)(g);
			t.a = y(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = n && n.quarantineMessageHtml,
					o = n && n.quarantineMessage || s.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return a.a.createElement(p.a, {
					className: f.a.container,
					color: d.b.quarantine,
					icon: h,
					subtitle: a.a.createElement("span", null, s.fbt._("This community is {=quarantined}", [s.fbt._param("=quarantined", a.a.createElement("a", {
						className: f.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, s.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? a.a.createElement(c.a, {
						className: f.a.rawHtmlDisplay,
						html: r
					}) : o, " ", a.a.createElement(l.a, {
						className: f.a.link,
						to: "/"
					}, s.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: s.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(r.createContext)(null),
				u = Object(r.createContext)(null);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return a.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, a.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = o.f + 10,
				b = a.a.memo(() => a.a.createElement(l.Consumer, null, e => e && a.a.createElement("div", {
					className: d.a.wrapper
				}, a.a.createElement(i.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, s.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), a.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				f = a.a.memo(() => a.a.createElement(u.Consumer, null, e => a.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: o,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, n),
					style: Object(i.c)(s, e),
					onClick: o
				}, p), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/LRUCache/index.ts"),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				f = n.n(b);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				className: e
			}) => r.a.createElement("div", {
				className: Object(i.a)(e, f.a.container, f.a.placeholder, f.a.large, p.a.largeAndMediumPostStyles)
			}, r.a.createElement(l.a, {
				className: f.a.backgroundWrapper
			}, r.a.createElement("div", {
				className: f.a.titleAndDescriptionContainer
			}, r.a.createElement("h3", {
				className: f.a.title
			}, h._("Top broadcast", null, {
				hk: "HADCh"
			}))), r.a.createElement("div", {
				className: f.a.body
			}, r.a.createElement("div", {
				className: f.a.previewContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(f.a.thumbnail, f.a.loading)
			})))));
			var y = ({
				className: e,
				layout: t
			}) => t === u.g.Classic ? r.a.createElement(c.b, {
				className: Object(i.a)(e, f.a.classicPostPlaceholder),
				isLoading: !0
			}) : t === u.g.Compact ? r.a.createElement(d.a, {
				className: Object(i.a)(e, f.a.compactPostPlaceholder),
				isLoading: !0
			}) : r.a.createElement(g, {
				className: e
			});
			const v = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: ({
					className: e,
					layout: t
				}) => r.a.createElement(y, {
					className: e,
					layout: t
				}),
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var _ = e => r.a.createElement(v, e),
				E = n("./src/reddit/helpers/trackers/rpan.ts");
			const x = e => e === u.g.Classic ? 88 : e === u.g.Compact ? 42 : 340,
				O = new a.a(20),
				j = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = O.get(t);
					if (n) return n;
					const s = I(e.desiredIndex, e.children),
						a = {
							child: {
								id: t,
								estHeight: x(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(E.G)()),
								render: ({
									className: t
								}) => r.a.createElement(_, {
									className: t,
									layout: e.layout,
									listingName: e.listingName
								})
							},
							idx: s
						};
					return O.set(t, a), a
				},
				I = (e, t) => {
					const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; n.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a);
			class i extends o.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return o.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(i);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(a.a)(c.a.container, d, t)
				}, r.a.createElement(o.a, {
					className: c.a.layout,
					bodyClassName: Object(a.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(a.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.createElement(o.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				y = n("./src/reddit/selectors/userPrefs.ts"),
				v = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = n.n(v);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = u.a.div("BladeContainer", _.a), O = u.a.wrapped(f.a, "CloseIcon", _.a), j = u.a.div("LoadingTitleContainer", _.a), I = u.a.div("LoadingNavContainer", _.a), C = u.a.div("ShortLoadingNav", _.a), S = u.a.wrapped(b.a, "ThemedChevron", _.a), P = ({
				...e
			}) => o.a.createElement(x, null, o.a.createElement(O, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(p.o, null, o.a.createElement(j, null, o.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingTitle, e.isLoading && _.a.loading)
			})), o.a.createElement(I, null, o.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), o.a.createElement(S, null)), o.a.createElement(I, null, o.a.createElement(C, null), o.a.createElement(S, null)), o.a.createElement(I, null, o.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), o.a.createElement(S, null)), o.a.createElement(I, null, o.a.createElement(C, null), o.a.createElement(S, null)), o.a.createElement(I, null, o.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), o.a.createElement(S, null))))), T = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(P, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(P, {
					gradientType: "posts",
					isLoading: !0
				})
			}), N = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: y.b,
				moderatorPermissions: h.i
			});
			t.a = Object(i.b)(N)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(T, {
					subredditId: e.subredditId
				})) : o.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const o = s.a.section("FormPage", a.a),
				i = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				d = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				f = s.a.div("FormGroupDescription", a.a),
				h = s.a.div("FormItem", a.a),
				g = s.a.h3("FormElementTitle", a.a),
				y = s.a.div("FormElementDescription", a.a),
				v = s.a.div("FormElementError", a.a),
				_ = s.a.div("FormElementSubGroup", a.a),
				E = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...n
				}) => a.a.createElement(o.q, u({}, n, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...s
				}) => a.a.createElement(o.q, u({}, s, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: n ? o.c.S : o.c.M,
					text: p(e)
				}));
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						small: s = !1
					} = this.props, r = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(b, u({}, r, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, r, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => a[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(a.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(o.c)({
					postCount: l.N,
					previousPageIsOverlay: d.n,
					tabBadged: e => e.tabBadged
				}),
				m = Object(a.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = r.a.createContext(() => {});

			function l({
				children: e
			}) {
				const t = Object(a.f)(),
					n = Object(s.useCallback)(e => {
						{
							const n = t.getState(),
								s = e(n);
							Object(i.a)({
								...o.defaults(n),
								...s
							})
						}
					}, [t]);
				return r.a.createElement(d.Provider, {
					value: n
				}, e ? r.a.Children.only(e) : null)
			}

			function u() {
				return Object(s.useContext)(d)
			}

			function m(e) {
				function t(t) {
					const n = u();
					return r.a.createElement(e, c({}, t, {
						sendEvent: n
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/components/BlankPost/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends r.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? r.a.createElement(o.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : r.a.createElement(a.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = c(d)
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: o.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(o.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(a.h)(t))
			}))
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner"
				}(s || (s = {}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(s || (s = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "d", (function() {
					return s
				})), n.d(t, "c", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(s || (s = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(r || (r = {}));
			const a = "SHORTCUT_FOCUSABLE_DIV",
				o = [9, 13, 32]
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(s.createContext)(o);

			function c(e) {
				return t => r.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: s
				}) => r.a.createElement(e, a({
					apiContext: n,
					gqlContext: s
				}, t)))
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, a = n || s;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !a && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => r.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Search/index.m.less"),
				f = n.n(b);
			const h = Object(a.b)(() => Object(o.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.A)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}));
			t.a = h(e => r.a.createElement("div", {
				className: Object(i.a)(p.a.subText, f.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => r.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, r.a.createElement(l.b, {
				className: Object(i.a)(f.a.subredditIcon, f.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : r.a.createElement(l.b, {
				className: Object(i.a)(f.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && r.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2xQx4j6lBnDGQ8QsRnJEJa",
				iconContainer: "_2QGKgHKTtOwKHI4B_LI0YM",
				icon: "_1hdDhVEGWEdVJcgy2XQ2Eq",
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ"
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, s) => {
					let a = Object(r.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						o = t;
					for (; a && a.depth > n && a.prev && (o = a.prev, (a = Object(r.n)(s, {
							commentLink: o,
							commentsPageKey: e
						})) && !(a.depth <= n)););
					return o.id
				},
				u = (e, t, n) => {
					const {
						commentLists: s,
						comments: r
					} = e, {
						head: i
					} = s[t];
					if (i) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: a.w,
								expEventOverride: t
							});
							return !!(Object(a.ud)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				if (!(t && n && s && r)) throw new Error("subreddit, amount, and memo query params required for vault action");
				return {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				}
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, a, o, i, c, d;
				return e ? e.quarantinedSubreddit ? (a = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (a = s.a.PrivateSubreddit, o = e.subredditDescription) : e.goldSubreddit ? a = s.a.GoldSubreddit : e.subredditBanned ? (a = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? a = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (a = s.a.SubredditBlockedForLegalReason) : t && (a = s.a.Nsfw), a && n ? {
					banMessage: r,
					contentGateType: a,
					subredditDescription: o,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const n = Array.prototype.slice.call(arguments);
								return n.unshift(t), e.push(n), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const n = e.methods[t];
							e[n] = e.factory(n)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const n = document.getElementsByTagName("script")[0];
							n.parentNode.insertBefore(t, n)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.l)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(a.a)(Object(r.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "dfp",
					action: "request",
					noun: "ad",
					...r.defaults(e),
					subreddit: r.subreddit(e)
				}),
				o = () => e => ({
					source: "dfp",
					action: "define",
					noun: "ad",
					...r.defaults(e),
					subreddit: r.subreddit(e)
				}),
				i = (e, t) => n => {
					const a = t ? e.dfpDetails.slot.getSlotId().getDomId() : e.slot.getSlotId().getDomId(),
						o = -1 !== a.indexOf(s.c.ABOVE_THE_FOLD) ? s.c.ABOVE_THE_FOLD : s.c.BELOW_THE_FOLD,
						i = document.querySelector("#" + a);
					let c, d;
					if (i && (c = s.f.HOUSE_AD, -1 !== i.innerHTML.indexOf("google_ads_iframe") && (c = s.f.PROGRAMMATIC_AD), i.children && i.children.length > 0)) {
						const e = i.children[0];
						d = `${e.offsetWidth}x${e.offsetHeight}`
					}
					const l = t ? "aax" : void 0;
					return {
						source: "post",
						action: "view",
						noun: "programmatic_ad",
						...r.defaults(n),
						subreddit: r.subreddit(n),
						programmatic: {
							adUnit: d ? `DESKTOP ${d} ${o}` : `DESKTOP ${o}`,
							count: 1,
							partner: l,
							type: c
						}
					}
				},
				c = (e, t, n) => a => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...r.defaults(a),
					subreddit: r.subreddit(a),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: s.f.SWITCH_HOUSE_AD
					}
				})
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "E", (function() {
				return j
			})), n.d(t, "F", (function() {
				return I
			})), n.d(t, "M", (function() {
				return S
			})), n.d(t, "B", (function() {
				return P
			})), n.d(t, "C", (function() {
				return T
			})), n.d(t, "D", (function() {
				return N
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "w", (function() {
				return w
			})), n.d(t, "x", (function() {
				return A
			})), n.d(t, "L", (function() {
				return L
			})), n.d(t, "K", (function() {
				return D
			})), n.d(t, "I", (function() {
				return R
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "z", (function() {
				return U
			})), n.d(t, "A", (function() {
				return M
			})), n.d(t, "N", (function() {
				return H
			})), n.d(t, "J", (function() {
				return W
			})), n.d(t, "t", (function() {
				return G
			})), n.d(t, "H", (function() {
				return K
			})), n.d(t, "d", (function() {
				return q
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "b", (function() {
				return Z
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "e", (function() {
				return z
			})), n.d(t, "s", (function() {
				return X
			})), n.d(t, "m", (function() {
				return $
			})), n.d(t, "r", (function() {
				return ee
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return se
			})), n.d(t, "p", (function() {
				return re
			})), n.d(t, "q", (function() {
				return ae
			})), n.d(t, "o", (function() {
				return oe
			})), n.d(t, "j", (function() {
				return ie
			})), n.d(t, "u", (function() {
				return ce
			})), n.d(t, "G", (function() {
				return de
			}));
			var s, r = n("./src/lib/stringInterpolate/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/models/Widgets/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const f = "discovery_unit",
				h = (e, t, n) => ({
					...m.defaults(e),
					source: f,
					screen: m.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(r.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				g = (e, t, n) => ({
					...h(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				y = (e, t) => {
					Object(b.a)(v(t)(e))
				},
				v = (e, t) => n => g(n, e, t),
				_ = (e, t, n, s) => "unitName" in t ? h(e, t, s) : ((e, t, n) => ({
					...m.defaults(e),
					source: "search",
					screen: m.screen(e),
					search: n ? {
						...m.search(e, n),
						structureType: m.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				E = (e, t, n, r, a) => ({
					..._(e, t, r, a),
					action: "view",
					noun: s.ITEM_POST,
					post: m.post(e, n)
				}),
				x = ({
					post: e,
					rawQuery: t,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? m.StructureType.PromotedTrend : m.StructureType.Trending
				});
			var O;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(O || (O = {}));
			const j = (e, t, n) => {
					Object(b.a)(C(e, t, n, o.c.CLICK))
				},
				I = (e, t, n) => {
					Object(b.a)(C(e, t, n, o.c.VIEW))
				},
				C = (e, t, n, s) => {
					const r = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...m.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: x(t),
						discoveryUnit: n === O.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: m.actionInfo(e, {
							paneName: n,
							position: r
						}),
						search: {
							originPageType: e.platform.currentPage ? m.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: m.StructureType.Trending,
							queryId: s === o.c.CLICK ? Object(i.c)(i.a.SearchResults) : void 0
						}
					}
				},
				S = (e, t, n, s, r, a, i) => {
					Object(b.a)({
						...m.defaults(e),
						...Object(c.e)(e, n, s, r, a, t),
						action: o.c.VIEW,
						noun: i ? "ad" : "post"
					})
				},
				P = (e, t, n, s) => {
					Object(b.a)(E(e, t, n, s))
				},
				T = (e, t, n, s) => r => E(r, e, t, n, s),
				N = (e, t, n, r) => {
					const a = _(e, t, r);
					Object(b.a)({
						...a,
						...Object(p.b)(e, n),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				k = (e, t) => {
					Object(b.a)({
						...h(e, t),
						source: f,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				w = (e, t, n, s) => {
					Object(b.a)(A(t, n, s)(e))
				},
				A = (e, t, n, r) => a => {
					return {
						..._(a, e, n, r),
						source: f,
						action: o.c.CLICK,
						noun: s.ITEM_POST,
						post: m.post(a, t)
					}
				},
				L = (e, t, n, s) => r => a => Object(c.e)(a, r, e, t, n, s),
				D = (e, t, n, s) => r => a => Object(c.d)(a, e, t, void 0, n, r, s),
				R = (e, t, n, s) => r => a => ({
					...Object(c.e)(a, r, e, t, n, s),
					noun: "ad"
				}),
				B = (e, t) => n => r => ({
					...e ? h(r, e, t) : {},
					source: f,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: m.post(r, n)
				}),
				F = (e, t, n, s) => {
					Object(b.a)(U(t, n, s)(e))
				},
				U = (e, t, n, s) => r => {
					const a = Object(u.c)(r, {
							postId: t
						}),
						i = a ? Object(p.b)(r, a) : void 0;
					return {
						..._(r, e, n, s),
						...i,
						source: f,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: m.post(r, t)
					}
				},
				M = (e, t, n) => s => r => {
					const a = Object(u.c)(r, {
							postId: t
						}),
						i = a ? Object(p.b)(r, a) : void 0;
					return {
						..._(r, e, void 0, n),
						...i,
						source: f,
						action: o.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: m.post(r, t)
					}
				},
				H = (e, t, n) => {
					const s = _(e, t);
					Object(b.a)({
						...s,
						...Object(p.b)(e, n),
						source: "search",
						action: o.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				W = (e, t, n, s, r, a) => {
					Object(b.a)({
						...m.defaults(e),
						...Object(c.d)(e, t, n, s, r, void 0, a)
					})
				},
				G = (e, t, n) => {
					const s = _(e, t);
					Object(b.a)({
						...s,
						...Object(p.b)(e, n),
						source: f,
						action: o.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				K = (e, t) => n => {
					const s = Object(l.j)(t);
					return {
						...h(n, e, t),
						...Object(p.b)(n, s),
						source: f,
						action: o.c.CLICK,
						noun: "title_subreddit"
					}
				},
				q = (e, t) => n => ({
					...h(n, e, t),
					action: "status",
					actionInfo: m.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				V = (e, t, n) => s => ({
					...h(s, e, n),
					action: "status",
					actionInfo: m.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				Z = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "close"
				}),
				Q = (e, t, n) => s => ({
					..._(s, e, t, n),
					action: "click",
					noun: "scroll"
				}),
				z = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				J = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: a.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				Y = (e, t, n) => m.actionInfo(e, {
					position: n
				}),
				X = (e, t, n) => {
					const s = J();
					return e => ({
						...g(e, s),
						actionInfo: Y(e, 0, n),
						subreddit: m.subredditById(e, t)
					})
				},
				$ = (e, t, n) => {
					const s = J();
					return e => ({
						...E(e, s, t),
						actionInfo: Y(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const r = J();
					return e => ({
						...h(e, r),
						actionInfo: Y(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: o.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const r = J();
					return e => ({
						...h(e, r),
						actionInfo: Y(e, 0, n),
						post: m.post(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				ne = (e, t, n, r) => {
					const a = J();
					return e => ({
						...h(e, a),
						actionInfo: Y(e, 0, r),
						subreddit: m.subredditById(e, n) || null,
						post: m.post(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, n) => {
					const r = J();
					return e => ({
						...h(e, r),
						actionInfo: Y(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				re = (e, t, n, r) => {
					const a = J();
					return e => ({
						...h(e, a),
						actionInfo: Y(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						post: r ? m.post(e, r) : null,
						source: f,
						action: o.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ae = (e, t, n, r) => {
					const a = J();
					return e => ({
						...h(e, a),
						actionInfo: Y(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						post: r ? m.post(e, r) : null,
						source: f,
						action: o.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				oe = (e, t, n) => {
					const r = J();
					return e => ({
						...h(e, r),
						actionInfo: Y(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ie = (e, t, n) => {
					const r = J();
					return e => ({
						...h(e, r),
						actionInfo: Y(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				ce = (e, t) => n => ({
					...h(n, e),
					...t && Object(p.b)(n, t),
					source: f,
					action: o.c.CLICK,
					noun: "item"
				}),
				de = e => t => ({
					...h(t, e),
					source: f,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...r(t)
				}),
				o = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "u", (function() {
				return S
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "y", (function() {
				return k
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "m", (function() {
				return F
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "v", (function() {
				return K
			})), n.d(t, "g", (function() {
				return q
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/media/index.ts"),
				o = n("./src/reddit/models/PostCreationForm/index.ts"),
				i = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/postDraft.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/telemetry/index.ts"),
				m = n("./src/telemetry/models/PostComposer.ts"),
				p = n("./src/telemetry/models/PostDraft.ts");
			const b = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				f = e => ({
					source: "post_composer",
					action: s.c.CLICK,
					...d.defaults(e),
					screen: d.screen(e),
					correlationId: Object(r.c)(r.a.PostComposer)
				}),
				h = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === o.h.MARKDOWN ? "markdown" : "rte"
				},
				g = e => {
					Object(u.a)({
						noun: "cancel",
						...f(e)
					})
				},
				y = e => {
					Object(u.a)({
						noun: "discard",
						...f(e)
					})
				},
				v = e => {
					Object(u.a)({
						noun: "subreddit_choice",
						subreddit: d.subreddit(e),
						...f(e),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				_ = e => {
					Object(u.a)({
						noun: "subreddit_selector",
						...f(e)
					})
				},
				E = (e, t) => {
					Object(u.a)({
						noun: "post_type_selector",
						postComposer: {
							type: b[t]
						},
						...f(e)
					})
				},
				x = () => e => ({
					noun: "add_option",
					...f(e)
				}),
				O = () => e => ({
					noun: "voting_length",
					...f(e)
				}),
				j = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(u.a)({
						noun: t,
						...f(e)
					}) : Object(u.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						},
						...f(e)
					})
				},
				I = (e, t, n) => {
					Object(u.a)({
						noun: "post",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						post: n ? d.post(e, n) : null,
						...f(e)
					})
				},
				C = (e, t) => {
					const n = t === o.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(u.a)({
						noun: n,
						...f(e)
					})
				},
				S = (e, t) => {
					Object(u.a)({
						noun: "save",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						...f(e)
					})
				},
				P = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(u.a)({
						...f(e),
						noun: "media",
						action: s.c.REJECT,
						actionInfo: {
							...d.actionInfo(e),
							reason: JSON.stringify(n.error)
						}
					})
				},
				T = (e, t) => {
					t.forEach(t => {
						const n = Object(a.f)(t.type);
						n && Object(u.a)({
							...f(e),
							action: s.c.DRAG,
							noun: n
						})
					})
				},
				N = (e, t, n) => {
					Object(u.a)({
						...f(e),
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				k = (e, t, n) => {
					Object(u.a)({
						...f(e),
						noun: n,
						action: Object(m.getToggleAction)(t),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				w = e => D("input", e),
				A = () => D("add"),
				L = () => D("remove"),
				D = (e, t) => n => ({
					...f(n),
					noun: e,
					postComposer: {
						inputType: t,
						type: b.imageOnly
					},
					action: s.c.CLICK
				}),
				R = e => {
					Object(u.a)({
						...f(e),
						noun: "hide_oc_description",
						action: s.c.CLICK
					})
				},
				B = (e, t) => {
					if (t) {
						const n = d.subredditById(e, t);
						if (n) return {
							subreddit: n
						};
						const s = d.profileById(e, t);
						if (s) return {
							profile: s
						}
					}
				},
				F = (e, t) => {
					const {
						draftId: n,
						destSubreddit: s
					} = t, r = Object(l.i)(e), a = Object(c.d)(e, {
						draftId: n
					}), o = {
						authorId: r ? r.id : void 0,
						createdTimestamp: a ? a.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case i.b.Link:
							o.type = p.DraftType.Link, o.urlLength = t.body.length;
							break;
						case i.b.Markdown:
							o.type = p.DraftType.Self, o.bodyTextLength = t.body.length;
							break;
						case i.b.RichText:
							o.type = p.DraftType.RichText, t.documentStats && (o.bodyTextLength = t.documentStats.textLength, o.numberRteImages = t.documentStats.rteImagesCount, o.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case i.b.Image:
							o.type = p.DraftType.Image;
							break;
						case i.b.Video:
							o.type = p.DraftType.Video
					}
					return {
						postDraft: o,
						...B(e, s.id)
					}
				},
				U = (e, t) => {
					const n = Object(l.i)(e),
						s = {
							authorId: n ? n.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case i.b.Link:
							s.type = p.DraftType.Link, s.urlLength = (t.body || "").length;
							break;
						case i.b.Markdown:
							s.type = p.DraftType.Self, s.bodyTextLength = (t.body || "").length;
							break;
						case i.b.RichText:
							s.type = p.DraftType.RichText
					}
					return {
						postDraft: s,
						...B(e, t.subredditId)
					}
				},
				M = (e, t) => {
					Object(u.a)({
						noun: "draft_load",
						...f(e),
						...F(e, t)
					})
				},
				H = (e, t) => {
					Object(u.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...f(e),
						...F(e, t)
					})
				},
				W = (e, t) => {
					Object(u.a)({
						noun: "draft_delete",
						...f(e),
						...U(e, t)
					})
				},
				G = e => {
					Object(u.a)({
						...f(e),
						noun: "social_connect_link",
						action: s.c.CLICK
					})
				},
				K = (e, t) => {
					Object(u.a)({
						...f(e),
						noun: "twitter_share_checkbox",
						action: Object(m.getToggleAction)(t)
					})
				},
				q = (e, t, n) => {
					Object(u.a)({
						...f(e),
						...F(e, t),
						noun: "draft_share",
						action: n ? s.c.ENABLE : s.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "G", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "C", (function() {
				return p
			})), n.d(t, "z", (function() {
				return b
			})), n.d(t, "D", (function() {
				return f
			})), n.d(t, "B", (function() {
				return h
			})), n.d(t, "A", (function() {
				return g
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "y", (function() {
				return I
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "F", (function() {
				return P
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "E", (function() {
				return R
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "h", (function() {
				return H
			}));
			var s, r = n("./src/reddit/constants/chat.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const i = (e, t) => {
					if (t) {
						const n = o.media(e, t.post.id),
							s = o.post(e, t.post.id),
							r = o.subreddit(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const s = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === a.a.LIVE ? n.type = "stream_live" : s === a.a.VOD ? n.type = "stream_vod" : s === a.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: s,
							media: n,
							subreddit: r
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const s = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || n.chatState === r.a.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: s === a.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: o ? r.a.None : r.a.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(n, e),
					actionInfo: o.actionInfo(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...e && {
						...i(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				f = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				g = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t)
				}),
				y = (e, t, n, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...i(r, t),
					actionInfo: o.actionInfo(r, {
						referralId: s
					})
				}),
				v = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t)
				}),
				_ = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				E = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				x = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				j = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...i(n, e)
				}),
				I = e => t => {
					const n = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, n)
					}
				},
				C = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(s, t, n),
					...i(s, t)
				}),
				S = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				P = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t),
					...i(t, e)
				}),
				T = e => e => {
					const t = i(e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(e),
						screen: o.screen(e),
						...t
					}
				},
				N = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				k = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: o.subreddit(t)
				}),
				w = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...i(n, e)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...i(n, e)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...i(n, e)
				}),
				D = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...i(n, e)
				}),
				F = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				U = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				M = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				}),
				H = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return j
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "r", (function() {
				return S
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "j", (function() {
				return L
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "n", (function() {
				return U
			})), n.d(t, "m", (function() {
				return M
			})), n.d(t, "t", (function() {
				return G
			})), n.d(t, "w", (function() {
				return K
			})), n.d(t, "e", (function() {
				return q
			})), n.d(t, "d", (function() {
				return Z
			})), n.d(t, "u", (function() {
				return Q
			})), n.d(t, "v", (function() {
				return z
			})), n.d(t, "h", (function() {
				return J
			}));
			var s = n("./node_modules/lodash/pick.js"),
				r = n.n(s),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makePostDraftPageKey/index.ts"),
				i = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				d = n("./src/reddit/helpers/routeKey/index.ts"),
				l = n("./src/reddit/helpers/trackers/postComposer.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/Comment/index.ts"),
				p = n("./src/reddit/models/Post/index.ts"),
				b = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				f = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/lib/makePostCreationPageKey/index.ts"),
				y = n("./src/lib/makeSearchKey/index.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = n("./src/reddit/helpers/trackers/searchResults.ts"),
				E = n("./src/reddit/selectors/postDraft.ts"),
				x = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/telemetry/index.ts");
			const j = (e, t, n, s, l, b) => {
					const {
						route: f
					} = e, {
						name: h
					} = f.meta;
					if (!h) return;
					const v = t.platform.currentPage;
					switch (h) {
						case a.Db.COMMENTS: {
							const {
								partialCommentId: r,
								partialPostId: a
							} = e.match.params, o = Object(p.r)(a), i = Object(d.a)(e, t, t.posts.models[o]);
							if (!i) return;
							const l = r && Object(m.f)(r),
								{
									sortToUse: u
								} = Object(c.a)(t, o),
								b = !0;
							Object(O.a)(N(i, o, l, n, s, u, b)(t));
							break
						}
						case a.Db.INDEX:
						case a.Db.LISTING:
						case a.Db.MULTIREDDIT:
						case a.Db.SUBREDDIT: {
							const r = Object(d.c)(e, t);
							if (!r.listingKey) return;
							const {
								params: o,
								queryParams: i
							} = e.match, {
								sort: c = (r.sort ? r.sort : a.P.HOT)
							} = o, l = i.t;
							Object(O.a)(I(r.listingKey, c, n, s, l)(t));
							break
						}
						case a.Db.TOPIC: {
							const r = Object(d.c)(e, t);
							if (!r.listingKey) return;
							const {
								params: o
							} = e.match, i = r.sort ? r.sort : a.Q, {
								sort: c = i
							} = o;
							Object(O.a)(I(r.listingKey, c, n, s)(t));
							break
						}
						case a.Db.PROFILE_OVERVIEW: {
							const r = Object(d.d)(e, t);
							if (!r) return;
							const {
								params: o,
								queryParams: i
							} = e.match, {
								sort: c = a.vb
							} = o, l = i.t;
							Object(O.a)(C(r, c, n, s, l)(t));
							break
						}
						case a.Db.PROFILE_POSTS: {
							const r = Object(d.d)(e, t);
							if (!r) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = a.vb,
								t: c = a.wb
							} = o;
							Object(O.a)(S(r, i, n, s, c)(t));
							break
						}
						case a.Db.PROFILE_COMMENTS: {
							const r = Object(d.d)(e, t);
							if (!r) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = a.vb,
								t: c = a.wb
							} = o;
							Object(O.a)(P(r, i, n, s, c)(t));
							break
						}
						case a.Db.PROFILE_PRIVATE: {
							const r = Object(d.d)(e, t);
							if (!r) return;
							Object(O.a)(T(r)(s, n)(t));
							break
						}
						case a.Db.PROFILE_MODERATION:
							b && w(t, !0);
							break;
						case a.Db.SETTINGS: {
							const r = e;
							Object(O.a)(W(n, s)(t)), r.match.params.page === a.Qb.Profile && Object(u.j)(t);
							break
						}
						case a.Db.POST_CREATION:
							if (b && l) {
								const e = Object(g.a)(l);
								Object(O.a)(k(e, n, s)(t))
							}
							break;
						case a.Db.POST_DRAFT: {
							const {
								draftId: r
							} = e.match.params, a = Object(o.a)(e.match.params);
							if (!a) return;
							R(t, a, r, n, s);
							break
						}
						case a.Db.SUBREDDIT_WIKI:
							Object(O.a)(V(n, s)(t));
							break;
						case a.Db.COINS:
							Object(O.a)(B(n, s)(t)), Object(O.a)(F()(t));
							break;
						case a.Db.PREMIUM:
							Object(O.a)(U(n, s)(t)), Object(O.a)(M()(t));
							break;
						case a.Db.APPEAL:
							Object(O.a)(H(n, s)(t));
							break;
						case a.Db.INBOX_PAGES:
							b && D(t);
							break;
						case a.Db.MODERATION_PAGES:
							b && A(t, !0, l ? l.subredditName : null, l ? l.profileName : null);
							break;
						case a.Db.COLLECTION_COMMENTS:
							b && z(t, !0);
							break;
						case a.Db.MODQUEUE_PAGES:
							b && L(t, l ? l.subredditName : null, l ? l.profileName : null);
							break;
						case a.Db.SUBREDDIT_LEADERBOARD:
							b && Object(O.a)(q()(t));
							break;
						case a.Db.SEARCH_RESULTS:
							if (b) {
								const a = Object(d.e)(e);
								if (!a) return;
								Object(O.a)(Q(a, Object(y.c)(r()(v && v.queryParams || {}, i.t)), n, s, v)(t))
							}
							break;
						case a.Db.PUBLIC_ACCESS_NETWORK:
							b && Object(O.a)(G()(t));
							break;
						case a.Db.GEOTAGGING:
							b && Object(O.a)(Z()(t));
							break;
						case a.Db.SUBREDDIT_CREATION:
							b && Object(O.a)(K()(t));
							break;
						case a.Db.MOD_LISTING:
							b && J(t, !0)
					}
				},
				I = (e, t, n, s, r, a) => o => {
					const {
						api: i
					} = o.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(o),
						actionInfo: x.actionInfo(o, {
							success: c
						}),
						customFeed: x.customFeed(o),
						listing: x.listing(o, e, {
							sort: t,
							sortTime: r
						}),
						subreddit: x.subreddit(o),
						timer: x.timer(n, s),
						userSubreddit: x.userSubreddit(o),
						adblock: x.adblock(o),
						postFlair: {
							title: a
						}
					}
				},
				C = (e, t, n, s, r) => a => {
					const o = x.listing(a, e);
					o && (o.sort = t, r && (o.sortTime = r));
					const {
						api: i
					} = a.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(a),
						actionInfo: x.actionInfo(a, {
							success: c
						}),
						profile: x.profile(a),
						snoovatar: x.snoovatar(a),
						subreddit: x.subreddit(a),
						timer: x.timer(n, s),
						userSubreddit: x.userSubreddit(a),
						adblock: x.adblock(a)
					}
				},
				S = (e, t, n, s, r) => a => {
					const o = x.listing(a, e);
					o && (o.sort = t, r && (o.sortTime = r));
					const {
						api: i
					} = a.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(a),
						actionInfo: x.actionInfo(a, {
							success: c
						}),
						profile: x.profile(a),
						subreddit: x.subreddit(a),
						timer: x.timer(n, s),
						userSubreddit: x.userSubreddit(a),
						adblock: x.adblock(a)
					}
				},
				P = (e, t, n, s, r) => a => {
					const o = x.profileComments(a, e);
					o && (o.sort = t, r && (o.sortTime = r));
					const {
						api: i
					} = a.profileCommentsPage, c = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(a),
						actionInfo: x.actionInfo(a, {
							success: c
						}),
						profile: x.profile(a),
						subreddit: x.subreddit(a),
						timer: x.timer(n, s),
						userSubreddit: x.userSubreddit(a),
						adblock: x.adblock(a)
					}
				},
				T = e => (t, n) => s => {
					const r = !s.profilePrivatePage.api.error[e] && !s.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(s),
						actionInfo: x.actionInfo(s, {
							success: r
						}),
						profile: x.profile(s),
						subreddit: x.subreddit(s),
						timer: x.timer(n, t),
						userSubreddit: x.userSubreddit(s),
						adblock: x.adblock(s)
					}
				},
				N = (e, t, n, s, r, a, o) => i => {
					const {
						api: c
					} = i.pages.comments, d = !c.error[e] && !c.pending[e], l = Object(b.c)(i, {
						postId: t,
						isForceSelected: o
					}), u = {
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(i),
						actionInfo: x.actionInfo(i, {
							success: d,
							reason: l || void 0
						}),
						post: x.post(i, t),
						profile: x.profile(i),
						subreddit: x.subreddit(i),
						timer: x.timer(s, r),
						userSubreddit: x.userSubreddit(i),
						adblock: x.adblock(i),
						postEvent: x.postEventI13nSelector(i, {
							postId: t
						}),
						postCollection: x.postCollectionI13nSelector(i, {
							postId: t
						}),
						listing: x.listing(i, void 0, {
							sort: a
						})
					};
					return n && (u.comment = x.comment(i, n)), u
				},
				k = (e, t, n) => s => {
					const r = s.creations.api.page.fetched[e],
						a = s.platform.currentPage ? s.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(s),
						actionInfo: x.actionInfo(s, {
							success: r
						}),
						post: a ? x.post(s, a) : void 0,
						subreddit: x.subreddit(s),
						timer: x.timer(t, n),
						userSubreddit: x.userSubreddit(s),
						adblock: x.adblock(s)
					}
				},
				w = (e, t) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: t
						})
					})
				},
				A = (e, t, n, s) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: t
						}),
						profile: x.profileById(e, Object(f.m)(e, s)),
						subreddit: x.subredditById(e, Object(h.F)(e, n)),
						userSubreddit: x.userSubreddit(e),
						adblock: x.adblock(e)
					})
				},
				L = (e, t, n) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						profile: x.profileById(e, Object(f.m)(e, n)),
						subreddit: x.subredditById(e, Object(h.F)(e, t)),
						userSubreddit: x.userSubreddit(e),
						adblock: x.adblock(e)
					})
				},
				D = e => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e)
					})
				},
				R = (e, t, n, s, r) => {
					const a = e.creations.api.page.pending[t],
						o = !e.creations.api.page.error[t] && !a && !!n,
						i = Object(E.h)(e, n);
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: o
						}),
						subreddit: x.subreddit(e),
						timer: x.timer(s, r),
						userSubreddit: x.userSubreddit(e),
						adblock: x.adblock(e),
						...i ? Object(l.m)(e, i) : {}
					})
				},
				B = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					...x.defaults(n),
					timer: x.timer(e, t),
					adblock: x.adblock(n)
				}),
				F = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(e)
				}),
				U = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					...x.defaults(n),
					timer: x.timer(e, t),
					adblock: x.adblock(n)
				}),
				M = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(e)
				}),
				H = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...x.defaults(n),
					timer: x.timer(e, t)
				}),
				W = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(n),
					timer: x.timer(e, t)
				}),
				G = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: x.subreddit(e),
					...x.defaults(e)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(e)
				}),
				q = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...x.defaults(e)
				}),
				V = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(n),
					customFeed: x.customFeed(n),
					subreddit: x.subreddit(n),
					timer: x.timer(e, t),
					userSubreddit: x.userSubreddit(n),
					adblock: x.adblock(n)
				}),
				Z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(e)
				}),
				Q = (e, t, n, s, r, o) => i => {
					let c = !0;
					if (t.type.indexOf(a.Pb.Posts) > -1) {
						const {
							api: t
						} = i.listings.listingOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(a.Pb.Subreddits) > -1 || t.type.indexOf(a.Pb.Users) > -1) {
						const {
							api: t
						} = i.listings.postOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					const d = x.paneName(i, r),
						l = x.structureType(i, r),
						u = i.platform.currentPage && i.platform.currentPage.urlParams && i.platform.currentPage.urlParams.subredditName ? x.subredditByName(i, i.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						..._.c(i, t),
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(i),
						actionInfo: x.actionInfo(i, {
							success: c,
							paneName: d
						}),
						timer: x.timer(n, s),
						search: {
							...x.search(i, t, !0, r || void 0),
							...!!o && {
								originElement: o
							},
							queryId: Object(v.c)(v.a.SearchResults),
							structureType: l,
							subredditId: t.restrict_sr && u && u.id ? u.id : void 0,
							subredditName: t.restrict_sr && u && u.name ? u.name : void 0
						},
						...!!o && {
							correlationId: Object(v.c)(v.a.SearchResults)
						},
						userPreferences: {
							hideNsfw: !i.user.prefs.over18
						}
					}
				},
				z = (e, t) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: t
						})
					})
				},
				J = (e, t) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "m", (function() {
				return L
			})), n.d(t, "b", (function() {
				return D
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/posts.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				l = "search_results_best",
				u = (e, t) => {
					const n = c.subreddit(e);
					return {
						screen: c.screen(e),
						subreddit: n && t && t.restrict_sr ? n : null
					}
				},
				m = (e, t) => n => {
					const s = t;
					return s.structureType = "related", {
						action: e,
						correlationId: Object(o.c)(o.a.SearchResults),
						noun: "related_search",
						source: d,
						search: c.search(n, s),
						...u(n)
					}
				},
				p = (e, t, n, s) => r => ({
					...u(r, n),
					source: d,
					action: "click",
					noun: t,
					actionInfo: c.actionInfo(r, s ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: s ? c.discoveryUnit(s) : null,
					search: c.search(r, n),
					post: c.post(r, e),
					media: c.media(r, e)
				}),
				b = (e, t, n, s, r) => a => ({
					...P(a, e, t, r, s, n),
					noun: "ad"
				}),
				f = (e, t, n) => r => {
					let a = !0;
					if (t.type.indexOf(s.Pb.Posts) > -1) {
						const {
							api: t
						} = r.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Pb.Subreddits) > -1 || t.type.indexOf(s.Pb.Users) > -1) {
						const {
							api: t
						} = r.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					return {
						...u(r, t),
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: c.actionInfo(r, {
							success: a,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: c.discoveryUnit(n),
						search: c.search(r, t)
					}
				},
				h = (e, t) => n => ({
					action: "view",
					actionInfo: c.actionInfo(n),
					metaSearch: c.metaSearch(t),
					noun: e,
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				g = (e, t) => n => ({
					action: "click",
					actionInfo: c.actionInfo(n),
					noun: e,
					metaSearch: c.metaSearch(t),
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				y = (e, t, n) => s => ({
					source: d,
					action: "click",
					noun: c.SearchDropdownNouns.Recent,
					actionInfo: c.actionInfo(s, {
						paneName: "subreddit_dropdown",
						position: n + 1
					}),
					search: {
						query: e,
						originPageType: s.platform.currentPage ? c.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
						queryId: Object(o.c)(o.a.SearchResults)
					},
					..._(s, t)
				}),
				v = (e, t, n, s) => r => {
					const a = s.filter(e => e.id);
					return {
						source: d,
						action: "click",
						noun: c.SearchDropdownNouns.Typeahead,
						actionInfo: c.actionInfo(r, {
							position: n + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: r.platform.currentPage ? c.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0,
							queryId: Object(o.c)(o.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: a.map(e => e.id),
							numberSubreddits: a.length
						},
						..._(r, t)
					}
				},
				_ = (e, t) => {
					const n = t.isSubreddit && t.id ? c.subredditForSearch(e, t.id) : void 0,
						s = t.isProfile && t.id ? c.profileForSearch(e, t.id) : void 0,
						r = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? n || r : void 0,
						profile: t.isProfile ? s || r : void 0
					}
				},
				E = (e, t, n) => s => ({
					action: t,
					actionInfo: c.actionInfo(s),
					noun: e,
					screen: c.screen(s),
					search: c.search(s, n),
					source: l
				});
			var x;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(x || (x = {}));
			const O = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				j = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				I = (e, t) => n => ({
					action: "click",
					correlationId: Object(o.c)(o.a.SearchResults),
					noun: e ? s.Ob.ToSubreddit : s.Ob.ToGlobal,
					search: c.search(n, t),
					source: d
				}),
				C = (e, t, n, s) => r => ({
					...u(r, n),
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(r, {
						relativePosition: c.getRelativePostOrder(r, t, e)
					}),
					search: {
						...c.search(r, n),
						...!!s && {
							originElement: s
						}
					},
					post: c.post(r, t)
				}),
				S = (e, t, n, s, r) => a => P(a, e, t, n, s, r),
				P = (e, t, n, s, r, i) => {
					const l = c.paneName(e, s),
						u = c.postRelativePosition(e, t, r, i),
						m = c.amountOfElementsBeforePost(e, n, r, i, l),
						p = null !== u ? m + u : null,
						b = c.structureType(e, s),
						f = {
							...c.search(e, n, !0, s || void 0),
							structureType: b,
							queryId: Object(o.c)(o.a.SearchResults)
						};
					return {
						source: d,
						action: a.c.CLICK,
						noun: "post",
						actionInfo: s ? {
							pageType: c.getPageTypeFromCurrentPage(s),
							paneName: l,
							position: p,
							relativePosition: u
						} : c.actionInfo(e, {
							paneName: l,
							position: p,
							relativePosition: u
						}),
						search: f,
						post: c.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: i ? c.discoveryUnit(i) : null
					}
				},
				T = (e, t, n, s, r, a) => o => N(o, e, t, n, s, r, a),
				N = (e, t, n, s, l, u, m) => {
					if (!s) {
						s = Object(i.I)(e, {
							postId: u
						}).belongsTo
					}
					const p = c.paneName(e, n);
					let b, f;
					if (u) {
						b = c.postRelativePosition(e, u, l, m);
						const n = c.amountOfElementsBeforePost(e, t, l, m, p);
						f = null !== b ? n + b : null
					} else {
						b = c.communityRelativePosition(e, s.id, l, m);
						const t = c.amountOfElementsBeforeCommunity(e, l, m);
						f = null !== b ? t + b : null
					}
					const h = c.structureType(e, n),
						g = {
							...c.search(e, t, !0, n || void 0),
							structureType: h,
							queryId: Object(o.c)(o.a.SearchResults)
						};
					return {
						source: d,
						action: a.c.CLICK,
						noun: s.type,
						search: g,
						subreddit: s.type === r.a.SUBREDDIT ? c.subredditForSearch(e, s.id) : void 0,
						profile: s.type === r.a.PROFILE ? c.profileForSearch(e, s.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: m ? c.discoveryUnit(m) : null,
						actionInfo: n ? {
							pageType: c.getPageTypeFromCurrentPage(n),
							paneName: p,
							position: f,
							relativePosition: b
						} : c.actionInfo(e, {
							paneName: p,
							position: f,
							relativePosition: b
						}),
						post: u ? c.post(e, u) : void 0
					}
				},
				k = (e, t) => n => ({
					...u(n, e),
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: {
						...c.search(n, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: c.subreddit(n)
				}),
				w = (e, t, n, s, r) => o => ({
					...P(o, t, n, s, e, r),
					action: a.c.VIEW
				}),
				A = (e, t, n, s) => r => ({
					...u(r, n),
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(r, {
						relativePosition: c.getRelativePostOrder(r, t, e),
						position: c.getAbsoluteOrder(r, t, e)
					}),
					search: {
						...c.search(r, n),
						...!!s && {
							originElement: s
						}
					},
					post: c.post(r, t)
				}),
				L = (e, t, n) => s => ({
					...u(s),
					source: d,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(s),
					search: {
						...c.search(s, t),
						...!!n && {
							originElement: n
						}
					},
					[e]: c[e](s)
				}),
				D = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...r.defaults(t),
					actionInfo: r.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...r.defaults(a),
					actionInfo: r.actionInfo(a, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...r.defaults(e),
					actionInfo: r.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				c = e => t => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...r.defaults(t),
					actionInfo: r.actionInfo(t, {
						reason: e
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				})
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, r.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, r.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), r.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), r.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				cls1: "_27ZvSsL0zi1nAja8nD5wM8",
				cls3: "qXtY7I_GoiY3yZuQSiIxk",
				cls4: "_2CRPf4Bo0p7KCRDFYv6WzO",
				cls5: "_2dYeHLcTCSuVCgU8GN_pWV",
				cls7: "_3vSXIQsi-G_3bo41eaYRjh",
				cls6: "_1mQOm7u0X9LlZoCnM5HHkJ",
				cls8: "_3fxIhlHWNlaXwlNMXtCZ-x",
				cls9: "_1L0T9MQ7u60GxCoL3DFJ4Z",
				cls10: "_1xlX8IJ47jyoodC4L9co14"
			}
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/svgs/DownToChatAvatar/index.m.less"),
				o = n.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 60 60"
			}, e), r.a.createElement("g", null, r.a.createElement("g", {
				className: o.a.cls2
			}, r.a.createElement("path", {
				className: o.a.cls3,
				d: "M54.44-5.35A67.31,67.31,0,0,0,4,.77C-.47,3.27-4.7,6.36-7.69,10.5a20.47,20.47,0,0,0-3.52,7.88c-.5,2.47.23,5.13-.42,7.5-1.35,4.89-4.93,7.56-2.79,13.24,1.48,3.91,4.7,6.91,8.14,9.3,8.24,5.74,16.53,2.11,25.37-.67,2.62-.83,5.23-1.64,7.79-2.6C29.14,44.3,31,42.79,33.27,42a62.83,62.83,0,0,0,8.3-3.39c2.54-1.31,5-2.73,7.69-3.79,2.38-1,5.11-1.82,6.28-4.1a7.74,7.74,0,0,0,.55-4.13c-.39-4.63-2.17-9-4-13.32a40.17,40.17,0,0,0-2-4.36c-.7-1.23-1.82-2.26-2.42-3.52-1.1-2.3-1.37-5.4-2-7.87"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M48.81.61C39.94,7.54,37.18,9.26,25.05,16.13,29.21,19,45.38,26.28,53.92,29.28,42.46,33.81,12.15,41-1.85,44.74c3,1.76,8.22,7.79,10.8,10.14,4,3.65,8.39,9.47,14.32,9.42a60.26,60.26,0,0,0,18-2.54c8.83-2.84,17.6-7.09,23.31-14.39a29.94,29.94,0,0,0,1.2-35.32C64.61,10.32,63,7.79,61.09,6.94,59,6,55.46,6.22,53.16,6.16"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M20,30.71A9.26,9.26,0,0,0,24.77,36a4,4,0,0,1,1.48.85,2,2,0,0,1-.12,2.48,3.39,3.39,0,0,1-2.4,1.05C20.55,40.62,18,37.7,17,35"
			}), r.a.createElement("path", {
				d: "M17,35c.11.06.44.91,1,1.78A8.17,8.17,0,0,0,20,38.84a5.9,5.9,0,0,0,3.24,1.21A3,3,0,0,0,26,38.73a1.63,1.63,0,0,0,.09-1.2,1.46,1.46,0,0,0-.87-.79,12.78,12.78,0,0,1-1.4-.68,7.84,7.84,0,0,1-1.26-.92,9.52,9.52,0,0,1-2.69-4.38c.4.52.94,1.26,1.49,1.9s1.1,1.18,1.37,1.48a6.64,6.64,0,0,0,1.86,1.5c.64.37,1.57.59,2,1.41a2.25,2.25,0,0,1-.23,2.3,3.27,3.27,0,0,1-1.83,1.14,5.52,5.52,0,0,1-2,.08A6.16,6.16,0,0,1,20.74,40a7.49,7.49,0,0,1-2.5-2.24A8.31,8.31,0,0,1,17,35Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M5.87,46.65c3.07,2.59,7.08,2.88,9,.65s.91-6.13-2.16-8.72-7.08-2.88-9-.65"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M5.41,46.45a3.56,3.56,0,0,1-2-2.69,10.5,10.5,0,0,1,.08-3.49A49.24,49.24,0,0,1,4.83,34,17.67,17.67,0,0,1,7.46,28.7a7.51,7.51,0,0,1,1.11-1.4c2.33-2.22,6.24-2.2,9.1-1.16,1.81.66,1.81,2.12,1.85,4a22.8,22.8,0,0,1-3.69,13.5"
			}), r.a.createElement("path", {
				d: "M15.82,43.62c0-.23,1.08-1.83,1.86-3.9a21.21,21.21,0,0,0,1.37-5.9,31.42,31.42,0,0,0,.05-3.77C19,28.76,19,27.39,18,26.87a6.76,6.76,0,0,0-1.73-.59A11.13,11.13,0,0,0,14.41,26a8.46,8.46,0,0,0-3.61.55,5.48,5.48,0,0,0-2.38,1.8,30.74,30.74,0,0,0-1.72,2.7,13.79,13.79,0,0,0-1.23,2.83c-.29,1-.57,2-.82,3a34.3,34.3,0,0,0-1,5.53A5,5,0,0,0,4,44.75a3,3,0,0,0,1.44,1.54A2.91,2.91,0,0,1,3.61,45a5.42,5.42,0,0,1-.78-2.73,17.89,17.89,0,0,1,.47-4.49c.23-.89.48-1.75.74-2.6a25.31,25.31,0,0,1,.84-2.5A23.26,23.26,0,0,1,7.4,28.29a6.69,6.69,0,0,1,3.86-2.73,10.58,10.58,0,0,1,4.43-.19,12.31,12.31,0,0,1,2,.52,2.7,2.7,0,0,1,1.66,1.39,5.41,5.41,0,0,1,.4,2c0,.64,0,1.27,0,1.89a22.8,22.8,0,0,1-1,6.9,17.41,17.41,0,0,1-1.51,3.35A20.12,20.12,0,0,1,15.82,43.62Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M10.91,28.22a24.4,24.4,0,0,1,.94,2.63l-.25,0,0-3.11.35,0a10.52,10.52,0,0,0,1.83,4.62l-.44.21-.06-.16a15.52,15.52,0,0,1-.74-4.24l.7-.07A12.81,12.81,0,0,0,15.88,33l-.75.44a14,14,0,0,1-1.36-4.9l.89-.28.94,1.55,1.61,2.67L16.3,33a36.05,36.05,0,0,1-1.14-4.52l1-.28a21,21,0,0,0,2,4l-.82.42a18.77,18.77,0,0,1-.9-3.54l.77-.26a10.37,10.37,0,0,0,2,2.81l-.5.4a11.41,11.41,0,0,1-1.05-2.72L18,29a21,21,0,0,0,1.7,2.24,13.32,13.32,0,0,1-2-1.95l.29-.17a13.85,13.85,0,0,0,1.26,2.49l-.59.46a9.8,9.8,0,0,1-2.29-2.9l1-.32.14.81a16.84,16.84,0,0,0,.66,2.59l-.71.36a22.75,22.75,0,0,1-2-4.15l.53-.16A35.93,35.93,0,0,0,17,32.74l-.38.18-2.54-4.28.37-.12a13.27,13.27,0,0,0,1.27,4.68l-.36.22a13,13,0,0,1-2.67-5.2l.52,0a15.76,15.76,0,0,0,.69,4.26l-.51.24a10.5,10.5,0,0,1-1.68-4.08c0-.25-.1-.53-.13-.78l.49,0c-.06,1.18-.15,2.57-.23,3.11l-.21,0C11.18,29.33,11,28.52,10.91,28.22Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M3.23,34.05a4.89,4.89,0,0,1-.36-3.11,3.82,3.82,0,0,1,1.51-2.23A9.28,9.28,0,0,1,7,27.61c1.08-.33,4.74.59,5.06,1.91"
			}), r.a.createElement("path", {
				d: "M12,29.52a2.66,2.66,0,0,0-.88-.81,5.79,5.79,0,0,0-1.62-.61,8.19,8.19,0,0,0-2.14-.18,7.18,7.18,0,0,0-1,.31c-.35.13-.69.27-1,.42a3.82,3.82,0,0,0-2.12,2.47A5.56,5.56,0,0,0,3.33,34a2.38,2.38,0,0,1-.84-1.29,2.92,2.92,0,0,1-.13-1.37,4.44,4.44,0,0,1,1.71-2.64,8.54,8.54,0,0,1,2.44-1.12,2.85,2.85,0,0,1,1.22-.23,6.87,6.87,0,0,1,1.14.12,6.47,6.47,0,0,1,2,.66,3,3,0,0,1,.86.68A1.2,1.2,0,0,1,12,29.52Z"
			}), r.a.createElement("path", {
				d: "M33.11,8.69a1.12,1.12,0,0,1-.62.29,2.35,2.35,0,0,1-1.41-.18,10.13,10.13,0,0,1-2.31-1.75,15.24,15.24,0,0,0-1.32-1,3,3,0,0,0-.67-.33A3.76,3.76,0,0,0,26,5.53a2.73,2.73,0,0,0-2.45,1.25,7.65,7.65,0,0,0-1.28,5A4.77,4.77,0,0,0,23,14a3.39,3.39,0,0,0,1.54,1.23,2.65,2.65,0,0,1-2.41-.6,3.4,3.4,0,0,1-1.18-2,9.6,9.6,0,0,1,.81-4.89,5.25,5.25,0,0,1,3-3,3.88,3.88,0,0,1,3.69.94c.88.78,1.53,1.6,2.22,2.19A4,4,0,0,0,32,8.6,2.65,2.65,0,0,0,33.11,8.69Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M31,23.45c2.42-1.82,3.32-5.73,1.55-8.22-1.05-1.42-2.65-3-4.56-1.87"
			}), r.a.createElement("path", {
				d: "M28,13.36a1.62,1.62,0,0,1,1.2-.55,3.21,3.21,0,0,1,1.86.48,6.08,6.08,0,0,1,1.83,1.57,5.44,5.44,0,0,1,1.07,2.33,6.28,6.28,0,0,1-.59,4,5.42,5.42,0,0,1-2.26,2.37c.38-.87.87-2.13,1.13-2.53a5.16,5.16,0,0,0,1-2.64,4.64,4.64,0,0,0-.5-2.46,6.89,6.89,0,0,0-1.42-1.71,4.24,4.24,0,0,0-1.59-.93,3.43,3.43,0,0,0-1-.11A4.12,4.12,0,0,0,28,13.36Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M10.38,7.68c7.31-2.53,18.18,1.32,20.67,9,1.08,4.27.9,10.19-2.53,12.84C19.77,36.32-1.84,26.59,5,13.93"
			}), r.a.createElement("path", {
				d: "M5,13.94a4.44,4.44,0,0,1-.23.64l-.25.58-.24.77A9.27,9.27,0,0,0,4,20.23a9.85,9.85,0,0,0,2.09,4.48,15.11,15.11,0,0,0,3,2.79,21.66,21.66,0,0,0,10.81,3.74,14.5,14.5,0,0,0,5.76-.73,10.08,10.08,0,0,0,2.48-1.35,6.26,6.26,0,0,0,1.7-2.06A11.24,11.24,0,0,0,31,22.48a19.33,19.33,0,0,0-.34-4.81,9.91,9.91,0,0,0-2-4.11,13.61,13.61,0,0,0-3.28-3.06,16.91,16.91,0,0,0-3.84-2,19.08,19.08,0,0,0-4-1.06,16.86,16.86,0,0,0-7.2.39A14.78,14.78,0,0,1,18,6.69a17.43,17.43,0,0,1,6.54,2,15.24,15.24,0,0,1,5.83,5.65l.47.87.36.93a4.33,4.33,0,0,1,.28.93c.08.32.13.63.18.95a20.43,20.43,0,0,1,.26,3.72,11.81,11.81,0,0,1-2,6.79,7.54,7.54,0,0,1-2.67,2.14,11.17,11.17,0,0,1-3.11,1.08,19.94,19.94,0,0,1-11.83-1.65,15.78,15.78,0,0,1-7.82-6.94,9.27,9.27,0,0,1-.85-2.56,8.88,8.88,0,0,1,0-2.91A10.92,10.92,0,0,1,5,13.94Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M5.47,18.27a2.52,2.52,0,0,1-.57.46v-.18a2.68,2.68,0,0,1,.69.6l.09.11s-.07.07-.11.11l-.21.2-.22.2c-.09.09,0,.2.11.22l.28.11.7.27.79.31-.84.14a.69.69,0,0,0-.18,0,.72.72,0,0,0-.25.17l-.07.09.17,0,.13,0h.07l.09,0,.77.26,1,.33-1,.44c-.33.14-.27.19-.31.21l.06,0h0l.11,0,.93.36.86.33-.8.51-.14.09s0,0,0,0l1.19.35.71.2L9.15,25c-.1.15-.06.1-.08.11l0,0s0,0,0,0h0l.24.06c.35.08.68.14,1,.19l.52.08-.19.45c0,.07-.1.19-.12.21a.07.07,0,0,1,0,0l-.09.08a.43.43,0,0,0-.09.1l0,.06h.63a6,6,0,0,1,1,.08c-.31.07-.62.19-1,.3a15.8,15.8,0,0,1-1.72.39c0-.06,0-.07,0-.16l0-.22a2.22,2.22,0,0,1,.1-.41,2.38,2.38,0,0,1,.34-.51,1.42,1.42,0,0,0,.14-.22l0-.08.41.67a2.73,2.73,0,0,1-.49-.07l-1-.25L8,25.79c-.22-.05-.51-.08-.56-.15.24-.2.53-.46.73-.66a4,4,0,0,1,.32-.46l.18.45-.89-.29-1.06-.33-.51-.19c-.08,0,0,0,0-.08L6.38,24l.2-.19a5.93,5.93,0,0,1,.87-.62l0,.34-1-.38a10,10,0,0,1-1.17-.5c.59-.35.94-.87,1.36-1v.42l-.86-.3a6.78,6.78,0,0,1-1.11-.46l-.22-.12c0-.06.12-.13.17-.19a3.19,3.19,0,0,1,.4-.33,2.44,2.44,0,0,1,.51-.26,2.16,2.16,0,0,1,.53-.12l-.06.54-.72-.32c-.11-.06-.33-.14-.47-.23A.6.6,0,0,1,4.59,20c-.13-.38.79-.81.61-.78A1.28,1.28,0,0,0,5,18.94l-.22-.25-.06-.07.06,0A6.68,6.68,0,0,1,5.47,18.27Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M14.41,9.83C15,6.68,10.85,5.27,7.89,6.28c-4.72,1.16-5.22,10.26.6,9.54"
			}), r.a.createElement("path", {
				d: "M8.49,15.83a3.38,3.38,0,0,1-2,0,7.27,7.27,0,0,1-.75-.35c-.21-.17-.43-.34-.63-.52l-.46-.58c-.12-.19-.2-.38-.29-.53A6.29,6.29,0,0,1,5.87,6.7a4.64,4.64,0,0,1,1.49-.86,6.7,6.7,0,0,1,1.57-.4A6.78,6.78,0,0,1,12,5.76,4.29,4.29,0,0,1,14.3,7.48a2.85,2.85,0,0,1,.27,2.38,3.2,3.2,0,0,0-1-2A6.68,6.68,0,0,0,12.12,7a5.48,5.48,0,0,0-4.26-.4A4.32,4.32,0,0,0,5.06,9.1c-1,2.27-.52,4.79.89,5.88a4.64,4.64,0,0,0,.61.38,4.6,4.6,0,0,0,.76.29C7.84,15.78,8.33,15.79,8.49,15.83Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M33.24,5.42c-4-.29-4.62,6.08-.28,6.25C36.81,11.83,37,5.5,33.24,5.42Z"
			}), r.a.createElement("path", {
				d: "M33.24,5.42a2.17,2.17,0,0,1,1.67.41A3.4,3.4,0,0,1,36.18,8a3.79,3.79,0,0,1-.79,3.15,3,3,0,0,1-1.55.91,4.4,4.4,0,0,1-.88.1L32.11,12a3.24,3.24,0,0,1-2.3-1.81,3.81,3.81,0,0,1-.12-2.75,3.34,3.34,0,0,1,1.55-1.9,3.21,3.21,0,0,1,2-.3,4.63,4.63,0,0,0-1.7.89,5.56,5.56,0,0,0-.85,1.21,2.77,2.77,0,0,0,.35,3.33,2.51,2.51,0,0,0,1.5.71l.42.06.4,0a2.65,2.65,0,0,0,.75-.17A2.79,2.79,0,0,0,35.65,9a3.62,3.62,0,0,0-.5-2.38,2.81,2.81,0,0,0-1-.87l-.3-.16-.28-.08Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M16.13,19.35A2.7,2.7,0,0,1,14,16a3.25,3.25,0,0,1,3.21-2.54C21.33,13.66,19.73,20.06,16.13,19.35Z"
			}), r.a.createElement("path", {
				d: "M16.13,19.34a4.16,4.16,0,0,0,1.53-.27,3,3,0,0,0,1.43-1.56,3.28,3.28,0,0,0,0-2.59A2.19,2.19,0,0,0,17,13.76a3.09,3.09,0,0,0-2.77,2.78,2.49,2.49,0,0,0,.51,1.78,2.73,2.73,0,0,0,1.39.92,2.28,2.28,0,0,1-1.8-.64A2.35,2.35,0,0,1,13.57,17a3.82,3.82,0,0,1,2-3.33,3.11,3.11,0,0,1,3.32.23,2.45,2.45,0,0,1,.56.6,3.55,3.55,0,0,1,.29.74,3.37,3.37,0,0,1,0,1.48A3.57,3.57,0,0,1,18.43,19a2.37,2.37,0,0,1-1.31.49l-.34,0-.29,0Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M27,21.4c-.36-1,.07-4.84,2-3.82,1.28.7.19,4-.82,4.55C27.59,22.45,27.22,22,27,21.4Z"
			}), r.a.createElement("path", {
				d: "M27,21.4c.08,0,.22.54.64.7s.83-.5,1-.76a6.26,6.26,0,0,0,.54-1.7A2.21,2.21,0,0,0,29,18.07c0-.08-.13-.11-.19-.16l-.28-.11a.59.59,0,0,0-.45.09A2.21,2.21,0,0,0,27.41,19a6.12,6.12,0,0,0-.31,2.4,2.86,2.86,0,0,1-.43-2.3,4.87,4.87,0,0,1,.61-1.23,1.28,1.28,0,0,1,1.2-.58,1.31,1.31,0,0,1,1,.69,2.24,2.24,0,0,1,.2,1.09A5.3,5.3,0,0,1,29.25,21a2.62,2.62,0,0,1-1.1,1.37.72.72,0,0,1-.53,0,.7.7,0,0,1-.4-.35A1.49,1.49,0,0,1,27,21.4Z"
			}), r.a.createElement("path", {
				d: "M26.34,24.19a12.22,12.22,0,0,1-5.91-.48,7.19,7.19,0,0,1-2.56-1.88s-.17,2-.17,2.13c0,2.74,2.73,4.42,5,2.55.55-.46,1.67-1.5,2.19-2"
			}), r.a.createElement("path", {
				d: "M24.85,24.51a9,9,0,0,1-1.28,1.37,13.06,13.06,0,0,1-1.09,1,3.48,3.48,0,0,1-1.12.57A3,3,0,0,1,18,26.31a4,4,0,0,1-.74-1.77l0-.48c0-.17,0-.33,0-.47l.06-.91a5.79,5.79,0,0,1,.07-.76l.05-.15c0-.05.06,0,.09-.05l.16,0,.07,0h0l-.09-.25h0c0-.06,0-.17.07-.18a.44.44,0,0,1,.2.07l.26.25a7,7,0,0,0,2.2,1.69,8.15,8.15,0,0,0,2.08.62,21.63,21.63,0,0,0,3.79.22,7.62,7.62,0,0,1-2.15.62,5.55,5.55,0,0,1-2,0,8.76,8.76,0,0,1-2.31-.87,9.56,9.56,0,0,1-1-.66l-.43-.36c-.14-.13-.15-.16-.24-.25l-.16-.17a.27.27,0,0,0-.07-.08s0,.06,0,.1l0,.43a8.66,8.66,0,0,0-.07,1.35,3.18,3.18,0,0,0,1,2.21,2.58,2.58,0,0,0,2,.65,3.46,3.46,0,0,0,1.77-.88C23.35,25.56,24.6,24.68,24.85,24.51Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M19,39.36C12.27,41.12,3.41,42.68-3.4,44.22a48.19,48.19,0,0,0,10.83,9,5.38,5.38,0,0,0,1.68.65,5.09,5.09,0,0,0,3.5-1.07A27.16,27.16,0,0,0,18,47.76Q20.38,45,22.6,42.1"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M26.84,53.17a5.89,5.89,0,0,1-1.51-.63A2.4,2.4,0,0,1,24,50.1a2.1,2.1,0,0,1,1.21-1.28,6.69,6.69,0,0,1,1.77-.4,42.66,42.66,0,0,0,6.51-1.5c1-.3,1.48.1,1.87,1.06a3,3,0,0,1-.08,2.38c-1,2.21-3.9,2.87-6.12,3A7.19,7.19,0,0,1,26.84,53.17Z"
			}), r.a.createElement("path", {
				d: "M26.85,53.16a12.24,12.24,0,0,0,2.52.05,9.91,9.91,0,0,0,3.42-.88A5.13,5.13,0,0,0,34.45,51a3,3,0,0,0,.71-1.92,2.41,2.41,0,0,0-.21-1,1.67,1.67,0,0,0-.52-.76.92.92,0,0,0-.76,0l-1.09.34a37.62,37.62,0,0,1-3.84.93c-.63.12-1.27.21-1.89.29a5.35,5.35,0,0,0-1.62.39,1.39,1.39,0,0,0-.57,2.26A4.51,4.51,0,0,0,26.88,53a3.79,3.79,0,0,1-2.79-1.19,2.13,2.13,0,0,1-.58-1.68A1.88,1.88,0,0,1,24.16,49a3.44,3.44,0,0,1,1.63-.72c.55-.1,1.05-.12,1.55-.18,1-.12,1.94-.28,2.86-.47s1.8-.42,2.64-.67a4,4,0,0,1,1.34-.27,1.42,1.42,0,0,1,1.13.8,3.33,3.33,0,0,1,.36,2.48,4.14,4.14,0,0,1-1.28,2,7.48,7.48,0,0,1-3.85,1.55,9.11,9.11,0,0,1-2.17,0A5.72,5.72,0,0,1,26.85,53.16Z"
			}), r.a.createElement("path", {
				className: o.a.cls7,
				d: "M29.83,58c-.66,2.08.89,5,5.59,6.51,4.37,1.41,7.12-1.27,7.78-3.36s-1.64-3-5.4-4.18S30.48,55.9,29.83,58Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M42.73,62.91c.38-.17.38-.7.35-1.12-.16-2.17.54-4.3,1.05-6.42a35.6,35.6,0,0,0,.75-4.1A5.9,5.9,0,0,0,38,44.81a8.09,8.09,0,0,0-4.88,2.93A13.74,13.74,0,0,0,30.56,53c-.5,1.84-1.62,6-1,8"
			}), r.a.createElement("path", {
				d: "M29.56,61a2.86,2.86,0,0,1-.29-1.19,12.94,12.94,0,0,1,.13-2.54,51.74,51.74,0,0,1,1.12-5.18A11.88,11.88,0,0,1,34,46.19a8.46,8.46,0,0,1,3.19-1.76,6.94,6.94,0,0,1,3.62,0,6.25,6.25,0,0,1,4.62,7.1l-.52,2.65c-.29,1.74-.9,3.29-1.22,4.76a13.73,13.73,0,0,0-.33,2.11c0,.35,0,.66,0,1a1.78,1.78,0,0,1-.1.55.74.74,0,0,1-.41.44.91.91,0,0,0,.27-1c-.06-.33-.15-.69-.19-1.07a11.15,11.15,0,0,1,0-2.38,32.73,32.73,0,0,1,.72-3.75l.52-2.2a13.22,13.22,0,0,0,.4-2.13,5.22,5.22,0,0,0-1.31-3.69A5.58,5.58,0,0,0,40,45.07a6.12,6.12,0,0,0-3.53.45,9.37,9.37,0,0,0-4.48,4.66,30.36,30.36,0,0,0-1.75,5.56c-.2.85-.48,2-.62,3A6.91,6.91,0,0,0,29.56,61Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M37.27,49a1.25,1.25,0,0,1-.07.34l-.06-.06.64-.33.49-.25.07,0s0,0,0,.06l0,.15.07.31.07.4s0,.12,0,.13l.12-.1a.94.94,0,0,0,.25-.3,5.09,5.09,0,0,0,.29-.7s.09.15.14.25l.5,1.35-.34-.05.1-.18,0-.09a1.54,1.54,0,0,0,.08-.19A9.75,9.75,0,0,0,40,48.48c.14.26.34.85.54,1.21l.08.15,0,.08.1.15.21.29-.45.11,0-.17,0-.26a6.58,6.58,0,0,0,0-.78,1.2,1.2,0,0,0,.25-.14l.28,0,.61,1.1.28.51-.55.11a3.38,3.38,0,0,0-.32-1.7l.53-.28a12.64,12.64,0,0,0,1.25,1.89l-.46.25a8.24,8.24,0,0,0-.31-.92c0-.09-.15-.39-.26-.62l-.33-.66,1.31.51.66.28-.18.2a1.76,1.76,0,0,0-.69-.75,1.58,1.58,0,0,1,.91.63l.16.23-.29-.07-.79-.19c-.13,0-.12,0-.12,0l.06.05s0,.08.07.15l.07.2a7.91,7.91,0,0,1,.22.78l-.42.23a13.67,13.67,0,0,1-1.26-2l.28-.14a3.85,3.85,0,0,1,.32,1.94l0,.39-.18-.34-.53-1c-.06-.09-.12-.22-.16-.28V50a3.51,3.51,0,0,1-.05.55l0,.29-.18-.23c-.15-.19-.32-.46-.41-.6l-.09-.17,0-.09,0,0v0a1.3,1.3,0,0,1-.29.63l-.18.25-.1-.3-.23-.68-.06-.15s0-.16,0-.06l-.07.14-.06.07a1.35,1.35,0,0,1-.17.17,2.07,2.07,0,0,1-.4.28l-.1.06,0-.11,0-.22c0-.28-.09-.56-.1-.67a1.38,1.38,0,0,0,0-.2L38,49c-.35.13-.72.27-.86.31h0v0Z"
			}), r.a.createElement("path", {
				d: "M44,28.63c0-.21,1.82-1.47,2.41-2.09s1.17-1.11,1.64-1.63c.25-.33.15-.3.14-.34a.06.06,0,0,0-.06,0l-.59,0-.54,0a2,2,0,0,1-.93-.08.89.89,0,0,1-.48-.6,1.08,1.08,0,0,1,.16-.8,8.24,8.24,0,0,1,.81-1c.22-.24.45-.47.68-.69a12.6,12.6,0,0,1,2.67-2A7.94,7.94,0,0,1,48.24,22,12.13,12.13,0,0,0,47,23l-.41.4c-.08.08-.17.27,0,.35a1.26,1.26,0,0,0,.4,0l.7,0H48a1.7,1.7,0,0,1,.45,0,.64.64,0,0,1,.49.64,1.28,1.28,0,0,1-.26.78,2.75,2.75,0,0,1-.45.5l-.87.79a17.69,17.69,0,0,1-1.69,1.29A9.78,9.78,0,0,1,44,28.63Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M39,27.34a5,5,0,0,0-2-2.39,3.14,3.14,0,0,0-1.32-.26,4.73,4.73,0,0,0-3.19,1.2A4.45,4.45,0,0,0,31,29.06c0,.18.05,1.71.15.5"
			}), r.a.createElement("path", {
				d: "M31.12,29.56c.05,0,.08.17.08.39a.87.87,0,0,0,0,.1v0s0,0-.09.07a.14.14,0,0,1-.15,0l0,0s0-.06,0-.08a1.62,1.62,0,0,1,0-.19c0-.14,0-.28,0-.43a5.21,5.21,0,0,1,.11-1.69,4.16,4.16,0,0,1,1-2,5,5,0,0,1,3.85-1.63,3.32,3.32,0,0,1,1.87.62,4.8,4.8,0,0,1,1.51,2.58,6.84,6.84,0,0,1-1.2-.81,5,5,0,0,1-.78-.65A2.31,2.31,0,0,0,35,25a3.78,3.78,0,0,0-2.07.78,4.64,4.64,0,0,0-1.67,3.09l-.12.92,0,.11v0h0a.13.13,0,0,0-.08,0c-.05,0,0,0-.09,0s0-.11,0-.16Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M43.74,49.05a2.43,2.43,0,0,1,2.42.74,5,5,0,0,1,1.39,2,3.31,3.31,0,0,1-.06,2.44,4,4,0,0,1-1.33,1.44,3.07,3.07,0,0,1-1.77.73A2.59,2.59,0,0,1,43.11,56a4,4,0,0,1-1.69-2.2c-.28-.93-1.57-1.62-1-2.38"
			}), r.a.createElement("path", {
				d: "M40.39,51.4c0,.06-.08.24,0,.47a2.55,2.55,0,0,0,.59.82,3.34,3.34,0,0,1,.71,1.12,2.9,2.9,0,0,0,.48.82,3.47,3.47,0,0,0,2.12,1.25A3.48,3.48,0,0,0,46.4,54.7a2.86,2.86,0,0,0,.15-3.64c-.71-1.13-1.78-2.06-2.74-1.84a1.18,1.18,0,0,1,.8-.44,2.49,2.49,0,0,1,1.14.15A3.2,3.2,0,0,1,47.22,50a4.59,4.59,0,0,1,.65,4,3.53,3.53,0,0,1-1.11,1.49,6.88,6.88,0,0,1-1.41.93,2.26,2.26,0,0,1-1.67.12,3.92,3.92,0,0,1-1.34-.77,4.18,4.18,0,0,1-.91-1.11A10.05,10.05,0,0,1,41,53.55c-.15-.29-.46-.71-.67-1.16a1.07,1.07,0,0,1-.11-.66A.74.74,0,0,1,40.39,51.4Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M56.48,39.84c.38-4-2.18-6.9-5.12-9.28a18.11,18.11,0,0,0-9.42-4.16,12.74,12.74,0,0,0-5.16.5,14.25,14.25,0,0,0-4.75,3,12.39,12.39,0,0,0-1.86,1.76,8,8,0,0,0-1.43,6.52c1.18,6,7.6,9.65,13,10.63,3.43.62,7.43.64,10.55-1.44C54.39,46,56.09,43.85,56.48,39.84Z"
			}), r.a.createElement("path", {
				d: "M56.49,39.84a8.51,8.51,0,0,1-.28,2.25A9,9,0,0,1,54,46.23a10.28,10.28,0,0,1-4.71,2.71,16,16,0,0,1-4.44.49,20.28,20.28,0,0,1-11.86-4,13,13,0,0,1-4.15-5.13,9.89,9.89,0,0,1-.53-1.59A7.59,7.59,0,0,1,28,37.07a9.05,9.05,0,0,1,.35-3.28,8,8,0,0,1,1.33-2.57,13.92,13.92,0,0,1,2-1.92,15.09,15.09,0,0,1,4.61-2.9A14.24,14.24,0,0,1,46.57,27a21.82,21.82,0,0,1,7.49,5.49,11.09,11.09,0,0,1,2.19,3.58,8.23,8.23,0,0,1,.41,3.76,9,9,0,0,0-.86-3.6,11.66,11.66,0,0,0-2.53-3.34,29.35,29.35,0,0,0-5.55-4.05A14.75,14.75,0,0,0,40,26.74a11.51,11.51,0,0,0-3.8.74,12.83,12.83,0,0,0-3.22,2A14.5,14.5,0,0,0,30.23,32a7.09,7.09,0,0,0-1.32,3.24,8.15,8.15,0,0,0,.2,3.41,9.67,9.67,0,0,0,1.36,3A11.91,11.91,0,0,0,32.6,44.1,15.11,15.11,0,0,0,35.14,46a19.85,19.85,0,0,0,5.54,2.24c3.75.85,7.56.89,10.55-.6a9.05,9.05,0,0,0,4-3.8A12.41,12.41,0,0,0,56.49,39.84Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M51.92,33a4.71,4.71,0,0,1,5-1.22c1.86.62,3,2.87,2.75,4.89a5.69,5.69,0,0,1-1.46,3.19c-.69.75-2.1,1.93-3.1,1.56"
			}), r.a.createElement("path", {
				d: "M55.1,41.44c.06,0,.24,0,.51,0a2.81,2.81,0,0,0,.94-.4,5.57,5.57,0,0,0,1.59-1.53,6,6,0,0,0,1-2.51,4.81,4.81,0,0,0-.41-2.58,4,4,0,0,0-1.33-1.63,3.75,3.75,0,0,0-1.9-.61,4.51,4.51,0,0,0-3.4,1,2.56,2.56,0,0,1,1.19-1.63A3.14,3.14,0,0,1,55,31a6.16,6.16,0,0,1,2.12.5,4.39,4.39,0,0,1,1.58,1.25A5.89,5.89,0,0,1,59.93,36a5.71,5.71,0,0,1-2.49,5,3.25,3.25,0,0,1-1.32.57A1.4,1.4,0,0,1,55.1,41.44Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M43.86,47.39a.36.36,0,0,0,.35.23c.08,0,.18,0,.21-.33,0,0,0-.07.07-.06l.17.13.18.12.13-.21c.09-.13.21-.4.26-.3.16.56.38.59.61.63l-.12.09a2.27,2.27,0,0,0,0-.64.81.81,0,0,0,.06-.44c.06,0,.2.14.28.17l.24.34.26.38a.26.26,0,0,0,.12.12s0,0,.06-.12.08-.28-.1-1.12c.17.1.2.08.22.07a.09.09,0,0,0,0-.05l.14.12.18.21a.74.74,0,0,1,.14.2c.06.1.1.26.16.35s.18,0,.3-.05a.3.3,0,0,0,.08-.19.64.64,0,0,0,0-.25,2.59,2.59,0,0,0-.1-.4.65.65,0,0,0,.2-.21.71.71,0,0,0,.27-.09,3.23,3.23,0,0,0,.45.4l.15.11.08,0,0,0v0l-.15-.79-.18-1,1.3,1,.27.21h0v-.1l0-.18a3.26,3.26,0,0,0-.06-.38l-.21-.81,1.18.58c.15.08.07,0,.1.06l0,0v0h0V45a3.49,3.49,0,0,0,0-.57v-.18l.13-.07a.42.42,0,0,1,.48,0c.12.09.05,0,.08.07l.05.08c0,.07.15.07.12,0v-.07s0-.06.06.14L52,44.08c-.16-.48-.25-.64-.2-.74.25.17.49.33.64.41a1.26,1.26,0,0,0,.33.09.75.75,0,0,0,.26,0,1.63,1.63,0,0,0-.27-.67,1.58,1.58,0,0,1,.5.82,1.32,1.32,0,0,1-.56.13h-.28l0,.06,0,.06c.06.14-.1-.29,0-.12l.07.14,0,.07.13.33a.72.72,0,0,1,0,.36.41.41,0,0,1-.28.31.58.58,0,0,1-.38,0,.84.84,0,0,1-.35-.33,1.06,1.06,0,0,0-.18-.22s0,0,0-.06,0-.15,0-.11l.21-.16a5.44,5.44,0,0,1,0,.7,7.94,7.94,0,0,0,.06,1.07l-.56-.36L51,45.62l-.15-.09c-.06,0-.17-.11-.21-.12a4,4,0,0,1,0,.55c0,.19,0,.41,0,.6l0,.29a1,1,0,0,1-.23-.15l-1.16-.9.22,1.26,0,.23s0,0,0,.05l0,0-.11,0a3.89,3.89,0,0,1-.42-.19l-.35-.21-.16-.12a1.23,1.23,0,0,1-.2-.19c0,.1.06.2.08.29a.59.59,0,0,1,0,.26.74.74,0,0,1-.18.39.77.77,0,0,1-.38.22.52.52,0,0,1-.43-.12c-.08-.08-.09-.2-.15-.29s0-.05,0-.05l0,.08a.43.43,0,0,1,0,.16.46.46,0,0,1-.06.23.44.44,0,0,1-.24.22.37.37,0,0,1-.35-.09,1.22,1.22,0,0,1-.16-.18l-.05-.09-.1-.16c0-.06-.12-.19-.14-.19a1.24,1.24,0,0,1,0,.27c0,.07,0,.12,0,.22l0,.15-.14,0h0a.87.87,0,0,1-.46-.2.53.53,0,0,1-.16-.23l0-.07h0v0l-.07.09a1.93,1.93,0,0,1-.19.26l-.22-.19-.12-.11s0,.1,0,.07a.35.35,0,0,1-.2.18c-.07,0-.11,0-.09,0a.33.33,0,0,1-.31-.17A.21.21,0,0,1,43.86,47.39Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M54.8,39.38a5,5,0,0,0,.16.71L54.83,40a.44.44,0,0,0,.18-.51l.25,0a1.05,1.05,0,0,0,.09.34,1.37,1.37,0,0,0,.26.4l-.32,0a1.27,1.27,0,0,0,.13-.19,1.18,1.18,0,0,0,.15-.55c.2-.07.25-.12.27-.15a1.57,1.57,0,0,0,.29,0,4.36,4.36,0,0,0,.28.64c.07.11.12.17.18.25l0,.05-.53.08a2.37,2.37,0,0,0,.09-.36,1.93,1.93,0,0,0,0-.32,2.2,2.2,0,0,0,0-.45l.3-.07.31,0a1,1,0,0,0,.39.49l-.42.29c0-.32-.06-.6-.07-.85l.4-.16a.25.25,0,0,0,.24.15c.08,0,.06-.13.1-.31a2.17,2.17,0,0,1,.12.26,1.29,1.29,0,0,1,0,.19.18.18,0,0,1,0,.1l-.08,0a.57.57,0,0,1-.42.08.7.7,0,0,1-.42-.24l.5-.2a2.09,2.09,0,0,1,.12.53v.31l0,.57-.41-.3c-.17-.12-.11-.1-.15-.15a1.38,1.38,0,0,1-.11-.24s0,.1,0,.15a3.14,3.14,0,0,1-.18.65l-.08.22-.13-.18a3,3,0,0,1-.21-.33L56,40c0-.08-.1-.26-.11-.22a.94.94,0,0,1,0,.3.4.4,0,0,1-.07.15,1.08,1.08,0,0,1-.18.24l-.13.14-.12-.15a1.7,1.7,0,0,1-.36-1l.34-.06a.66.66,0,0,1,0,.48.59.59,0,0,1-.34.32l-.14,0,0-.11A1.48,1.48,0,0,1,54.8,39.38Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M45.58,36.55a1.63,1.63,0,0,1-.08-.37,2.88,2.88,0,0,1,.12-.92A3.38,3.38,0,0,1,46.89,33a2.43,2.43,0,0,1,3.2.53c1.39,1.59-.16,4.18-2.07,4.29a2.88,2.88,0,0,1-1.61-.33A1.85,1.85,0,0,1,45.58,36.55Z"
			}), r.a.createElement("path", {
				d: "M45.58,36.54a2.4,2.4,0,0,0,1,.94,2.8,2.8,0,0,0,1.88.14,3,3,0,0,0,1.69-1.57A2.08,2.08,0,0,0,50,33.88a2.41,2.41,0,0,0-1.61-.94,2.16,2.16,0,0,0-1.66.57A3.48,3.48,0,0,0,45.88,35a2.64,2.64,0,0,0-.22,1.49,2.27,2.27,0,0,1-.16-1.64A3,3,0,0,1,46,33.44a2.63,2.63,0,0,1,3.27-.66,2.8,2.8,0,0,1,1.13,1.08,2.31,2.31,0,0,1,.28,1.44,3.22,3.22,0,0,1-1.38,2.23,2.76,2.76,0,0,1-2.27.39A2.16,2.16,0,0,1,46,37.31,1.84,1.84,0,0,1,45.58,36.54Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M35.34,29.49a1.81,1.81,0,0,1,1.9-.24,1.52,1.52,0,0,1,.65,1.33,2.77,2.77,0,0,1-1.82,2.71,1.51,1.51,0,0,1-2-1.76A2.63,2.63,0,0,1,35.34,29.49Z"
			}), r.a.createElement("path", {
				d: "M35.34,29.5a6.72,6.72,0,0,0-.73.81,2.6,2.6,0,0,0-.4,1.43,1.36,1.36,0,0,0,.93,1.33,1.78,1.78,0,0,0,1.62-.49,2.65,2.65,0,0,0,.71-2.71,1,1,0,0,0-1-.61,2.5,2.5,0,0,0-1.13.3,1.88,1.88,0,0,1,1.16-.7,1.29,1.29,0,0,1,1.23.47,2.16,2.16,0,0,1,.3,1.47,3.57,3.57,0,0,1-.4,1.27,2.62,2.62,0,0,1-1.88,1.4,1.58,1.58,0,0,1-1.77-1,2.45,2.45,0,0,1,.14-1.84,2.18,2.18,0,0,1,.6-.77A2.66,2.66,0,0,1,35.34,29.5Z"
			}), r.a.createElement("path", {
				d: "M36,34.9a19,19,0,0,0,8.08,2.8,20.79,20.79,0,0,1-.92,2.17A8.13,8.13,0,0,1,41.6,42a4,4,0,0,1-4.33.91c-1.18-.59-1.06-2.08-1.06-3.2a29.23,29.23,0,0,1,.4-4.38"
			}), r.a.createElement("path", {
				d: "M36.61,35.37c0,.12-.12,1.12-.2,2.29a25.35,25.35,0,0,0,0,3.23,2.29,2.29,0,0,0,.7,1.67A2.65,2.65,0,0,0,38.9,43a4.66,4.66,0,0,0,3.26-2,9.77,9.77,0,0,0,1-1.75l.4-.91.1-.22,0-.11h0l-.43-.06-.6-.11q-.6-.12-1.17-.27a18.06,18.06,0,0,1-2.15-.71A15.64,15.64,0,0,1,36,35c.66.27,1.59.66,2.49,1s1.76.56,2.2.71a15.88,15.88,0,0,0,1.67.51l.82.18.39.08.5.07.15.08h0s.06,0,0,0v0l0,.07c0,.1,0,.24-.08.37l-.24.53-.46,1a10,10,0,0,1-1.12,1.79,5.09,5.09,0,0,1-3.3,2,3.27,3.27,0,0,1-1.81-.27,2,2,0,0,1-1.07-1.37A6.46,6.46,0,0,1,36,40.14c0-.5,0-1,.06-1.48A20.63,20.63,0,0,1,36.61,35.37Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M54.28,16.26a2.92,2.92,0,0,1,.28,2.67,3.34,3.34,0,0,1-2.1,1.88,2.72,2.72,0,0,1-.86.14A3.19,3.19,0,0,1,50,20.49a2.71,2.71,0,0,1-1.62-3.15A3.16,3.16,0,0,1,52.33,15a3.38,3.38,0,0,1,2.54,2.22"
			}), r.a.createElement("path", {
				d: "M54.86,17.18a4.77,4.77,0,0,0-1.11-1.33,3.42,3.42,0,0,0-2.26-.69,2.77,2.77,0,0,0-2.27,1.48A3,3,0,0,0,48.83,18a1.87,1.87,0,0,0,.43,1.16,3.77,3.77,0,0,0,2,1.19,2.69,2.69,0,0,0,2-.53,2.62,2.62,0,0,0,1.11-1.64,2.91,2.91,0,0,0-.23-1.81,2.39,2.39,0,0,1,1,2,2.66,2.66,0,0,1-.81,2,4.28,4.28,0,0,1-2.26,1,3.51,3.51,0,0,1-2.18-.55,4,4,0,0,1-1.49-1.41,2.61,2.61,0,0,1-.3-1.92,3.65,3.65,0,0,1,2.17-2.67,3.73,3.73,0,0,1,3,.26,3.07,3.07,0,0,1,1.16,1.11A2.56,2.56,0,0,1,54.86,17.18Z"
			}), r.a.createElement("path", {
				className: o.a.cls8,
				d: "M28.91,55c0,1.3-1.84.76-2.86.65l-1.77-.19a4.85,4.85,0,0,1-1.42-.23c-.74-.34-2.58-7.68-2.95-9.25a2.41,2.41,0,0,1,.32-1.41c.27-.44.76-.34,1.2-.27l1.44.26,1.72.35c.55.13,1.08.2,1.27.8.13.37.25.74.37,1.11l.94,2.93.36,1.1c.39,1.22,1,2.39,1.3,3.62A1.89,1.89,0,0,1,28.91,55Z"
			}), r.a.createElement("path", {
				d: "M28.91,55c-.06-.07-.08-.41-.28-.91S28.2,53,27.91,52.3c-.59-1.4-1.07-3-1.41-3.93l-.88-2.44c-.11-.39-.33-.49-.76-.59l-1.33-.25c-.86-.16-1.82-.34-2.61-.44a.4.4,0,0,0-.32.1,1.67,1.67,0,0,0-.21.46,1.82,1.82,0,0,0-.1.54.78.78,0,0,0,0,.22l.08.32c.37,1.46.75,2.92,1.15,4.33a32.94,32.94,0,0,0,1.3,4c.19.32.12.35.48.43s.61.08.95.12l1.87.26a14.7,14.7,0,0,0,1.69.27,1.4,1.4,0,0,0,.69-.12.64.64,0,0,0,.27-.54.7.7,0,0,1-.16.66,1.33,1.33,0,0,1-.8.31A11.5,11.5,0,0,1,26,56l-1.74-.08a4.86,4.86,0,0,1-1.33-.18.89.89,0,0,1-.29-.15,1.06,1.06,0,0,1-.26-.29,3.15,3.15,0,0,1-.22-.46c-.13-.3-.22-.59-.32-.88-.18-.57-.35-1.14-.5-1.7C21,51.12,20.73,50,20.46,49s-.52-2-.73-3.1a2.41,2.41,0,0,1,.13-.81,1.77,1.77,0,0,1,.37-.72,1,1,0,0,1,.81-.23c.27,0,.49.07.73.11.95.16,1.85.34,2.73.51a2.29,2.29,0,0,1,1.32.52,1.57,1.57,0,0,1,.32.65l.2.6c.53,1.58,1,3.06,1.44,4.45A18.72,18.72,0,0,1,28.91,55Z"
			}), r.a.createElement("path", {
				className: o.a.cls9,
				d: "M26.58,49.75c.23.7.46,1.41.71,2.11.12.35.26.71.39,1.06,0,.12.28.67.19.75h0a5.32,5.32,0,0,1-1.18-.16l-1.26-.22-1.05-.2a1.37,1.37,0,0,1-.49-.13c-.17-.12-1.87-5.31-2.38-7a.29.29,0,0,1,.35-.36c.64.17,2.83.49,3.12.58a1.63,1.63,0,0,1,.48.13c.14.09.14.22.18.36s.16.53.24.79C26.08,48.21,26.33,49,26.58,49.75Z"
			}), r.a.createElement("path", {
				d: "M26.58,49.75c0-.09-.34-1-.67-2L25.66,47l-.12-.39c0-.13-.05-.25-.15-.3a8.59,8.59,0,0,0-1.26-.26l-1.79-.3-.46-.08c-.16-.05-.23,0-.29.07a.23.23,0,0,0,0,.14l.07.23.15.45L23,50.17l.51,1.49.27.74.14.35c0,.08,0,.09,0,.11l.14,0,2.94.56a4.14,4.14,0,0,0,.68.1c.08,0,.06,0,.07,0a1.86,1.86,0,0,0-.1-.31L27.23,52l-.69-2.22c.26.57.59,1.42.9,2.22l.46,1.12a1.34,1.34,0,0,1,.09.26.47.47,0,0,1,0,.14.37.37,0,0,1,0,.21c-.05.12-.25.12-.31.12h-.19l-2.47-.49c-.41-.1-.77-.14-1.18-.26a.26.26,0,0,1-.13-.14l-.06-.14-.11-.27L23.38,52,22,47.91l-.58-1.85a.4.4,0,0,1,.1-.5c.17-.13.37,0,.5,0l.88.16,1.67.31a8,8,0,0,1,.79.17.42.42,0,0,1,.27.35c0,.12.07.25.1.37Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M43.91,52.83c-1.93.15-3-2-4.47-2.85A3.66,3.66,0,0,0,38,49.45c-1.76-.14-2.19,1.76-2,3.17a5.54,5.54,0,0,0,2.93,4,7.69,7.69,0,0,0,5.59.51,3.27,3.27,0,0,0,2.54-3"
			}), r.a.createElement("path", {
				d: "M47,54.12a1.4,1.4,0,0,1,0,.78,2.85,2.85,0,0,1-.78,1.42,5.56,5.56,0,0,1-3.07,1.4,7.62,7.62,0,0,1-4.3-.51A6.19,6.19,0,0,1,35.72,54,4.65,4.65,0,0,1,35.78,50a2.29,2.29,0,0,1,.78-.83,2.32,2.32,0,0,1,1.09-.32,3.53,3.53,0,0,1,1.85.53,11.2,11.2,0,0,1,2.33,2.15,3.09,3.09,0,0,0,2.07,1.1,2,2,0,0,1-1.27.1,4.18,4.18,0,0,1-1.4-.66c-.83-.59-1.48-1.17-1.8-1.43a2.53,2.53,0,0,0-2.15-.76c-.69.19-1,1.06-1.1,1.84a4.84,4.84,0,0,0,1.83,4,6.46,6.46,0,0,0,3.74,1.36,6.79,6.79,0,0,0,3.41-.6,3.87,3.87,0,0,0,1.39-1.14A2.79,2.79,0,0,0,47,54.12Z"
			}), r.a.createElement("path", {
				d: "M24.54,49.69c-.13,0-.35-.76-.5-1-.07-.12-.13-.25-.19-.38a1.26,1.26,0,0,1-.16-.5.53.53,0,0,1,.23-.48.51.51,0,0,1,.62.06,1.11,1.11,0,0,1,.28.58,7.21,7.21,0,0,1,.24,2v.23l-.13,0a.5.5,0,0,1-.67-.29c.23.08.48-.07.44-.17l-.15.3a.85.85,0,0,1-.2-.47,6,6,0,0,0,0-1.12c0-.31-.11-.79-.17-.73s0,0,0,0,0,0,0,0a.69.69,0,0,0,0,.13l.14.38a4.64,4.64,0,0,1,.2.72A2.3,2.3,0,0,1,24.54,49.69Z"
			}), r.a.createElement("path", {
				d: "M25.26,50.93c-.09.07-.13.11-.1.19s.09.05.07.05,0,0,0,0,0,.09,0,0-.18-.09-.14-.08a.25.25,0,0,0,.17-.18c.32-.21.68.1.58.22a.76.76,0,0,1-.51.4.46.46,0,0,1-.41-.21.42.42,0,0,1,.13-.66.19.19,0,0,1,.21,0A.16.16,0,0,1,25.26,50.93Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M16.21,48.3c0-.11.63-.32,1.11-.79a1.62,1.62,0,0,0,.46-.86.93.93,0,0,0-.15-.7,1.25,1.25,0,0,0-.23-.23,2.49,2.49,0,0,0-.55-.33l-1.77-.74c.49-.06,1.25-.14,1.84-.24l.4-.1a1.68,1.68,0,0,0,.31-.11L18,44a2.56,2.56,0,0,0,1.08-.92l.05-.12s0-.11,0-.24a3.24,3.24,0,0,0-.13-.41,2.67,2.67,0,0,0-.37-.65l.72-.67a13.4,13.4,0,0,0,.86,1.18,1.37,1.37,0,0,0,.35.32,3.48,3.48,0,0,0,.61.08,5.5,5.5,0,0,0,1.21,0l1.12-.14a4.45,4.45,0,0,1-1.52.84,3.3,3.3,0,0,1-1.55.1,1.27,1.27,0,0,1-.44-.21,2.28,2.28,0,0,1-.27-.27,5.77,5.77,0,0,1-.39-.51c-.23-.33-.42-.66-.61-1l.39-.37a2.74,2.74,0,0,1,.58,1,1.86,1.86,0,0,1,.12,1.11,3,3,0,0,1-1.47,1.37l-.42.2-.26.09a2.59,2.59,0,0,1-.4.1,3.34,3.34,0,0,1,.38.17,1.36,1.36,0,0,1,.17.12,1.85,1.85,0,0,1,.29.33,1.52,1.52,0,0,1,0,1.64,2,2,0,0,1-1,.81A3.79,3.79,0,0,1,16.21,48.3Z"
			}), r.a.createElement("path", {
				className: o.a.cls8,
				d: "M8.62,33.78l.76-1,1.72-2.21A4.92,4.92,0,0,1,12,29.51a1.37,1.37,0,0,1,.5-.28,2.43,2.43,0,0,1,1.58.39c.51.21,2.57,1.48,3.06,1.76s1.08.56,1.06,1.25a1.86,1.86,0,0,1-.33.87c-.61,1-1.31,2-2,3s-3.14,4.35-3.8,5a1.1,1.1,0,0,1-.38.3c-.63.26-1.24-.24-1.77-.53L8.59,40.6l-1.52-.86c-.37-.21-1.12-.49-1.21-.94s.57-1.15.84-1.51L7.63,36"
			}), r.a.createElement("path", {
				d: "M7.63,36a4.56,4.56,0,0,1-.5.85c-.15.22-.32.49-.54.77A3.55,3.55,0,0,0,6,38.5c-.13.32.13.55.47.75l1,.53,1.69.9,1.17.6a1.77,1.77,0,0,0,1.06.35.59.59,0,0,0,.38-.25c.14-.15.28-.32.42-.5l.83-1.1c1.08-1.5,2.19-3,3.11-4.49l1.24-1.94a1.51,1.51,0,0,0,.32-.79c0-.2-.12-.35-.41-.53-1.28-.73-2.52-1.61-3.73-2.18a2.09,2.09,0,0,0-.8-.27.6.6,0,0,0-.32.07,1.36,1.36,0,0,0-.34.23,17.67,17.67,0,0,0-1.21,1.41c-.79.94-1.53,1.81-2.21,2.57a33.53,33.53,0,0,1,1.77-3.05l.5-.76a3.72,3.72,0,0,1,.57-.75,2.12,2.12,0,0,1,.76-.51,1.56,1.56,0,0,1,.79,0,16.69,16.69,0,0,1,3.32,1.85c.5.35,1,.59,1.49,1a1.3,1.3,0,0,1,.51.87,1.59,1.59,0,0,1-.23.93C17,35.24,15.86,37,14.69,38.57c-.57.8-1.13,1.56-1.69,2.29a9.73,9.73,0,0,1-.9,1.06,1.32,1.32,0,0,1-1.48.1c-1.53-.82-2.9-1.62-4.19-2.35a2.25,2.25,0,0,1-.51-.37.78.78,0,0,1-.25-.77,2.94,2.94,0,0,1,.79-1.14Z"
			}), r.a.createElement("g", {
				className: "cls10"
			}, r.a.createElement("path", {
				d: "M11.3,40.88a24.23,24.23,0,0,1-2.84-1.27l-.6-.29-.31-.17-.16-.09a.6.6,0,0,1-.21-.21.76.76,0,0,1,.09-.58l.19-.36.41-.73.84-1.41a47.55,47.55,0,0,1,4-5.69,11.25,11.25,0,0,1-1.28,2.51,37.38,37.38,0,0,0-2.37,3.3c-.34.52-.64,1-.93,1.51l-.41.72c-.12.23-.3.5-.25.58a.11.11,0,0,0,.07.06l.14.09L8,39l.59.32,1.09.59C10.23,40.21,11.11,40.78,11.3,40.88Z"
			})), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M5.43,28.78a3.44,3.44,0,0,0-2.11,5.71c1.24,1.58,4.57,3.39,6.28,2.21a2.11,2.11,0,0,0,.94-1.29c.17-.94-.69-2-1.35-2.55a5.75,5.75,0,0,0-3.54-1.34c-.09,0-.22.06-.18.13"
			}), r.a.createElement("path", {
				d: "M5.47,31.66c-.06,0,0-.17.12-.19a2.36,2.36,0,0,1,.47,0,5.2,5.2,0,0,1,1.37.24,6.14,6.14,0,0,1,2.49,1.57A3.23,3.23,0,0,1,10.86,35,2.12,2.12,0,0,1,10,36.87a2.82,2.82,0,0,1-2,.6A5.89,5.89,0,0,1,6.05,37a8.39,8.39,0,0,1-2.72-1.82,4.34,4.34,0,0,1-1.26-2.93,3.4,3.4,0,0,1,1.15-2.64,4.22,4.22,0,0,1,2.18-.95,5.58,5.58,0,0,0-1.8,1.43,3.61,3.61,0,0,0-.68,1.66,3.29,3.29,0,0,0,.35,2.17,5.24,5.24,0,0,0,1.49,1.62,5.86,5.86,0,0,0,3.78,1.34c1.21-.12,2.18-1.37,1.66-2.32A4.93,4.93,0,0,0,8.1,32.4a7.54,7.54,0,0,0-1.51-.66,7.49,7.49,0,0,0-.74-.17C5.65,31.53,5.43,31.53,5.47,31.66Z"
			}), r.a.createElement("path", {
				d: "M14.69,31.63c0,.09-.34.56-.37.79s.14.17.12.12l0,0,.13-.22.26-.41s0-.09.05-.15,0-.07.09-.07l0,0c0-.05-.1-.08-.22,0a.33.33,0,0,1,.45-.34.4.4,0,0,1,.2.17.79.79,0,0,1,.07.2.42.42,0,0,1,0,.2.79.79,0,0,1-.1.21c-.21.24-.37.46-.53.67a.86.86,0,0,1-.73.46.29.29,0,0,1-.2-.29.73.73,0,0,1,0-.38,1.77,1.77,0,0,1,.3-.59A1.31,1.31,0,0,1,14.69,31.63Z"
			}), r.a.createElement("path", {
				d: "M13.77,33.64s.09,0,.14,0h0v.11a.59.59,0,0,1,0,.14c0,.2-.35.34-.56.15a.38.38,0,0,1,0-.63.25.25,0,0,1,.39.19.24.24,0,0,0-.14.1s0,0,0,0v0c.05,0,0,0,0,0s0-.07,0-.05h0l.07.17A.41.41,0,0,1,13.77,33.64Z"
			}))))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", c({
				className: Object(a.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), r.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.t)(),
				f = Object(o.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				h = Object(a.b)(f),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: s,
					isCollectionLayout: a,
					isEditing: o,
					layout: i,
					pageLayer: c,
					...d
				}) => r.a.createElement("div", d);
			t.a = b(h(({
				className: e,
				...t
			}) => r.a.createElement(g, p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var h = Object(b.a)(f);
			var g = e => r.a.createElement(h, e),
				y = n("./src/reddit/layout/page/Listing/index.m.less"),
				v = n.n(y);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: s,
						theme: a,
						...i
					} = e, c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return r.a.createElement("div", _({
						className: Object(o.a)(v.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				x = c.a.div("Body", v.a),
				O = c.a.div("Sidebar", v.a),
				j = e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null;

			function I(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					s = e.sidebar && r.a.createElement(O, {
						className: e.isCollectionLayout ? v.a["m-collectionLayout"] : v.a.defaultLayout,
						style: n
					}, e.sidebar),
					i = r.a.createElement(a.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? r.a.createElement(r.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? r.a.createElement(r.a.Fragment, null, s, i) : r.a.createElement(r.a.Fragment, null, i, s);
				const m = e.disableFullscreen ? `${e.maxWidth||u.a+2*d.m}px` : "100%";
				return r.a.createElement(g, {
					subredditId: e.subredditId
				}, r.a.createElement("div", {
					className: Object(o.a)(v.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, r.a.createElement(E, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), r.a.createElement("div", {
					className: v.a.innerContainer
				}, r.a.createElement("div", {
					className: v.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, j(e), r.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), r.a.createElement(x, {
					style: {
						maxWidth: m
					}
				}, c))))
			}
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				af: "GWC1a5vux4ivxu9auf82p"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/extractQueryParams/index.ts"),
				p = n("./src/lib/isAdHocMultireddit/index.ts"),
				b = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/lib/listingSort/index.ts"),
				h = n("./src/lib/makeListingKey/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				y = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/fastdom/index.ts"),
				_ = n("./src/lib/performanceTimings/index.tsx"),
				E = n("./src/reddit/actions/pages/subreddit.ts"),
				x = n("./src/reddit/actions/preferences.ts"),
				O = n("./src/reddit/actions/search.ts"),
				j = n("./src/reddit/actions/subreddit.ts"),
				I = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				C = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				S = n("./src/reddit/components/ContentGate/index.tsx"),
				P = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				T = n("./src/reddit/components/DownToChatBanner/index.tsx"),
				N = n("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/async.tsx"),
				k = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				w = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				A = n("./src/reddit/components/EmptySubreddit.tsx"),
				L = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				D = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				R = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				B = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				F = n("./src/reddit/components/HeaderImage/index.tsx"),
				U = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				M = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				H = n("./src/reddit/components/JumpToContent/index.tsx"),
				W = n("./src/reddit/components/ListingPostList/index.tsx"),
				G = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				K = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				q = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				V = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				Z = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				Q = n("./src/reddit/components/TabBadger/index.tsx"),
				z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				J = n("./src/reddit/constants/page.ts"),
				Y = n("./src/reddit/constants/parameters.ts"),
				X = n("./src/reddit/constants/postLayout.ts"),
				$ = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ee = n("./src/reddit/featureFlags/index.ts"),
				te = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ne = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				se = n("./src/reddit/helpers/resonatePage/index.ts"),
				re = n("./src/reddit/helpers/trackers/screenview.ts"),
				ae = n("./src/reddit/layout/page/Listing/index.tsx"),
				oe = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ie = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ce = n("./src/reddit/selectors/discoveryUnit.ts"),
				de = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				le = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				ue = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				me = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				pe = n("./src/reddit/selectors/experiments/topPosts.ts"),
				be = n("./src/reddit/selectors/experiments/trending.ts"),
				fe = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				he = n("./src/reddit/selectors/gold/powerups.ts"),
				ge = n("./src/reddit/selectors/listings.ts"),
				ye = n("./src/reddit/selectors/meta.ts"),
				ve = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_e = n("./src/reddit/selectors/posts.ts"),
				Ee = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts"),
				Oe = n("./src/reddit/selectors/user.ts"),
				je = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx"),
				Ie = n("./src/reddit/pages/Subreddit/index.m.less"),
				Ce = n.n(Ie);

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-AdHocMultiredditSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("reddit-components-AdHocMultiredditSidebar")]).then(n.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
				}
			}), Ne = 5, ke = 3, we = Object($.t)(), Ae = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
				}
			}), Le = Object(g.a)(Object(d.a)((e, {
				location: t
			}) => t.search, e => a()([...Object(m.a)(e)]))), De = Object(d.a)((e, {
				match: t
			}) => t.params.subredditName, (e, {
				match: t
			}) => t.params.sort, Le, Oe.bb, de.a, (e, t, n, s, r) => {
				let a = t;
				a || (e === J.f && r ? a = y.P.BEST : Object(b.a)(e) && (a = y.P.HOT));
				const o = Object(E.makeFlairSearchOptions)(n, s);
				return Object(E.makeSubredditPageKey)(e, a, n, o)
			}), Re = Object(d.c)({
				isTopContentDismissed: Oe.P
			}), Be = Object(d.c)({
				subreddit: (e, t) => Object(xe.A)(e, {
					subredditName: t.match.params.subredditName
				})
			}), Fe = Object(d.c)({
				powerupsEnabled: (e, t) => {
					const {
						subreddit: n
					} = Be(e, t);
					return !(!n || !Object(he.i)(e, {
						subredditId: n.id
					}))
				},
				powerupsTier2Achieved: (e, t) => {
					const {
						subreddit: n
					} = Be(e, t);
					return !(!n || !Object(he.j)(e, {
						subredditId: n.id
					}))
				}
			}), Ue = Object(d.c)({
				countryMeta: ye.b,
				geopopular: Oe.m
			}), Me = Object(d.c)({
				isLoggedIn: Oe.J
			}), He = Object(g.a)((e, t) => {
				const {
					subreddit: n
				} = Be(e, t), {
					subredditName: s
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					const r = De(e, t),
						a = Object(ve.a)(ie.c.config)(e, {
							subredditId: n.id
						}),
						o = Object(_e.F)(e, r, s, !0),
						i = !Object(ge.d)(e, {
							listingKey: r
						});
					if (a && i && o.length <= 1) return !0
				}
				return !1
			}), We = Object(d.c)({
				inAwardListingExperiment: le.a,
				isPopular: $.C,
				isInTrendingEntrypointExperiment: be.a
			}), Ge = e => {
				const t = Y.x in e && e[Y.x].toUpperCase();
				if ("string" == typeof t && t in y.Ub) return y.Ub[t]
			}, Ke = Object(g.a)((e, t) => {
				const {
					sort: n,
					subredditName: s
				} = t.match.params, r = Le(e, t);
				if (n) return Object(f.b)({
					sort: n,
					timeSort: Ge(r)
				});
				if (Object(b.a)(s)) return s === J.f && Object(de.a)(e) ? Object(f.b)({
					sort: y.P.BEST
				}) : Object(f.b)({
					sort: y.P.HOT
				});
				const a = De(e, t),
					o = e.listings.postOrder.listingSort[a];
				if (o && !o.hasChanged) return Object(f.d)(o.sort);
				const {
					subreddit: i
				} = Be(e, t);
				if (i) {
					const t = Object(xe.D)(e, {
						subredditId: i.id
					});
					return Object(f.d)(t)
				}
				return Object(f.d)(e.user.prefs.sort)
			}), qe = Object(g.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(xe.X)(e, {
					subredditName: n
				})
			}), Ve = Object(d.c)({
				claimablePointsEnabled: ee.d.spClaimablePoints,
				isBlacklistedTopContentPage: ce.f,
				listingKey: De,
				sortParams: Ke,
				specialMembershipUpsellsEnabled: ee.d.spSpecialMembershipUpsells,
				stellarRegistrationBannerEnabled: ee.d.spStellarWalletRegistration,
				topContent: qe,
				topContentDiscoveryUnit: e => Object(ce.c)(e, {
					unitName: oe.a
				}),
				topPostsVariant: pe.d,
				walletRegistrationBannerEnabled: ee.d.spWalletRegistrationBanner
			}), Ze = Object(d.c)({
				showCreatePostBanner: He,
				contentGateInfo: (e, t) => Object(Oe.e)(e, t.match.params.subredditName),
				layout: $.O,
				isRpanDuVisible: (e, {
					match: t
				}) => Object(Ee.a)(e, {
					listingName: `r/${t.params.subredditName}`,
					sort: t.params.sort
				}),
				rpanInjectionIndex: (e, {
					match: t
				}) => Object(Ee.b)(e, {
					listingName: `r/${t.params.subredditName}`
				}),
				isUISimplificationAllItemsVariant: fe.b,
				isActionBarAnimationEnabled: ue.b,
				inResonatePilot: me.a
			}), Qe = () => Object(d.a)(Oe.bb, Ue, Le, Re, Fe, Be, (e, {
				match: t
			}) => Object(xe.x)(e, {
				subredditName: t.params.subredditName
			}), Me, (e, {
				match: t
			}) => t.params.subredditName, We, Ve, Ze, (e, {
				countryMeta: t,
				geopopular: n
			}, s, {
				isTopContentDismissed: r
			}, {
				powerupsEnabled: a,
				powerupsTier2Achieved: o
			}, {
				subreddit: i
			}, c, {
				isLoggedIn: d
			}, l, {
				inAwardListingExperiment: u,
				isInTrendingEntrypointExperiment: m,
				isPopular: p
			}, {
				claimablePointsEnabled: b,
				specialMembershipUpsellsEnabled: f,
				listingKey: h,
				sortParams: {
					sort: g,
					timeSort: v
				},
				stellarRegistrationBannerEnabled: _,
				topContent: E,
				topContentDiscoveryUnit: x,
				topPostsVariant: O,
				isBlacklistedTopContentPage: j,
				walletRegistrationBannerEnabled: I
			}, C) => {
				const S = t || y.w.Everywhere,
					P = n || S,
					T = s && Y.h in s ? s[Y.h].toUpperCase() : P,
					N = !!s.hasOwnProperty("f");
				return {
					countrySort: T,
					claimablePointsEnabled: b,
					specialMembershipUpsellsEnabled: f,
					inAwardListingExperiment: u,
					isLoggedIn: d,
					isInTrendingEntrypointExperiment: m,
					isPopular: p,
					listingKey: h,
					renderNSFWContentGate: i && i.isNSFW && !e,
					isTopContentDismissed: r,
					powerupsEnabled: a,
					powerupsTier2Achieved: o,
					sort: g,
					stellarRegistrationBannerEnabled: _,
					subreddit: i,
					subredditAboutInfo: c,
					subredditName: l,
					timeSort: v,
					topContent: E,
					topContentDiscoveryUnit: x,
					topPostsVariant: O,
					isBlacklistedTopContentPage: j,
					isFlairFilter: N,
					walletRegistrationBannerEnabled: I,
					...C
				}
			}), ze = (e, t) => ({
				onLoadMorePosts: () => {
					e(j.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(O.g)([y.Pb.Posts])),
				refreshFeed: () => e(j.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(x.F)())
			}), Je = Object(c.b)(Qe, ze), Ye = Object(s.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), Xe = e => i.a.createElement(Ye, Se({}, e, {
				fallback: i.a.createElement(q.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), $e = Object(s.a)({
				resolved: {},
				chunkName: () => "FrontpageSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("FrontpageSidebar").then(n.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FrontpageSidebar/index.tsx"
				}
			}), et = Object(s.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
				}
			});

			function tt(e) {
				const {
					subreddit: t
				} = e;
				return !!t && !!t.name && "snoovatar" === t.name.toLowerCase()
			}
			class nt extends i.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					if (v.a.read(() => {
							Object(_.d)(_.c.Subreddit, this.props.isLoggedIn)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						y.Cb.includes(e) && Object(se.a)(e)
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(te.c)(te.a.SearchResults) && Object(te.b)(te.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && y.Cb.includes(t) && Object(se.a)(t)
					}
				}
				componentWillUnmount() {
					this.props.isFlairFilter && Object(te.c)(te.a.SearchResults) && Object(te.b)(te.a.SearchResults)
				}
				render() {
					const {
						claimablePointsEnabled: e,
						contentGateInfo: t,
						countrySort: n,
						inAwardListingExperiment: s,
						isActionBarAnimationEnabled: r,
						isInTrendingEntrypointExperiment: a,
						isPopular: o,
						isLoggedIn: c,
						layout: d,
						listingKey: m,
						match: f,
						renderNSFWContentGate: g,
						showCreatePostBanner: v,
						sort: _,
						specialMembershipUpsellsEnabled: E,
						isTopContentDismissed: x,
						powerupsEnabled: O,
						powerupsTier2Achieved: j,
						stellarRegistrationBannerEnabled: q,
						sendEvent: z,
						subreddit: Y,
						subredditAboutInfo: $,
						subredditName: ee,
						timeSort: te,
						topContent: se,
						topContentDiscoveryUnit: oe,
						topPostsVariant: ie,
						isBlacklistedTopContentPage: ce,
						isRpanDuVisible: de,
						rpanInjectionIndex: le,
						isFlairFilter: ue,
						walletRegistrationBannerEnabled: me,
						isUISimplificationAllItemsVariant: be
					} = this.props, fe = Object(b.a)(ee), he = ee.toLowerCase(), ge = `/r/${ee}/`, ye = {
						listingKey: m,
						listingName: he
					}, ve = Object(pe.a)(ie), _e = Object(pe.b)(ie), Ee = Object(pe.c)(ie);
					let xe;
					fe ? xe = Object(p.a)(ee) ? i.a.createElement(Te, ye) : i.a.createElement($e, ye) : Y && (xe = i.a.createElement(Z.a, Se({}, ye, {
						className: Ce.a.sidebar,
						subredditId: Y.id,
						subredditName: ee,
						topPostsVariant: ie
					})));
					const Oe = Object(ne.a)(t, g, ee);
					if (Oe) return i.a.createElement(S.default, Oe);
					const Ie = d === X.g.Large,
						we = o && a && !be,
						Le = Y ? Y.id : void 0,
						De = !f.params.sort && se && !se.isSubscribed && se.postIds && se.postIds.length >= Ne && !x && !ce && !ve && !_e,
						Re = {},
						Be = d === X.g.Classic ? Ce.a.classicChild : d === X.g.Compact ? Ce.a.compactChild : Ce.a.cardChild;
					if (E && Y && (Re[0] = {
							estHeight: 487,
							id: `newbie-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(w.a, {
								className: Object(u.a)(e, Be)
							})
						}, Re[3] = {
							estHeight: 256,
							id: `lfg-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(k.a, {
								className: Object(u.a)(e, Be),
								subredditId: Y.id
							})
						}), Y && d === X.g.Large && (Re[0] = {
							estHeight: 175,
							id: `community-survey-${d}-${m}`,
							render: () => i.a.createElement(je.a, {
								subredditId: Y.id
							})
						}), s && ee === J.f && _ === y.P.AWARDED && (Re[0] = {
							estHeight: 180,
							id: `awardlisting-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(I.a, {
								className: Object(u.a)(e, Be)
							})
						}), me && Y && (Re[1] = {
							estHeight: 384,
							id: `wallet-registration-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(R.a, {
								className: Object(u.a)(e, Be),
								subredditId: Y.id
							})
						}), q && Y && (Re[2] = {
							estHeight: 200,
							id: `stellar-registration-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(B.a, {
								className: Object(u.a)(e, Be),
								subredditId: Y.id
							})
						}), e && Y && (Re[2] = {
							estHeight: 268,
							id: `claim-points-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(D.a, {
								className: Object(u.a)(e, Be),
								subredditId: Y.id
							})
						}), Y && d === X.g.Large && O && !j) {
						Re[Re[2] ? Re[3] ? 4 : 3 : 2] = {
							estHeight: 476,
							id: `powerups-perks-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(N.a, {
								className: Object(u.a)(e, Be),
								subredditId: Y.id
							})
						}
					}
					if (!o && Ee && te !== y.Ub.WEEK && d === X.g.Large) {
						const e = Object(h.a)(ee, y.P.TOP, {
							t: y.Ub.WEEK
						});
						Re[ke] = {
							estHeight: 0,
							id: `top-week-posts-${d}-${m}`,
							render: ({
								className: t
							}) => i.a.createElement(et, {
								className: t,
								listingKey: e,
								subredditName: ee
							})
						}
					}
					if (de) {
						const {
							child: e,
							idx: t
						} = Object(G.a)({
							children: Re,
							desiredIndex: le,
							layout: d,
							listingKey: m,
							listingName: `r/${ee}`,
							sendEvent: z
						});
						Re[t] = e
					}
					const Fe = {
							baseUrl: ge,
							countrySort: n,
							sort: _,
							subredditId: Le,
							timeSort: te
						},
						Ue = ue ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Me = Y && Y.subscribers;
					let He;
					const We = window.URL;
					if (tt(this.props)) {
						const e = new We(l.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), He = i.a.createElement("iframe", {
							className: Object(u.a)(Ce.a.af),
							src: e.href
						})
					} else we && (He = i.a.createElement(Xe, {
						showCardView: this.props.layout === X.g.Large
					}));
					return i.a.createElement(V.a, {
						subredditId: Le
					}, i.a.createElement(ae.a, {
						subredditId: Le,
						className: Object(u.a)(Ce.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !fe && i.a.Children.toArray([i.a.createElement(F.a, {
							headerText: Y ? Y.name : ee,
							disableFullscreen: Ie,
							isTopBannerVariant: !0,
							key: "headerimage",
							subredditOrProfile: Y,
							url: ge
						}), i.a.createElement(C.a, {
							layout: d,
							key: "idtopbar",
							subreddit: Y || void 0,
							subredditId: Le,
							subredditName: ee,
							subredditUrl: ge
						})]),
						trendingUnit: He,
						content: i.a.createElement(i.a.Fragment, null, Y && Y.isQuarantined && i.a.createElement(M.a, {
							subredditName: ee
						}), Y && v && i.a.createElement(P.a, {
							subreddit: Y,
							listingKey: m,
							listingName: he
						}), we && i.a.createElement(K.a, {
							className: Ce.a.duHeader
						}, Pe._("Popular posts", null, {
							hk: "Gfyj2"
						})), De && i.a.createElement(Ae, {
							discoveryUnit: oe,
							subredditName: Y ? Y.name : ee,
							topContent: se,
							onCloseClick: this.onTopContentDismissed
						}), !fe && c && !($ && $.userIsBanned) && i.a.createElement(U.a, {
							subredditName: ee
						}), i.a.createElement(L.a, Fe), Y && i.a.createElement(T.a, {
							subreddit: Y
						}), i.a.createElement(H.a, null), i.a.createElement(Q.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: m,
							subredditName: ee,
							subscriberCount: Me
						}), i.a.createElement(W.a, {
							injectChildren: Re,
							listingKey: m,
							listingName: he,
							listingViewed: (e, t) => Object(re.f)(m, _, t, e, te),
							noPostsComponent: () => i.a.createElement(A.a, {
								listingName: he,
								sort: _,
								subreddit: Y || void 0
							}),
							onLoadMore: Ue,
							inSubredditOrProfile: !fe,
							disablePlaceholder: ee === J.f && _ === y.P.AWARDED,
							isActionBarAnimationEnabled: r
						})),
						sidebar: xe
					}))
				}
			}
			t.default = we(Je(Object(z.c)(nt)))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/ads/constants.ts");
			const a = [];
			var o = (e = a, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
						default:
							return e
					}
				},
				i = n("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case i.a:
					case i.e: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case i.c:
					case i.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case i.d:
						case i.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(s.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				f = n("./node_modules/lodash/uniqBy.js"),
				h = n.n(f),
				g = n("./node_modules/lodash/values.js"),
				y = n.n(g),
				v = n("./src/reddit/actions/comment/constants.ts"),
				_ = n("./src/reddit/actions/comment/websocket/constants.ts");
			const E = {};

			function x(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var O = (e = E, t) => {
					switch (t.type) {
						case i.f:
						case v.u:
						case i.b: {
							const {
								comments: n,
								key: s
							} = t.payload, r = e[s] ? e[s] : [], a = function(e, t) {
								return y()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, r.find(e => e.stickied)), o = x([...r, ...a]);
							return {
								...e,
								[s]: [...o]
							}
						}
						case _.b:
						case _.c:
						case _.d:
						case v.G:
						case v.F: {
							const {
								comment: {
									id: n,
									created: s,
									isStickied: r,
									authorId: a
								},
								commentsPageKey: o,
								isChatSort: i
							} = t.payload;
							return !1 === i ? e : {
								...e,
								[o]: [...x([...e[o] ? e[o] : [], {
									id: n,
									created: s,
									stickied: r,
									authorId: a
								}])]
							}
						}
						default:
							return e
					}
				},
				j = n("./node_modules/lodash/mapValues.js"),
				I = n.n(j),
				C = n("./src/reddit/helpers/commentList/index.ts"),
				S = n("./src/reddit/models/Comment/index.ts");
			const P = {};

			function T(e) {
				const t = e;
				return I()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var N = (e = P, t) => {
				switch (t.type) {
					case v.u: {
						const {
							comments: n,
							commentLists: s,
							continueThreads: r,
							key: a,
							moreCommentsItem: o,
							moreComments: i
						} = t.payload, c = s[o.postId], d = e[a], l = {}, u = d[o.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(C.c)({
									commentLink: c.head,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								}),
								t = Object(C.c)({
									commentLink: c.tail,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[a]: {
								...e[a],
								...T(n),
								...T(r),
								...T(i),
								...l
							}
						}
					}
					case i.b:
					case i.f: {
						const {
							comments: n,
							continueThreads: s,
							key: r,
							moreComments: a
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...T(n),
								...T(s),
								...T(a)
							}
						}
					}
					case _.b:
						const {
							comment: n, commentsPageKey: s, depth: r, headCommentId: a, originId: o, isChatSort: c
						} = t.payload, d = e[s], l = {};
						let u = null;
						if (c) return a && (l[a] = {
							...d[a],
							prev: Object(S.g)(n.id)
						}, u = Object(S.g)(a)), {
							...e,
							[s]: {
								...e[s],
								...l,
								[n.id]: {
									depth: 0,
									next: u,
									prev: null
								}
							}
						}; {
							let t = null;
							const a = n.parentId;
							if (o && a) {
								const n = "moreComments-" + o;
								if (d[a] && !d[n]) {
									const o = d[a].next;
									return o && (l[o.id] = {
										...d[o.id],
										prev: Object(S.h)(n)
									}, u = o), l[a] = {
										...d[a],
										next: Object(S.h)(n)
									}, t = Object(S.g)(a), {
										...e,
										[s]: {
											...e[s],
											...l,
											[n]: {
												depth: r || 0,
												next: u,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case v.G: {
							const {
								comment: n,
								commentsPageKey: s,
								headCommentId: r
							} = t.payload, a = e[s], o = {};
							let i = null;
							return r && (o[r] = {
								...a[r],
								prev: Object(S.g)(n.id)
							}, i = Object(S.g)(r)), {
								...e,
								[s]: {
									...e[s],
									...o,
									[n.id]: {
										depth: 0,
										next: i,
										prev: null
									}
								}
							}
						}
						case v.F: {
							const {
								comment: n,
								commentsPageKey: s,
								parentCommentId: r,
								depth: a
							} = t.payload, o = e[s], i = {};
							let c = null;
							if (!o[r]) return e;
							const d = o[r].next;
							return d && (i[d.id] = {
								...o[d.id],
								prev: Object(S.g)(n.id)
							}, c = d), i[r] = {
								...o[r],
								next: Object(S.g)(n.id)
							}, {
								...e,
								[s]: {
									...e[s],
									...i,
									[n.id]: {
										depth: a,
										next: c,
										prev: Object(S.g)(r)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const k = {};
			var w = (e = k, t) => {
				switch (t.type) {
					case _.b:
					case _.c:
					case v.G: {
						const {
							comment: n,
							commentsPageKey: s,
							isChatSort: r
						} = t.payload;
						return !1 === r ? e : {
							...e,
							[s]: n.id
						}
					}
					case i.b:
					case i.f: {
						const {
							commentLists: n,
							key: s,
							postId: r
						} = t.payload;
						return {
							...e,
							[s]: n[r] && n[r].head ? n[r].head.id : null
						}
					}
					default:
						return e
				}
			};
			const A = {};
			var L = (e = A, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
						const {
							key: n,
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case v.G: {
						const {
							parentId: n,
							commentsPageKey: s
						} = t.payload;
						return e[s] ? e : {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: b,
				keyToChatCommentLinks: O,
				keyToCommentThreadLinkSets: N,
				keyToHeadCommentId: w,
				keyToPostId: L,
				ads: o
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(c.a, (e, {
					listingName: t
				}) => {
					const n = Object(i.tb)(e);
					if (!n) return !1;
					let s;
					if (-1 === [a.R, "r/popular"].indexOf(t)) {
						const r = t.replace(/^r\//, ""),
							a = Object(o.F)(e, r),
							i = n.subreddit[a];
						if (!i) return !1;
						s = i
					} else s = n;
					if (!s.rpanDuDismissalTime) return !1;
					return new Date(s.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.x
				}, (e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.k, (e, {
					sort: t
				}) => t, (e, t, n, s, a, o) => o !== r.P.AWARDED && (!!e && (!a.isPermanentlyCanceled && (!t && (!!s && s.show_discovery_unit))))),
				u = Object(s.a)((e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.l, (e, t, n) => t ? t.discovery_unit_index : a.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return x
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "k", (function() {
				return L
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "b", (function() {
				return H
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "g", (function() {
				return G
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(r.a)(Object(s.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				f = e => e.publicAccessNetwork.history,
				h = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				v = Object(s.a)(y, e => e.ended),
				_ = Object(s.a)(y, e => e.removed),
				E = Object(s.a)(p, v, _, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = B(s, o.a.ENDED) ? o.a.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !0 === a ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = B(s, o.a.ENDED) ? o.a.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !1 === a ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, s)
				}),
				x = (e, t) => {
					return E(e)[Object(a.g)(t)]
				},
				O = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), E, b, i.h, (e, t, n, s, r) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						n[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...s, ...r]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				j = Object(s.a)((e, {
					count: t
				}) => t, E, (e, {
					listingName: t,
					streamIdFromPath: n
				}) => O(e, {
					listingName: t,
					streamIdFromPath: n
				}), (e, t, n) => {
					const s = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				I = Object(s.a)(E, j, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				C = Object(s.a)(g, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => j(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), (e, t) => {
					const n = new Set(e),
						s = t.filter(e => !n.has(e));
					if (s.length) return s[0]
				}),
				S = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t, E, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => j(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), f, (e, t, n, s) => {
					if (!n.length) return;
					const r = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = r.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				P = Object(r.a)(Object(s.a)(S, E, (e, t) => e ? t[e] : void 0)),
				T = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, S, b, i.h, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => j(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), (e, t, n, s, r) => !e || n.includes(e) || s.includes(e) ? t || r[0] : e),
				N = Object(s.a)(h, g, C, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				k = Object(s.a)(h, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				w = Object(r.a)(Object(s.a)(T, E, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)(Object(s.a)(N, E, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)(Object(s.a)(k, E, (e, t) => e ? t[e] : void 0)),
				D = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)(T, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				R = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t ? x(e, t) : void 0, e => !e || e.chat_disabled);

			function B(e, t) {
				const n = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const F = Object(s.a)(T, f, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const M = Object(s.a)(T, E, m.b, (e, t, n) => {
					if (n) return U.INTRO;
					const s = e && t[e];
					if (!s) return U.UNAVAILABLE;
					const r = s.stream.state;
					return r === o.a.IS_LIVE || r === o.a.DISCONNECTED ? U.LIVE : r === o.a.ENDED && s.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				H = Object(s.a)(w, M, m.b, c.b, c.o, (e, t, n, s, r) => n ? s : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				W = Object(s.a)(w, M, F, (e, t, n) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && n < e.broadcast_time ? n : 0 : 0),
				G = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(s.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "F", (function() {
				return j
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "H", (function() {
				return R
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "A", (function() {
				return F
			})), n.d(t, "B", (function() {
				return U
			})), n.d(t, "D", (function() {
				return M
			})), n.d(t, "r", (function() {
				return H
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "v", (function() {
				return G
			})), n.d(t, "I", (function() {
				return K
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "i", (function() {
				return V
			})), n.d(t, "E", (function() {
				return Z
			})), n.d(t, "z", (function() {
				return Q
			})), n.d(t, "G", (function() {
				return z
			})), n.d(t, "p", (function() {
				return J
			})), n.d(t, "J", (function() {
				return Y
			})), n.d(t, "C", (function() {
				return X
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeCommentPermalink/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				c = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/lib/initializeClient/installReducer.ts"),
				b = n("./src/reddit/reducers/features/comments/index.ts"),
				f = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(p.a)({
				features: {
					comments: b.a
				},
				pages: {
					comments: f.a
				}
			});
			const h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				g = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				y = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				v = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				_ = (e, t) => {
					const n = v(e, t);
					if (n) return Object(m.a)(e, {
						commentId: n
					})
				},
				E = [],
				x = Object(i.a)((e, t) => {
					const n = _(e, t),
						s = n && n.id;
					if (!s) return E;
					const {
						commentsPageKey: r
					} = t, a = e.pages.comments.keyToCommentThreadLinkSets[r], o = [];
					let i = {
						id: s,
						type: c.a.Comment
					};
					do {
						o.push(i), i = a[i.id].next
					} while (i);
					return o
				}),
				O = (e, t) => v(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				j = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				I = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: s
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[s];
					return r ? n ? r[n.id] : t ? r[t] : null : null
				},
				C = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				S = (e, t) => {
					const n = t.commentsPageKey ? I(e, t) : null;
					return n ? n.depth : null
				},
				P = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: s
					} = t;
					switch (s) {
						case c.a.Comment:
							return e.features.comments.models[n];
						case c.a.MoreComments:
							return e.moreComments.models[n];
						case c.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				T = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== a.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				N = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				k = e => e.moreComments.models,
				w = e => e.features.comments.models,
				A = (e, {
					commentId: t
				}) => {
					const n = Object(m.a)(e, {
						commentId: t
					});
					return n ? Object(o.a)(Object(l.H)(e, n), t) : ""
				},
				L = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				R = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				B = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(n).find(e => n[e]),
						r = Object(m.a)(e, {
							commentId: s
						}),
						a = r && S(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof a) return {
						...r,
						depth: a
					}
				},
				F = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				U = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				M = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = r()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				H = (e, {
					id: t
				}) => e.continueThreads.models[t],
				W = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				G = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				K = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				q = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				V = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				Z = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				z = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				J = e => e.features.comments.visitHighlightFilter,
				Y = (e, t) => {
					const n = Object(m.a)(e, t);
					if (n) return Object(u.Y)(e, n)
				},
				X = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/meta.ts");
			const o = e => Object(r.c)(e, {
				experimentEligibilitySelector: e => !Object(a.d)(e) && "US" === Object(a.b)(e),
				experimentName: s.Jc
			}) === s.Sc.Enabled
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = e => Object(a.G)(e) || !(s.id.Holdout === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.fd
			}))
		},
		"./src/reddit/selectors/experiments/uiSimplification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/utils.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = ["AU", "CA", "GB", "US"],
				i = new Set([s.Rb.AllItems, s.Rb.TrendingSearch]),
				c = e => {
					const t = Object(a.c)(e, {
						experimentEligibilitySelector: Object(r.d)(Object(r.b)(...o)),
						experimentName: s.Sb
					});
					return i.has(t)
				},
				d = e => s.Rb.AllItems === Object(a.c)(e, {
					experimentEligibilitySelector: Object(r.d)(Object(r.b)(...o)),
					experimentName: s.Sb
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.58c50b274c2467daaf91.js.map