// https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor.855da3bdaf39132db33f.js
// Retrieved at 6/1/2021, 12:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"], {
		"./src/graphql/operations/SubredditTypeaheadSearch.json": function(t) {
			t.exports = JSON.parse('{"id":"20edc5ee12df"}')
		},
		"./src/lib/forEachGroup/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			const o = t => t;

			function r(t, e, n) {
				const [r, s] = Array.isArray(t) ? [t.length, e => t[e]] : [t.size, e => t.get(e)], {
					keyFn: i = o
				} = e || {};
				let {
					start: c = 0,
					end: a = r
				} = e || {};
				if ((c = c < 0 ? 0 : c) >= (a = a > r ? r : a)) return;
				let l = s(c),
					d = i(l, c),
					u = c;
				for (let o = c + 1; o < a; o++) {
					const t = s(o),
						e = i(t, o);
					if (e !== d) {
						if (!1 === n(l, d, u, o)) return;
						d = e, u = o, l = t
					}
				}
				n(l, d, u, a)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return h
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "g", (function() {
				return g
			})), n.d(e, "j", (function() {
				return f
			})), n.d(e, "a", (function() {
				return b
			})), n.d(e, "b", (function() {
				return y
			})), n.d(e, "c", (function() {
				return S
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "h", (function() {
				return O
			})), n.d(e, "i", (function() {
				return k
			}));
			var o = n("./node_modules/linkify-it/index.js"),
				r = n.n(o),
				s = n("./node_modules/tlds/index.js"),
				i = n.n(s),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./node_modules/lodash/values.js"),
				l = n.n(a);
			const d = t => l()(c.b).includes(t.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = t => ((t, e) => (e.forEach(e => t.add(e, null)), t))(t, u),
				h = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				m = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.mention.prefix, c.g.mention.config),
				g = p(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config),
				f = p(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config),
				b = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config).add(c.g.mention.prefix, c.g.mention.config),
				y = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subredditFullUrl.config).add(c.g.subredditFull.prefix, c.g.subredditFullUrl.config),
				E = h.normalize;
			h.normalize = t => {
				E.call(h, t), !t.schema && t.url.startsWith("http:") && (t.url = `https:${t.url.slice(5)}`)
			};
			const S = (t, e) => {
					return (b.match(t) || []).filter(t => {
						const n = d(t.text);
						return !n || n && e
					})
				},
				C = t => {
					return [...f.match(t) || [], ...m.match(t) || []].map(t => !d(t.text) && t.text.replace(c.a, "")).filter(t => t)
				},
				O = (t, e) => {
					const n = t.match(e);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === e.length) return n[0]
				},
				k = t => {
					const e = h.match(t);
					if (e && 1 === e.length && 0 === e[0].index) {
						const n = e[0];
						return n.lastIndex === t.length ? n : ((t, e) => {
							const n = t.substring(e.lastIndex);
							if (/.*\/\/.*\/.*/.test(e.url) && /^(\?|\!)+$/.test(n)) return e.lastIndex += n.length, e.url += n, e
						})(t, n)
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return k
			})), n.d(e, "g", (function() {
				return x
			})), n.d(e, "b", (function() {
				return T
			})), n.d(e, "d", (function() {
				return j
			})), n.d(e, "e", (function() {
				return v
			})), n.d(e, "c", (function() {
				return R
			})), n.d(e, "f", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				r = n.n(o),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				c = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				a = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				l = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function p(t, e, n) {
				return Object(u.a)(t, {
					method: "get",
					endpoint: `${d.a.metaUrl}/products/${e}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var h = n("./src/reddit/models/Badge/index.ts"),
				m = n("./src/reddit/models/Badge/managementPage.ts"),
				g = n("./src/reddit/models/Product/index.ts"),
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				b = n("./src/reddit/selectors/economics.ts"),
				y = n("./src/reddit/selectors/products.ts"),
				E = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				S = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function C(t) {
				return !!t && "removeBadge" === t.type
			}

			function O(t) {
				if (!C(t)) return t
			}
			const k = () => async (t, e, {
				apiContext: n
			}) => {
				if (!e().user.account) return;
				await t(Object(E.b)({
					includeMemberships: !0
				}));
				const o = e().economics.me.data.specialMemberships || {},
					r = Object.keys(o);
				if (r.length) {
					const e = await Object(c.e)(n(), r);
					e.ok && t(Object(S.g)(e.body))
				}
			}, x = (t, e) => async (n, o, {
				apiContext: r
			}) => {
				const s = o().user.account,
					i = o().economics.subredditPremium[t],
					c = !i || i.status !== f.a.Fetched || e;
				if (s && c) {
					const e = await Object(a.a)(r(), t, s.id);
					n(Object(S.i)(e))
				}
			}, T = t => async (e, n, {
				apiContext: o
			}) => {
				const r = n(),
					i = r.user.account,
					c = Object(b.f)(r, t.subredditId),
					a = Object.keys(c).map(t => c[t]).filter(Boolean);
				if (i && t.badge) {
					let n, r;
					n = t.placement === h.a.First ? c[m.a.Loyalty] : t.placement === h.a.Second ? c[m.a.Achievement] : c[m.a.Cosmetic], e(Object(S.a)({
						...t,
						badge: O(t.badge),
						currentAppliedBadges: a,
						userId: i.id
					})), C(t.badge) && n ? r = await Object(l.a)(o(), t.subredditId, n.id, !1) : C(t.badge) || (r = await Object(l.a)(o(), t.subredditId, t.badge.id)), r && !r.ok && (e(Object(S.a)({
						...t,
						badge: n,
						currentAppliedBadges: a,
						userId: i.id
					})), Object(s.a)(e, r.error))
				}
			}, j = (t, e) => async (n, o, {
				apiContext: r
			}) => {
				await n(x(t, !0));
				const s = o().economics.subredditPremium[t];
				if (s && s.status === f.a.Fetched) {
					const o = s.data.userOwnedBadges.find(t => t.type === e.id);
					o && (n(T({
						badge: o,
						subredditId: t,
						placement: o.placement
					})), n(Object(S.d)(m.c.MyBadges)))
				}
			}, v = t => async (e, n, {
				apiContext: o
			}) => {
				const c = n().user.account,
					a = !n().economics.emotes[t],
					l = !n().economics.gifs[t];
				if (c && (a || l)) {
					const [n, a] = await Promise.all([Object(i.b)(o(), t), p(o(), t, c.id)]);
					if (!a.ok) return void Object(s.a)(e, a.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(a.body, t => {
						t.type === g.a.EmotesPack ? l.emotes.push(t) : t.type === g.a.Giphy && l.giphy.push(t)
					}), e(Object(S.e)({
						subredditId: t,
						products: l
					}))
				}
			}, R = (t, e, n) => async (o, r, {
				apiContext: s
			}) => {
				if (await o(x(t, !0)), n && e) {
					const n = r(),
						s = Object(b.f)(n, t),
						i = Object(y.a)(n, e);
					if (!s[Object(m.d)(i.placement)] && i) {
						const e = Object(b.l)(n, {
							subredditId: t,
							badge: i
						});
						e && await o(T({
							badge: e,
							subredditId: t
						}))
					}
					o(Object(S.c)({
						subredditId: t,
						initialView: m.c.MyBadges
					}))
				}
			}, w = t => async (e, n, {
				apiContext: o
			}) => {
				const {
					wallet: r
				} = await Object(c.c)(o(), t);
				e(Object(S.f)({
					wallet: r
				})), await e(x(t.subredditId, !0))
			}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return A
			})), n.d(e, "b", (function() {
				return M
			})), n.d(e, "a", (function() {
				return L
			})), n.d(e, "c", (function() {
				return N
			})), n.d(e, "e", (function() {
				return F
			})), n.d(e, "d", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/v4.js"),
				s = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/upload.ts"),
				u = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts");
			var g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/imagePreview/index.ts"),
				b = n("./src/reddit/helpers/media/index.ts"),
				y = n("./src/reddit/models/Upload/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./src/telemetry/index.ts");
			const C = t => ({
				...E.defaults(t),
				screen: E.screen(t),
				profile: E.profile(t),
				subreddit: E.subreddit(t)
			});
			var O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				k = n("./src/reddit/models/Gold/Powerups/index.ts"),
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/gold/powerups/index.ts"),
				v = n("./src/reddit/selectors/postCreations.ts"),
				R = n("./src/reddit/actions/postCreation/constants.ts"),
				w = n("./src/reddit/actions/postCreation/general.ts");
			const _ = Object(a.a)(R.u),
				B = Object(a.a)(R.v),
				I = Object(a.a)(R.t),
				A = t => async (e, n) => {
					e(_());
					const o = t.map(({
						url: t,
						uploadKey: n
					}) => {
						const o = Object(b.a)(Object(b.c)(t), "poster.png");
						return e(D(o, n))
					});
					await Promise.all(o);
					const r = n().uploads,
						s = t.map(({
							uploadKey: t
						}) => r[t]).find(t => t.status !== y.a.SUCCESS);
					e(s ? I(s.error) : B())
				}, K = (t, e) => ({
					error: e ? {
						type: t,
						fields: [{
							field: "",
							msg: e
						}]
					} : {
						type: t
					}
				});
			const M = "RTE",
				L = "GALLERY",
				D = (t, e, n, r) => async (s, c, {
					apiContext: a
				}) => {
					const l = Object(v.h)(c()),
						u = Date.now();
					let x = null,
						T = !1,
						R = !1,
						w = !1;
					const _ = t => {
						if (!w && n && T) {
							w = !0;
							const o = c(),
								r = Date.now() - u,
								s = Object(g.c)(g.a.PostComposer);
							R ? (async ({
								state: t,
								uploadKey: e,
								assetId: n,
								isCanceled: o,
								fileSource: r,
								uploadDuration: s,
								correlationId: i
							}) => {
								const c = t.uploads[e],
									a = o || c.status === y.a.CANCELED,
									{
										file: l,
										url: d,
										metadata: u,
										error: p
									} = c,
									h = u.mimetype || l.type,
									m = h.startsWith("video/"),
									g = c.status === y.a.SUCCESS;
								let f = "";
								p ? f = JSON.stringify(p) : a && (f = "canceled");
								const b = {
									width: u.width,
									height: u.height,
									duration: u.videoDuration && Math.round(1e3 * u.videoDuration)
								};
								Object(S.a)({
									source: m ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: i,
									noun: m ? "video" : "image",
									...C(t),
									actionInfo: {
										...E.actionInfo(t),
										success: g,
										...f ? {
											reason: f
										} : {}
									},
									media: {
										mimetype: h,
										uploadDuration: s,
										source: r,
										fileName: l.name,
										size: l.size,
										type: m ? "video" : "image",
										...n ? {
											id: n
										} : {},
										...d ? {
											url: d
										} : {},
										...b
									}
								})
							})({
								state: o,
								uploadKey: e,
								assetId: x,
								isCanceled: t,
								fileSource: n,
								uploadDuration: r,
								correlationId: s
							}) : O.t(o, e)
						}
					};
					return await s(Object(d.l)(t, e, async u => {
						T = !0, Object(d.k)(u.id, () => {
							_(!0)
						});
						const {
							error: g,
							metadata: y
						} = await async function(t, e, n) {
							const r = n && n.allowedPostTypes,
								s = n && n.name,
								c = await Object(b.g)(e) || e.type,
								a = Object(b.b)(e) || void 0;
							if (!a) return K("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: a,
								mimetype: c
							};
							if (!c || !Object(b.i)(c)) return {
								error: {
									type: i.O
								}
							};
							if (c.startsWith("image/")) {
								if (r && !r.images) {
									const t = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", s)], {
										hk: "3C2E7Q"
									});
									return K(i.O, t)
								}
								if ("image/gif" === c) {
									if (e.size > i.U) return K(i.H)
								} else if (e.size > i.W) return K(i.M);
								const t = await Object(f.a)(a);
								l.width = t.width, l.height = t.height
							} else if (c.startsWith("video/")) {
								const c = !(null == n || !n.id) && Object(j.o)(t, {
										subredditId: n.id,
										benefit: k.a.HdVideo
									}),
									u = c ? 2 * i.ab : i.ab;
								if (e.size > u) return K(i.ec);
								let p;
								try {
									p = await Object(b.h)(a, !0)
								} catch (d) {
									return K(i.O)
								}
								if (r) {
									const {
										videos: t,
										images: e
									} = r;
									if (e && !t && p.duration > i.bb) {
										const t = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", s)], {
											hk: "46ULiz"
										});
										return K(i.O, t)
									}
									if (!e && !t) {
										const t = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", s)], {
											hk: "4uTUZb"
										});
										return K(i.O, t)
									}
								}
								const h = c ? 2 * i.Z : i.Z;
								if (p.duration > h) {
									const t = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (h / 60).toString())], {
										hk: "20nB6Q"
									});
									return K(i.O, t)
								}
								if (p.duration < i.hb) {
									const t = o.fbt._("Video is too short. Minimum video length is {duration} seconds.", [o.fbt._param("duration", i.hb.toString())], {
										hk: "49PSW8"
									});
									return K(i.O, t)
								}
								if (p.height < i.ib || p.width < i.jb) {
									const t = o.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [o.fbt._param("min_video_width", i.jb.toString()), o.fbt._param("min_video_height", i.ib.toString())], {
										hk: "2HSUGl"
									});
									return K(i.O, t)
								}
								if (e.size / p.duration < i.gb) {
									const t = o.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [o.fbt._param("min_bitrate", (i.gb / i.P).toString())], {
										hk: "1ehgDE"
									});
									return K(i.O, t)
								}
								l.height = p.height, l.width = p.width, l.videoDuration = p.duration, l.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(c(), t, l);
						if (g || !y) return {
							error: g
						};
						s(Object(d.m)({
							key: e,
							metadata: {
								fileSource: n,
								...y
							}
						})), R = !0, r && r();
						const E = t.name,
							S = await (async (t, e, n) => Object(p.a)(Object(h.a)(t, [m.a]), {
								endpoint: `${t.apiUrl}/api/media/asset.json`,
								method: i.eb.POST,
								data: {
									filepath: e,
									mimetype: n
								}
							}))(a(), E, y.mimetype);
						return S.ok ? (x = S.body.asset.asset_id, {
							uploadLease: S.body.args
						}) : {
							error: S.error || void 0
						}
					}, !0)), _(!1), c().uploads[e] || null
				}, N = t => async (e, n, {
					apiContext: o
				}) => {
					const r = n().uploads[t];
					r && !Object(y.c)(r) && await e(D(r.file, r.key, r.metadata.fileSource, void 0))
				}, F = (t, e, n) => async (r, i) => {
					const a = t.map((t, o) => new Promise(async o => {
							const i = Object(y.d)(n, s()().slice(-6));
							await r(D(t, i, e, () => o({
								uploadKey: i,
								isValid: !0
							}))), o({
								uploadKey: i,
								isValid: !1
							})
						})),
						d = await Promise.all(a),
						u = d.map(t => t.uploadKey);
					return r(((t, e = 3) => async (n, r) => {
						const {
							uploads: s
						} = r(), i = t.map(t => s[t]).filter(t => t.status === y.a.FAILED && !t.metadata.mimetype).map(t => t.error), a = i.length > e ? e - 1 : i.length, d = i.length - a;
						i.slice(0, a).forEach(t => n(Object(l.f)({
							duration: l.a,
							kind: T.b.Error,
							text: Object(c.a)(t)
						}))), d > 0 && n(Object(l.f)({
							duration: l.a,
							kind: T.b.Error,
							text: o.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [o.fbt._plural(d, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(u)), d.filter(t => t.isValid).map(t => t.uploadKey)
				}, P = (t, e) => async (n, r) => {
					const s = r(),
						i = Object(v.U)(s),
						{
							items: c
						} = i,
						a = !c.length && 1 === t.length,
						p = Object(v.L)(s) && !a;
					let h = !1,
						m = t;
					if (p) {
						if (Object(x.v)(i)) return void n(Object(l.f)({
							kind: T.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						m.some(t => Object(b.l)(t.type)) && n(Object(l.f)({
							kind: T.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), m = m.filter(t => Object(b.k)(t.type));
						const t = Math.max(0, u.b - c.length);
						m.length > t && (n(Object(l.f)({
							kind: T.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), m = m.slice(0, t))
					} else m = m.slice(0, 1), h = !0, n(Object(d.j)(L, !0));
					const g = await n(F(m, e, L));
					if (!g.length) return;
					const f = g.map(t => ({
							uploadKey: t,
							caption: "",
							url: ""
						})),
						y = 0 === c.length;
					n(Object(w.d)({
						...i,
						items: h ? f : [...c, ...f],
						selectedKey: y ? g[0] : g[g.length - 1]
					}))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return h
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/graphql/operations/SubredditTypeaheadSearch.json"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				c = n("./src/reddit/helpers/name/index.ts"),
				a = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				l = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const d = Object(o.a)(l.c),
				u = Object(o.a)(l.b),
				p = Object(o.a)(l.a),
				h = (t, e = !1) => async (n, o, {
					gqlContext: l
				}) => {
					const h = Object(c.g)(t);
					if (!h) return;
					const m = o(),
						g = m.subredditAutocomplete;
					if (g.api.pending[h] || g.models[h]) return;
					if (Object(a.b)(m, {
							substring: h
						})) return;
					n(d({
						key: h
					}));
					const f = await ((t, e) => Object(s.a)(t, {
						...r,
						variables: e
					}))(l(), {
						query: h,
						includeNsfw: e
					});
					if (f.ok) {
						const t = f.body.data.subredditTypeahead.subreddits.edges.map(t => (({
							allowedPostTypes: t,
							id: e,
							isCrosspostDestination: n,
							isNsfw: o,
							name: r,
							styles: s,
							subscribersCount: c
						}) => ({
							allowedPostTypes: Object(i.a)(t),
							communityIcon: s && s.icon || "",
							icon: s && s.legacyIcon && s.legacyIcon.url || "",
							id: e,
							isCrosspostDestination: n,
							isNsfw: o,
							name: r,
							primaryColor: s && s.primaryColor || "",
							subscribers: c
						}))(t.node));
						n(u({
							key: h,
							subreddits: t
						}))
					} else n(p({
						key: h,
						error: f.error
					}))
				}
		},
		"./src/reddit/components/MakeGifToggle/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			e.a = t => s.a.createElement(l.a, {
				className: Object(i.a)(u.a.container, t.disabled ? u.a.mDisabled : null, t.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: t => t.preventDefault(),
				onClick: e => {
					e.stopPropagation(), !t.disabled && t.onClick()
				}
			}, s.a.createElement(l.a, {
				className: u.a.content
			}, s.a.createElement(a.a, {
				className: u.a.toggleSwitch,
				on: t.on
			}), s.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), t.tooltip ? s.a.createElement(c.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: t.tooltip
			}) : null)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return o
			})), n.d(e, "a", (function() {
				return r
			}));
			const o = 20,
				r = 180
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(t, e, n) {
			t.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				c = n.n(i);
			e.a = ({
				className: t,
				innerBarClassName: e,
				percent: n
			}) => r.a.createElement("div", {
				className: Object(s.a)(c.a.outerBar, t)
			}, r.a.createElement("div", {
				className: Object(s.a)(c.a.innerBar, e),
				style: {
					width: `${n.toFixed(2)}%`
				}
			}))
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(t, e, n) {
			t.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(t, e, n) {
			t.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return h
			})), n.d(e, "c", (function() {
				return m
			})), n.d(e, "a", (function() {
				return g
			}));
			var o = n("./node_modules/lodash/includes.js"),
				r = n.n(o);
			var s = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const c = t => t.className.indexOf("public-DraftEditor-content") >= 0,
				a = t => !!t.parentElement && !!t.parentElement.parentElement && c(t.parentElement.parentElement),
				l = t => !(!t.dataset.block || !t.dataset.offsetKey),
				d = t => {
					const {
						offsetKey: e
					} = t.dataset;
					return e ? (t => t.split("-")[0])(e) : ""
				},
				u = (t, e) => {
					return ((t, e) => {
						const n = function(t, e) {
							let n = 0,
								o = t.length - 1;
							for (; n <= o;) {
								const r = o + n >> 1,
									s = e(t[r]);
								if (s > 0) n = r + 1;
								else {
									if (!(s < 0)) return r;
									o = r - 1
								}
							}
							return n
						}(t, t => {
							const n = t.getBoundingClientRect();
							return e < n.top ? -1 : e > n.bottom ? 1 : 0
						});
						return t[Math.min(n, t.length - 1)]
					})(t.querySelectorAll("[data-block][data-offset-key]"), e)
				},
				p = (t, e) => {
					const n = Object(s.b)(t, l, c);
					return n || u(t, e)
				},
				h = (t, e) => {
					const n = (t => {
						const e = t.target;
						if (!(e instanceof HTMLElement)) return;
						const n = Object(s.b)(e, c);
						if (!n) return;
						const o = p(e, t.clientY);
						if (!o) return;
						const r = Object(s.b)(o, a);
						return r ? {
							editorContentElement: n,
							topLevelElement: r,
							blockElement: o
						} : void 0
					})(e);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: r
					} = n, l = d(r), u = t.getCurrentContent(), h = u.getBlockForKey(l);
					if (!h) return;
					const {
						upperElement: m,
						lowerElement: g
					} = ((t, e, n, o) => {
						let r = n,
							s = n;
						if (t.getType() === i.b.UNSTYLED) r = s = e;
						else if (Object(i.o)(t.getType())) {
							r = s = e;
							const c = o.getBlockAfter(t.getKey());
							c && Object(i.u)(c.getType()) && (s = n.nextElementSibling)
						} else Object(i.u)(t.getType()) && (r = n.previousElementSibling, s = e);
						return {
							upperElement: r,
							lowerElement: s
						}
					})(h, r, o, u), {
						clientY: f,
						isBefore: b
					} = ((t, e, n) => {
						const o = t.getBoundingClientRect(),
							r = e.getBoundingClientRect();
						let i, a;
						if (n > (o.top + r.bottom) / 2) {
							i = r.bottom, a = !1;
							const t = Object(s.b)(e, t => !!t.nextElementSibling, c);
							if (t) {
								i = (t.nextElementSibling.getBoundingClientRect().top + r.bottom) / 2
							}
						} else {
							i = o.top, a = !0;
							const e = Object(s.b)(t, t => !!t.previousElementSibling, c);
							if (e) {
								i = (e.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: a
						}
					})(m, g, e.clientY);
					let y = l;
					if (h.getType() !== i.b.UNSTYLED) {
						const t = p(b ? m : g, f);
						t && (y = d(t))
					}
					return {
						clientY: f,
						isBefore: b,
						blockKey: y
					}
				},
				m = t => t.items ? !!Array.from(t.items).find(t => "file" === t.kind) : !(!t.files || !t.files.length) || r()(t.types, "Files"),
				g = t => t.items ? Array.from(t.items).map(t => "file" === t.kind ? t.getAsFile() : null).filter(Boolean) : t.files ? Array.from(t.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				a = n.n(c);

			function l() {
				return (l = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			e.a = i.a.wrapped(t => {
				const {
					children: e,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: c,
					...d
				} = t;
				return r.a.createElement("div", l({}, d, {
					className: Object(s.a)(a.a.container, n)
				}), i ? r.a.createElement("div", {
					className: Object(s.a)(a.a.tooltip, c, o ? a.a.below : a.a.above)
				}, i) : null, e)
			}, "HoverTooltip", a.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(t, e, n) {
			t.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(t, e, n) {
			t.exports = {
				EditForm: "_1iFkUjPC4J8jzWrDthDpcv",
				editForm: "_1iFkUjPC4J8jzWrDthDpcv",
				LinkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				linkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				Input: "_2rXi0UvEKRcI3WdI52LAx1",
				input: "_2rXi0UvEKRcI3WdI52LAx1",
				Label: "_2olni9Ucr8-t8W62nTkY_",
				label: "_2olni9Ucr8-t8W62nTkY_",
				HintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				hintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				InvalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				invalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				SubmitButton: "_8a_rf-Al8VNnUQ42WlvF",
				submitButton: "_8a_rf-Al8VNnUQ42WlvF"
			}
		},
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(t, e, n) {
			t.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(t, e, n) {
			t.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(t, e, n) {
			t.exports = {
				H1: "_15ThA3NFuzpQTnPu0I3QKj",
				h1: "_15ThA3NFuzpQTnPu0I3QKj",
				H2: "_3R5icAd6cRzwpq-yhvQUoW",
				h2: "_3R5icAd6cRzwpq-yhvQUoW",
				H3: "_3UxnA7bFPnKoS0rKMO1UYe",
				h3: "_3UxnA7bFPnKoS0rKMO1UYe",
				H4: "_10CFPbxVR0HQhyRBkeExmO",
				h4: "_10CFPbxVR0HQhyRBkeExmO",
				H5: "_3bidJE2WceaRjyBA8LLfp3",
				h5: "_3bidJE2WceaRjyBA8LLfp3",
				H6: "_27N6aQ0-d-ntRM1JkDwGg7",
				h6: "_27N6aQ0-d-ntRM1JkDwGg7"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(t, e, n) {
			t.exports = {
				button: "_2lAJkFZXhr5kbH7YF-sYFf",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				d = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				u = n.n(d);

			function p() {
				return (p = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const h = t => {
				t.preventDefault(), t.stopPropagation()
			};
			e.a = i.a.wrapped(t => {
				const {
					active: e,
					className: n,
					disabledTooltip: o,
					enabled: i = !0,
					tooltip: d,
					Icon: m,
					iconName: g,
					onClick: f,
					tooltipBelow: b,
					children: y
				} = t, E = {
					"aria-label": d,
					"aria-selected": e,
					className: Object(s.a)(u.a.button, n, {
						[u.a.active]: !!e,
						[u.a.enabled]: i
					}),
					onMouseDown: h,
					onClick: t => {
						h(t), i && f && f(t)
					},
					role: "button",
					tabIndex: -1
				};
				return r.a.createElement(c.q, p({}, E, {
					size: c.c.S,
					priority: c.b.Plain,
					isSquare: !0,
					Icon: g ? Object(a.b)(g) : m
				}), r.a.createElement(l.a, {
					text: (i ? d : o) || "",
					tooltipContentClass: t.tooltipContentClass,
					renderBelow: b
				}), y)
			}, "FormatterButton", u.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(t, e, n) {
			t.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/selectors/editorContent.ts"),
				p = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				h = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				m = n.n(h);
			const g = a.a.wrapped(d.a, "LoadingIcon", m.a),
				f = Object(c.c)({
					isConverting: (t, e) => Object(u.a)(t, e.draftKey)
				}),
				b = Object(i.b)(f);
			e.a = s.a.memo(b(t => s.a.createElement(l.q, {
				priority: l.b.Plain,
				size: l.c.XS,
				text: s.a.createElement(s.a.Fragment, null, t.isConverting && s.a.createElement(g, {
					sizePx: 12
				}), o.fbt._("Markdown Mode", null, {
					hk: "1DXoXV"
				})),
				"aria-label": o.fbt._("Switch to markdown", null, {
					hk: "OxsM0"
				}),
				tabIndex: -1,
				className: t.className,
				onClick: t.onClick
			}, !t.shouldHideTooltip && s.a.createElement(p.a, {
				text: o.fbt._("Switch to markdown", null, {
					hk: "4mWw83"
				})
			}))))
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(t, e, n) {
			t.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(t, e, n) {
			t.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return p
			})), n.d(e, "b", (function() {
				return h
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "j", (function() {
				return g
			})), n.d(e, "g", (function() {
				return f
			})), n.d(e, "i", (function() {
				return b
			})), n.d(e, "k", (function() {
				return y
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "l", (function() {
				return S
			})), n.d(e, "h", (function() {
				return C
			})), n.d(e, "a", (function() {
				return O
			})), n.d(e, "c", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/constants/icons.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				l = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const p = (t, e = 0) => n => {
					const o = (t => c.a.wrapped(t, "Icon", d.a))(t);
					return s.a.createElement(o, u({}, n, {
						style: {
							padding: e
						}
					}))
				},
				h = {
					type: "style",
					name: "bold",
					iconName: i.a.bold,
					style: a.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				m = {
					type: "style",
					name: "italics",
					iconName: i.a.italic,
					style: a.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				g = {
					type: "style",
					name: "strikethrough",
					iconName: i.a.strikethrough,
					style: a.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				f = {
					type: "style",
					name: "inline_code",
					iconName: i.a.code_inline,
					style: a.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				b = {
					type: "style",
					name: "spoiler",
					iconName: i.a.spoiler,
					style: a.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				y = {
					type: "style",
					name: "superscript",
					iconName: i.a.superscript,
					style: a.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				E = {
					type: "block",
					name: "heading",
					iconName: i.a.text_size,
					block: a.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				S = {
					type: "block",
					name: "unordered_list",
					iconName: i.a.list_bulleted,
					block: a.i.UNORDERED,
					tooltipTranslation: () => o.fbt._("Bulleted List", null, {
						hk: "21Yx7R"
					})
				},
				C = {
					type: "block",
					name: "ordered_list",
					iconName: i.a.list_numbered,
					block: a.i.ORDERED,
					tooltipTranslation: () => o.fbt._("Numbered List", null, {
						hk: "4BmF1X"
					})
				},
				O = {
					type: "block",
					name: "block_quote",
					iconName: i.a.quote,
					block: a.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				k = {
					type: "block",
					name: "code_block",
					iconName: i.a.code_block,
					block: a.f,
					tooltipTranslation: () => o.fbt._("Code Block", null, {
						hk: "2y19DH"
					})
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				toolbarContent: "_2vR2-7URvDAFSwQjhcvJ7m",
				isSticky: "r7zyyy152ZTdiHhea0cIj",
				tooltip: "dMXy0l6Saub8-fPDkQvGC",
				SectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				sectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				Spacer: "uoedn0efWwCxoQUIxsJY3",
				spacer: "uoedn0efWwCxoQUIxsJY3"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return w
			})), n.d(e, "g", (function() {
				return I
			})), n.d(e, "f", (function() {
				return A
			})), n.d(e, "h", (function() {
				return K
			})), n.d(e, "e", (function() {
				return M
			})), n.d(e, "a", (function() {
				return L
			})), n.d(e, "d", (function() {
				return D
			})), n.d(e, "b", (function() {
				return N
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/icons.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts"),
				u = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				p = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				h = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				m = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				g = n("./src/reddit/components/RichTextEditor/table/helpers.ts");
			var f = (t, e, n) => {
					if (Object(p.v)(o.RichUtils.getCurrentBlockType(t))) return t;
					const r = t.getCurrentContent(),
						s = t.getSelection().getEndKey(),
						i = Object(g.l)(e, n),
						c = Object(m.f)(r, s, i, m.a.after, !0),
						a = o.EditorState.push(t, c, h.e);
					return o.EditorState.forceSelection(a, o.SelectionState.createEmpty(i[0].getKey()))
				},
				b = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				y = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				S = n("./src/lib/constants/index.ts"),
				C = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				O = n.n(C);
			const k = l.a.input("HiddenInput", O.a);
			class x extends s.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = t => {
						t.stopPropagation();
						const e = this.hiddenInputEl;
						e.files && e.files.length && (this.props.onFilesInput(Array.from(e.files)), e.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = t => t.stopPropagation()
				}
				render() {
					const {
						controlsState: t,
						destSubreddit: e,
						type: n
					} = this.props, o = "image" === n, s = t.blocks[p.a];
					let c = !0;
					if (e && e.allowedPostTypes) {
						const {
							images: t,
							videos: n
						} = e.allowedPostTypes;
						c = o ? t : n
					}
					return i.a.createElement(b.a, {
						iconName: o ? a.a.image_post : a.a.video_post,
						active: s.isActive,
						enabled: s.isEnabled && c,
						tooltip: o ? r.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : r.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick
					}, i.a.createElement(k, {
						multiple: !0,
						innerRef: t => this.hiddenInputEl = t,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(o ? S.a : S.b).join()
					}))
				}
			}
			var T = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				j = n.n(T);

			function v() {
				return (v = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const R = t => i.a.createElement(b.a, v({}, t, {
					tooltipContentClass: j.a.tooltip
				})),
				w = l.a.div("SectionSpacer", j.a),
				_ = l.a.div("Spacer", j.a),
				B = (t, e, n, r, s) => {
					const {
						name: c,
						iconName: a,
						tooltipTranslation: l
					} = t, u = l();
					if ("style" === t.type) {
						const {
							style: o
						} = t;
						return i.a.createElement(R, {
							iconName: a,
							active: e.styles[o].isActive,
							enabled: e.styles[o].isEnabled,
							key: c,
							tooltip: u,
							onClick: () => {
								const t = Object(d.c)(o, n);
								r(t), s(c, ((t, e) => t.getCurrentInlineStyle().contains(e))(t, o))
							}
						})
					} {
						const {
							block: l
						} = t;
						return i.a.createElement(R, {
							iconName: a,
							active: e.blocks[l].isActive,
							enabled: e.blocks[l].isEnabled,
							key: c,
							tooltip: u,
							onClick: () => {
								const t = Object(d.i)(l, n);
								r(t), s(c, ((t, e) => o.RichUtils.getCurrentBlockType(t) === e)(t, l))
							}
						})
					}
				},
				I = (t, e, n, o, r) => t.map(t => B(t, e, n, o, r)),
				A = [y.b, y.e],
				K = [y.j, y.g, y.k, y.i],
				M = [y.d, y.l, y.h, y.a, y.c],
				L = t => i.a.createElement(R, {
					iconName: a.a.link_post,
					active: t.controlsState.link.isActive,
					enabled: t.controlsState.link.isEnabled,
					tooltip: r.fbt._("Link", null, {
						hk: "e4PGW"
					}),
					onClick: () => {
						t.onLinkButtonClick(), t.trackOnClick("link", !0)
					}
				}),
				D = t => i.a.createElement(R, {
					iconName: a.a.table,
					active: t.controlsState.blocks[p.l].isActive,
					enabled: t.controlsState.blocks[p.l].isEnabled,
					tooltip: r.fbt._("Table", null, {
						hk: "3cHfLT"
					}),
					onClick: () => {
						t.onChange(f(t.editorState, 3, 2)), t.trackOnClick("table", !0)
					}
				}),
				N = t => {
					const {
						className: e,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: r,
						isOverlay: s,
						onChange: a,
						onFilesSelect: l,
						readOnly: d,
						trackOnClick: p,
						onLinkButtonClick: h,
						onMarkdownButtonClick: m
					} = t, g = Object(u.a)(r);
					return d && Object(u.b)(g), i.a.createElement("div", {
						className: Object(c.a)(j.a.toolbarContent, e, {
							[j.a.isSticky]: !s
						})
					}, I(A, g, r, a, p), i.a.createElement(L, {
						controlsState: g,
						trackOnClick: p,
						onLinkButtonClick: h
					}), I(K, g, r, a, p), i.a.createElement(w, null), I(M, g, r, a, p), i.a.createElement(w, null), i.a.createElement(D, {
						controlsState: g,
						editorState: r,
						trackOnClick: p,
						onChange: a
					}), n && i.a.createElement(x, {
						destSubreddit: o,
						controlsState: g,
						onClick: () => p("image_upload"),
						onFilesInput: l,
						type: "image"
					}), n && i.a.createElement(x, {
						destSubreddit: o,
						controlsState: g,
						onClick: () => p("video_upload"),
						onFilesInput: l,
						type: "video"
					}), i.a.createElement(_, null), i.a.createElement(E.a, {
						onClick: m
					}))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r() {
				const t = window.getSelection();
				if (!t.rangeCount) return null;
				const e = Object(o.getVisibleSelectionRect)(window);
				return e || (!e && t.focusNode && t.focusNode === t.anchorNode ? t.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return h
			})), n.d(e, "b", (function() {
				return g
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				c = n("./src/reddit/helpers/dom/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = n.n(a);
			const d = 8,
				u = 16,
				p = 15 + u / 2;
			var h;
			! function(t) {
				t[t.None = 0] = "None", t[t.Above = 1] = "Above", t[t.Below = 2] = "Below"
			}(h || (h = {}));
			const m = ({
				isBelow: t = !1,
				style: e
			}) => r.a.createElement("div", {
				className: Object(s.a)(l.a.triangle, {
					[l.a.triangleBelow]: t
				}),
				style: e
			}, r.a.createElement("div", {
				className: l.a.triangleBack
			}), r.a.createElement("div", {
				className: l.a.triangleFront
			}));
			class g extends o.Component {
				constructor(t) {
					super(t), this.containerRef = null, this.updateContainerRef = t => this.containerRef = t, this.setTargetPosition = t => {
						t ? this.updatePositioning(t) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(t) {
					if (!this.containerRef) return;
					const e = this.containerRef.getBoundingClientRect(),
						n = Math.round(e.width),
						o = Math.round(e.height),
						r = this.state.positioning;
					if (!t) {
						if (!r) return;
						if (r.tooltipWidth === n && r.tooltipHeight === o) return
					}
					const s = t ? t.bottom : r.target.bottom,
						i = t ? t.top : r.target.top,
						a = t ? t.left : r.target.left,
						l = Object(c.e)(this.containerRef);
					let d, u, p;
					if (l) {
						const t = l.getBoundingClientRect();
						d = t.bottom - (s || 0), u = a - t.left + l.scrollLeft, p = i - t.top + l.scrollTop
					} else {
						const t = document.documentElement,
							e = window.pageYOffset || t.scrollTop;
						u = a + (window.pageXOffset || t.scrollLeft), p = i + e
					}
					const h = {
						target: {
							top: i,
							left: a
						},
						tooltipWidth: n,
						tooltipHeight: o,
						tooltip: {
							top: p,
							left: u,
							bottom: d
						}
					};
					this.adjustPositionForTriangle(h, l), this.setState({
						positioning: h
					})
				}
				adjustPositionForTriangle(t, e) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = e ? e.offsetWidth : document.documentElement.offsetWidth,
						r = o ? Math.max(t.tooltip.left + t.tooltipWidth - o, 0) : 0;
					t.tooltip.left -= r + p;
					const s = r + p - u / 2;
					let i;
					n === h.Above ? (t.tooltip.top += d, i = -d) : (t.tooltip.top -= t.tooltipHeight + d, i = t.tooltipHeight), t.triangle = {
						top: i,
						left: s
					}
				}
				componentDidUpdate(t, e) {
					t.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: t,
						dropdown: e,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, c = o && void 0 !== o.triangle && r.a.createElement(m, {
						isBelow: n === h.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let a = r.a.createElement("div", {
						className: Object(s.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: e
						}),
						style: o ? {
							left: o.tooltip.left,
							...t ? {
								bottom: o.tooltip.bottom
							} : {
								top: o.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, o && this.props.children && r.a.createElement(r.a.Fragment, null, c, this.props.children));
					return this.props.usePortal && (a = Object(i.d)(a, this.props.portalContainer || document.body)), a
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(t, e, n) {
			t.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return o
			})), n.d(e, "e", (function() {
				return r
			})), n.d(e, "g", (function() {
				return s
			})), n.d(e, "h", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "f", (function() {
				return l
			})), n.d(e, "a", (function() {
				return d
			}));
			const o = "bold",
				r = "italic",
				s = "underline",
				i = "undo",
				c = "backspace",
				a = "delete",
				l = "split-block",
				d = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "e", (function() {
				return r
			})), n.d(e, "d", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			}));
			const o = "backspace-character",
				r = "insert-fragment",
				s = "insert-characters",
				i = "change-block-data",
				c = "change-block-type",
				a = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "h", (function() {
				return b
			})), n.d(e, "g", (function() {
				return y
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "e", (function() {
				return S
			})), n.d(e, "a", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (t, e) => {
					return e.getSelection().isCollapsed() ? Object(l.a)(t, e) : Object(l.b)(t, e)
				},
				p = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = r.getEndKey(),
						a = o.RichUtils.getCurrentBlockType(e) === t ? d.n : t;
					let u = e,
						p = o.Modifier.setBlockType(n, r, a);
					const h = n.getBlockForKey(s).getLength();
					if (Object(d.r)(a) || Object(d.q)(a)) {
						const t = o.SelectionState.createEmpty(r.getStartKey()).merge({
							focusKey: r.getEndKey(),
							focusOffset: h
						});
						u = Object(l.c)(u), p = ((t, e) => {
							const n = Object.keys(d.k).reduce((t, n) => o.Modifier.removeInlineStyle(t, e, d.k[n]), t);
							return Object(c.h)(n, e)
						})(p, t)
					}
					if (Object(d.q)(a) || Object(d.p)(a)) {
						const t = p.getBlockAfter(s);
						if (!t || t.getType() !== a && t.getType() !== d.n) {
							const t = o.SelectionState.createEmpty(s).merge({
								anchorOffset: h,
								focusOffset: h
							});
							p = o.Modifier.splitBlock(p, t), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: r
					}), o.EditorState.push(u, p, i.c)
				},
				h = (t, e) => {
					const n = o.Modifier.setBlockType(t, e, d.n);
					return o.Modifier.replaceText(n, e, "", Object(r.OrderedSet)([]))
				},
				m = (t, e) => o.EditorState.forceSelection(t, o.SelectionState.createEmpty(e)),
				g = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = a.d(e, n),
						c = s.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(c.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(s, l, d.n), l, "", Object(r.OrderedSet)([])),
						p = o.EditorState.push(t, u, i.d);
					return m(p, c.getKey())
				},
				f = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()),
						i = r.set("depth", Math.max(r.getDepth() - 1, 0)),
						c = e.merge({
							blockMap: e.getBlockMap().merge({
								[r.getKey()]: i
							})
						});
					return o.EditorState.push(t, c, s.a)
				},
				b = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()).getKey(),
						s = o.EditorState.push(t, h(e, n), i.c);
					return m(s, r)
				},
				y = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()),
						s = r.getKey(),
						c = e.getBlockBefore(s).getKey(),
						a = o.SelectionState.createEmpty(s).merge({
							focusOffset: r.getText().length
						}),
						l = o.EditorState.push(t, h(((t, e) => {
							const n = t.getBlockMap().remove(e);
							return t.merge({
								blockMap: n
							})
						})(e, c), a), i.c);
					return m(l, s)
				},
				E = t => {
					const e = a.d(t.getCurrentContent(), t.getSelection());
					return o.EditorState.push(t, e, s.f)
				},
				S = t => {
					const e = a.a(t.getCurrentContent(), t.getSelection(), "\n");
					return o.EditorState.push(t, e, i.d)
				},
				C = t => {
					const e = t.getSelection(),
						n = a.a(t.getCurrentContent(), e, " ");
					return o.EditorState.push(t, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			e.a = Object(o.a)({
				resolved: {},
				chunkName: () => "PowerupsEmotesTooltip",
				isReady(t) {
					const e = this.resolve(t);
					return !1 !== this.resolved[e] && !!n.m[e]
				},
				importAsync: () => n.e("PowerupsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx")),
				requireAsync(t) {
					const e = this.resolve(t);
					return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
				},
				requireSync(t) {
					const e = this.resolve(t);
					return n(e)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(t, e, n) {
			t.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			})), n.d(e, "g", (function() {
				return m
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "h", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "e", (function() {
				return y
			})), n.d(e, "i", (function() {
				return E
			})), n.d(e, "d", (function() {
				return S
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function h(t, e) {
				return t.createEntity(c.a.EMOTE, "IMMUTABLE", e)
			}

			function m(t, e) {
				let n = e.getCurrentContent();
				const r = (n = h(n, t)).getLastCreatedEntityKey();
				n = Object(d.b)(n, e.getSelection(), p, void 0, r);
				const s = o.EditorState.push(e, n, i.d);
				return o.EditorState.forceSelection(s, s.getSelection())
			}

			function g(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function f(t, e) {
				const n = Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() === c.a.EMOTE
				});
				let r;
				for (; r = n.pop();) {
					const e = o.SelectionState.createEmpty(r.blockKey).merge({
						anchorOffset: r.start,
						focusOffset: r.end
					});
					t = o.Modifier.removeRange(t, e, "backward")
				}
				return t
			}

			function b(t) {
				const e = t.getSelection();
				if (!e.isCollapsed()) return null;
				const n = t.getCurrentContent().getBlockForKey(e.getFocusKey()),
					o = n.getText(),
					r = n.getCharacterList();
				let s = e.getFocusOffset() - 1;
				const i = [];
				for (; s >= 0;) {
					const t = o[s],
						e = r.get(s),
						n = e && e.getEntity();
					if (!t.trim().length || n) return null;
					if (":" === t && i.length > 0) break;
					i.unshift(t), s--
				}
				return s >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function y(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && n.getEntity(e).getType() === c.a.EMOTE
				}, e)
			}
			const E = Object(s.a)(t => {
				if (t.getBlockMap().size > 1) return !1;
				const e = t.getFirstBlock();
				let n = 0;
				return y(e, () => n++, t), n <= 3 && n === e.getLength()
			});

			function S(t, e) {
				if (E(t.getCurrentContent()) === E(e.getCurrentContent())) return t;
				const n = t.getCurrentContent(),
					s = n.getFirstBlock();
				return o.EditorState.set(t, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(s), Object(r.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r(t, e, n, r) {
				let s = t.getCharacterList();
				return s = s.withMutations(t => {
					for (let s = e; s < n; s++) t.set(s, o.CharacterMetadata.applyEntity(t.get(s), r))
				}), t.set("characterList", s)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function r(t, e, n, r, s) {
				const i = t.createEntity(n.getType(), n.getMutability(), n.getData()),
					c = t.getLastCreatedEntityKey();
				return [i, Object(o.a)(e, r, s, c)]
			}

			function s(t, e, n = !1) {
				const o = new Map;
				let s = e,
					i = t;
				return e.forEach((t, e) => {
					t && e && t.findEntityRanges(t => !!t.getEntity(), (n, r) => {
						const s = t.getEntityAt(n),
							i = o.get(s) || [];
						i.push({
							start: n,
							end: r,
							blockKey: e
						}), o.set(s, i)
					})
				}), o.forEach((e, o) => {
					const c = t.getEntity(o);
					(n ? e.slice(1) : e).forEach(({
						start: t,
						end: e,
						blockKey: n
					}) => {
						const o = s.get(n),
							[a, l] = r(i, o, c, t, e);
						i = a, s = s.set(n, l)
					})
				}), [i, s]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					COMMENT_LINK: "COMMENT_LINK",
					EMOTE: "EMOTE",
					LINK: "LINK",
					POST_LINK: "POST_LINK",
					SUBREDDIT_LINK: "SUBREDDIT_LINK",
					USER_LINK: "USER_LINK",
					USER_MENTION: "USER_MENTION"
				},
				r = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				s = (t, e) => {
					const n = t && e.getEntity(t);
					return !!n && (t => r.has(t))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function r(t, e, n) {
				const r = [];
				return Object(o.a)(t, e, (t, o) => {
					const s = e.getStartKey() === o ? e.getStartOffset() : 0,
						i = e.getEndKey() === o ? e.getEndOffset() : t.getLength();
					t.findEntityRanges(n, (e, n) => {
						s <= n && i >= e && r.push({
							blockKey: o,
							entityKey: t.getEntityAt(e),
							start: e,
							end: n
						})
					})
				}), r
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r(t, e) {
				const n = e.getFocusKey();
				if (n !== e.getAnchorKey()) return;
				const r = t.getBlockForKey(n),
					s = e.getStartOffset(),
					i = e.getEndOffset(),
					c = r.getEntityAt(i) || (i > 0 ? r.getEntityAt(i - 1) : null);
				if (!c) return;
				let a, l;
				if (r.findEntityRanges(t => t.getEntity() === c, (t, e) => {
						t <= s && i <= e && (a = t, l = e)
					}), "number" != typeof a || "number" != typeof l) return;
				const d = r.getText().slice(a, l);
				return {
					entitySelection: o.SelectionState.createEmpty(n).merge({
						anchorOffset: a,
						focusOffset: l
					}),
					entityKey: c,
					entityText: d
				}
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(t, e, n) {
			t.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return m
			})), n.d(e, "d", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "c", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "h", (function() {
				return S
			})), n.d(e, "g", (function() {
				return C
			})), n.d(e, "e", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./src/lib/linkMatchers/index.ts"),
				s = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				d = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [c.a.SUBREDDIT_LINK, c.a.USER_LINK, c.a.USER_MENTION],
				h = [...p, c.a.LINK];

			function m(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && h.includes(n.getEntity(e).getType())
				}, e)
			}
			const g = t => {
					const e = r.a.match(t);
					if (e && e.length && e[0]) {
						const {
							schema: t,
							url: n
						} = e[0];
						return {
							linkPrefix: t,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				f = Object(i.a)((function(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(e.getBlockForKey(n.getStartKey()).getType())) return;
					const s = n.getFocusKey(),
						i = e.getBlockForKey(s),
						c = n.getFocusOffset(),
						a = i.getText(),
						l = a.lastIndexOf(" ", c - 1) + 1,
						p = a.slice(l, c);
					if (!p) return;
					const h = r.f.match(p);
					if (!h) return;
					const m = h[h.length - 1],
						g = l + m.index,
						f = l + m.lastIndex;
					let b = -1;
					if (i.findEntityRanges(t => !!t.getEntity(), (t, e) => {
							t < c && (b = e)
						}), b >= g) return;
					return i.getCharacterList().slice(g, f).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(s).merge({
							anchorOffset: g,
							focusOffset: f
						}),
						url: m.url
					}
				}));

			function b(t, e, n) {
				const r = t.getSelection();
				let s = t.getCurrentContent();
				const i = (s = s.createEntity(c.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return s = (s = o.Modifier.applyEntity(s, e, i)).merge({
					selectionAfter: r
				}), o.EditorState.push(t, s, "apply-entity")
			}
			const y = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = Object(l.a)(e, t.getSelection());
				if (!n) return;
				const o = e.getEntity(n.entityKey);
				if (o.getType() !== c.a.LINK) return;
				const {
					url: r
				} = o.getData();
				return {
					url: r,
					...n
				}
			}));
			const E = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = t.getSelection(),
					o = Object(l.a)(e, n);
				if (!o) return;
				const r = n.getFocusOffset(),
					s = e.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = g(o.entityText);
				return !p.includes(s.getType()) || !o.entityText.startsWith(i) || r - o.entitySelection.getStartOffset() < i.length ? void 0 : {
					internalName: o.entityText.slice(i.length),
					...o
				}
			}));

			function S(t, e, n, r) {
				let s = "apply-entity",
					i = t.getCurrentContent(),
					a = t;
				const d = Object(l.a)(i, e);
				if (n)
					if (d) {
						const t = i.getEntity(d.entityKey),
							{
								url: e
							} = t.getData();
						e !== n && (i = i.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== r && d.entityText !== r && (i = o.Modifier.replaceText(i, d.entitySelection, r, void 0, d.entityKey), s = "insert-characters")
					} else {
						if (void 0 === r) throw new Error("New link display text must be provided!");
						const t = (i = i.createEntity(c.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, e, r, void 0, t), s = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, e, "")).merge({
					selectionAfter: t.getSelection()
				});
				return i === t.getCurrentContent() ? t : a = o.EditorState.push(a, i, s)
			}

			function C(t, e) {
				const n = E(t);
				if (!n) return t;
				const {
					linkPrefix: r,
					url: i
				} = g(n.entityText), c = `${r===s.d.mention?s.d.profile:r}${e}`, a = n.entitySelection.getStartOffset() + c.length;
				let l = S(t, n.entitySelection, i, c);
				return l = o.EditorState.forceSelection(l, n.entitySelection.merge({
					anchorOffset: a,
					focusOffset: a
				}))
			}

			function O(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() !== c.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "h", (function() {
				return c
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "c", (function() {
				return l
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "d", (function() {
				return h
			})), n.d(e, "g", (function() {
				return m
			}));
			var o, r = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t.before = "before", t.after = "after"
			}(o || (o = {}));
			const c = (t, e) => new r.ContentBlock({
					key: t || Object(r.genKey)(),
					...e ? {
						text: e,
						characterList: Object(s.List)(Object(s.Repeat)(r.CharacterMetadata.create(), e.length))
					} : {}
				}),
				a = t => t.props.children,
				l = t => a(t).props.block,
				d = (t, e, n, s = o.after, a = !1, l = !1) => {
					const d = [];
					let p = -1;
					if (t.getBlockMap().forEach((t, r) => {
							s === o.after && d.push(t), r === e && (d.push(...n), p = d.length - 1), s === o.before && d.push(t)
						}), p >= 0) {
						if (a) {
							const t = d[p + 1];
							t && t.getType() === i.n || d.splice(p + 1, 0, c())
						}
						if (l) {
							const t = p - n.length,
								e = d[t];
							e && e.getType() === i.n || d.splice(t + 1, 0, c())
						}
					}
					return t.merge({
						blockMap: r.BlockMapBuilder.createFromArray(d),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = (t, e = !1, n = !1) => {
					let o = r.SelectionState.createEmpty(t.getKey()).merge({
						hasFocus: n
					});
					return e && (o = o.merge({
						anchorOffset: t.getLength(),
						focusOffset: t.getLength()
					})), o
				},
				p = (t, e) => {
					let n = t.getBlockBefore(e),
						o = t.getBlockMap();
					return o.get(e) ? (o = o.size > 1 ? o.remove(e) : o.set(e, c(e)), n = n || o.first(), t.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : t
				},
				h = (t, e) => e.querySelector(`[data-block][data-offset-key="${t}-0-0"]`),
				m = t => t.getType() === i.n && !t.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return f
			})), n.d(e, "b", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				r = n.n(o),
				s = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				l = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				h = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const m = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = {};
					r()(d.k, t => o[t] = {
						isActive: !1,
						isEnabled: !1
					});
					const i = new Set(Object.keys(o));
					if (i.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const r = e.getBlockForKey(n.getEndKey()),
							s = r.getType();
						Object(d.q)(s) || Object(d.r)(s) || Object(d.t)(s) || i.forEach(t => o[t].isEnabled = !0), t.getCurrentInlineStyle().forEach(t => {
							t && o[t] && (o[t].isActive = !0)
						}), Object(u.i)(r) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(h.e)(e, n).forEach(t => {
							i.delete(t), o[t] && (o[t].isActive = !0, o[t].isEnabled = !0)
						}), Object(p.a)(e, n, (t, r) => {
							if (!i.size) return !1;
							const c = n.getStartKey() === r ? n.getStartOffset() : 0,
								a = n.getEndKey() === r ? n.getEndOffset() : t.getLength(),
								l = t.getType(),
								u = t.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(s.a)(u, {
								start: c,
								end: a
							}, (n, r, s, c) => {
								const a = n.getStyle(),
									l = n.getEntity(),
									d = l ? e.getEntity(l) : null;
								if (i.forEach(e => {
										const n = !o[e].isActive,
											r = Object(h.f)(a, t, d, e, n);
										r && r !== a && (o[e].isEnabled = !0, i.delete(e))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				g = t => {
					const e = {};
					return r()(d.b, n => e[n] = {
						isActive: !1,
						isEnabled: t
					}), e
				},
				f = Object(i.a)(t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = (t => {
							const e = t.getCurrentContent(),
								n = t.getSelection();
							let o = g(!0),
								s = null;
							if (n.isCollapsed()) s = e.getBlockForKey(n.getEndKey()).getType();
							else {
								let t = null;
								Object(p.a)(e, n, (e, n) => {
									const r = e.getType();
									return Object(d.t)(r) ? (o = g(!1), !1) : (null === t && (t = r), t !== r ? (t = null, !1) : void 0)
								}), s = t
							}
							return null !== s && ((Object(d.v)(s) || Object(d.t)(s)) && r()(o, t => {
								t.isEnabled = !1
							}), o[s].isActive = !0), o
						})(t);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[d.a].isEnabled && !Object(l.j)(e)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(c.b)(e, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(a.e)(e, n)
						},
						blocks: o,
						styles: m(t)
					}
				}),
				b = t => {
					r()(t.blocks, t => {
						t.isEnabled = !1
					}), r()(t.styles, t => {
						t.isEnabled = !1
					}), t.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(t, e, n) {
			"use strict";

			function o(t, e, n) {
				const o = e.getStartKey(),
					r = e.getEndKey();
				if (o === r) return void n(t.getBlockForKey(o), o);
				let s = !1;
				t.getBlockMap().forEach((t, e) => {
					if (e === o && (s = !0), !s || !t || !e) return;
					const i = n(t, e);
					return e !== r && i
				})
			}
			n.d(e, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "d", (function() {
				return l
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function s(t, e) {
				const n = e.getStartKey();
				if (n !== e.getEndKey()) return;
				const o = t.getBlockForKey(n),
					s = e.getStartOffset(),
					i = e.getEndOffset(),
					c = s > 0 ? o.getEntityAt(s - 1) : null,
					a = o.getEntityAt(i);
				if (!c || !a || c !== a) return;
				const l = t.getEntity(a),
					d = o.getCharacterList().toSeq().skip(i).takeWhile(t => !!t && t.getEntity() === a).count(),
					[u, p] = Object(r.a)(t, o, l, i, i + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(t, e, n) {
				const r = s(t, e) || t;
				return o.Modifier.replaceWithFragment(r, e, n)
			}

			function c(t, e, n, r, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = s(t, e) || c), o.Modifier.replaceText(c, e, n, r, i)
			}

			function a(t, e, n, r, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = s(t, e) || c), o.Modifier.insertText(c, e, n, r, i)
			}

			function l(t, e) {
				const n = s(t, e) || t;
				return o.Modifier.splitBlock(n, e)
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				r = n.n(o);
			e.a = (t, e) => {
				const n = t.getBlocksAsArray(),
					o = e.getKey(),
					s = e.getType();
				let i = null,
					c = null,
					a = !1;
				if (r()(n, (t, e) => {
						if (a || t.getKey() !== o || (a = !0), t.getType() === s) null === i && (i = e), c = e;
						else {
							if (a) return !1;
							i = null, c = null
						}
					}), a) return c = c || 0, {
					start: i = i || 0,
					blocks: n.slice(i, c + 1)
				}
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "b", (function() {
				return h
			})), n.d(e, "a", (function() {
				return m
			})), n.d(e, "c", (function() {
				return g
			})), n.d(e, "d", (function() {
				return f
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(r.OrderedSet)([]),
				u = (t, e, n, o, s = !0) => {
					const l = e.getType();
					if (Object(c.q)(l) || Object(c.r)(l) || Object(c.t)(l)) return;
					if (o === c.k.BOLD && Object(a.i)(e)) return;
					const u = n ? n.getType() : null;
					return (u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK) && o !== c.k.SPOILER && o !== c.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === c.k.MONOSPACE || o === c.k.SPOILER ? s ? Object(r.OrderedSet)([o]) : d : (t.has(c.k.MONOSPACE) || t.has(c.k.SPOILER)) && s ? Object(r.OrderedSet)([o]) : !s || o !== c.k.SUPERSCRIPT && o !== c.k.SUBSCRIPT ? s ? t.add(o) : t.has(o) ? t.delete(o) : void 0 : t.delete(c.k.SUBSCRIPT).delete(c.k.SUPERSCRIPT).add(o)
				},
				p = (t, e) => {
					let n = null,
						o = !0;
					return Object(l.a)(t, e, (r, l) => {
						const d = r.getType(),
							u = Object(a.i)(r);
						if (u || (o = !1), Object(c.q)(d) || Object(c.r)(d) || Object(c.t)(d)) return !1;
						const p = e.getStartKey() === l ? e.getStartOffset() : 0,
							h = e.getEndKey() === l ? e.getEndOffset() : r.getLength(),
							m = r.getCharacterList();
						Object(s.a)(m, {
							start: p,
							end: h
						}, e => {
							const o = e.getEntity();
							if (o && t.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let r = e.getStyle();
							return u && (r = r.add(c.k.BOLD)), null === n ? n = r.asMutable() : n.intersect(r), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(c.k.BOLD), n.toJS())
				},
				h = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection();
					let i = n.getBlockMap();
					const a = -1 === p(n, r).indexOf(t);
					Object(l.a)(n, r, (e, l) => {
						if (!e || !l) return !1;
						const d = r.getStartKey() === l ? r.getStartOffset() : 0,
							p = r.getEndKey() === l ? r.getEndOffset() : e.getLength(),
							h = e.getCharacterList(),
							m = h.withMutations(r => {
								Object(s.a)(h, {
									start: d,
									end: p
								}, (s, i, l, d) => {
									const p = s.getStyle(),
										h = s.getEntity(),
										m = h ? n.getEntity(h) : null,
										g = u(p, e, m, t, a);
									if (g) {
										const t = ((t, e) => o.CharacterMetadata.create({
											style: e,
											entity: e.has(c.k.SPOILER) ? null : t.getEntity()
										}))(s, g);
										for (let e = l; e < d; e++) r.set(e, t)
									}
								})
							});
						if (m !== h) {
							const t = e.set("characterList", m);
							i = i.set(l, t)
						}
					});
					const d = n.merge({
						blockMap: i,
						selectionAfter: r
					});
					return o.EditorState.push(e, d, "change-inline-style")
				},
				m = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = n.getBlockForKey(r.getStartKey()),
						i = s.getEntityAt(r.getStartOffset()),
						c = i ? n.getEntity(i) : null,
						a = e.getCurrentInlineStyle(),
						l = u(a, s, c, t, !a.has(t));
					let d = e;
					return l && (d = o.EditorState.setInlineStyleOverride(d, l)), d
				},
				g = t => o.EditorState.setInlineStyleOverride(t, d),
				f = (t, e) => {
					const n = t.getSelection(),
						o = e.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || t.getCurrentInlineStyle().isEmpty() ? t : g(t)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(t, e, n) {
			t.exports = {
				Container: "_3YZ-jFfccqhepgq1dDuLEv",
				container: "_3YZ-jFfccqhepgq1dDuLEv",
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				mRedesign: "_2sl29I15jbNPrKiiB9kfVf",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				mExpanded: "_1UhKfcyzvaWRtDdXZmzg6D",
				userIcon: "_1wS6Q6S9RvAbzxaselfK2i",
				CurrentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				currentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/fbt/lib/FbtPublic.js")),
				s = n("./node_modules/lodash/filter.js"),
				i = n.n(s),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./node_modules/shallowequal/index.js"),
				p = n.n(u),
				h = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/fastdom/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				f = n("./src/lib/linkMatchers/customLinks.ts"),
				b = n("./src/lib/logs/console.ts"),
				y = n("./src/telemetry/models/Media.ts"),
				E = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				S = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				C = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				x = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const T = {
				BREAK_HEADER_ENTITY: "BREAK_HEADER_ENTITY",
				CONVERT_TO_LIST_ON_SPACE: "CONVERT_TO_LIST_ON_SPACE",
				EXEC_TABLE_ON_ENTER_HANDLER: "EXEC_TABLE_ON_ENTER_HANDLER",
				INSERT_LINE_BREAK: "INSERT_LINE_BREAK",
				LINKIFY_ON_ENTER: "LINKIFY_ON_ENTER",
				LINKIFY_ON_SPACE: "LINKIFY_ON_SPACE",
				MAKE_PLAIN_BLOCK: "MAKE_PLAIN_BLOCK",
				OPEN_LINK_TOOLTIP: "OPEN_LINK_TOOLTIP",
				REDUCE_LIST_INDENT: "REDUCE_LIST_INDENT",
				REMOVE_EXTRA_LIST_ITEM: "REMOVE_EXTRA_LIST_ITEM",
				RESET_CURRENT_AND_PREVIOUS_BLOCKS: "RESET_CURRENT_AND_PREVIOUS_BLOCKS",
				SUBMIT: "SUBMIT"
			};
			const j = t => {
					const e = t.getCurrentContent().getBlockMap();
					if (e.size > 2 || (t => !!t.reduce((t = 0, e) => t + e.getLength(), 0))(e) || (t => !!t.find(t => Object(x.o)(t.getType())))(e)) return null; {
						const n = t.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === e.first().getKey()) return n.getFocusKey()
					}
				},
				v = t => {
					const e = t.getCharacterList().map(t => o.CharacterMetadata.create({
						entity: t.getEntity()
					}));
					return t.set("characterList", e)
				};
			var R = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				w = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				_ = n("./node_modules/lodash/escape.js"),
				B = n.n(_),
				I = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				A = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				K = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				M = n("./node_modules/immutable/dist/immutable.js"),
				L = n("./src/reddit/helpers/dom/index.ts"),
				D = n("./node_modules/lodash/chunk.js"),
				N = n.n(D),
				F = n("./node_modules/lodash/flatten.js"),
				P = n.n(F),
				U = n("./node_modules/lodash/takeWhile.js"),
				H = n.n(U),
				z = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				W = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				q = n("./node_modules/lodash/last.js"),
				V = n.n(q),
				G = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				Y = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				Q = n("./node_modules/lodash/find.js"),
				J = n.n(Q);
			var X = (t, e) => {
				const n = t.getSelection(),
					r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(W.e)(r, s, i);
				if (!c || c !== a) return t;
				const l = Object(W.g)(s),
					d = Object(W.g)(i),
					{
						blocks: u,
						start: p
					} = c,
					{
						colCount: h
					} = d,
					m = u.length / h,
					{
						minCol: g,
						minRow: f,
						maxCol: b,
						maxRow: y
					} = Object(W.f)(l, d),
					E = u.filter(t => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(W.g)(t);
						return "rows" === e ? !(f <= n && n <= y) : !(g <= o && o <= b)
					});
				E.sort(W.b);
				const S = "rows" === e ? h : E.length / m,
					C = P()(Object(W.d)(N()(E, S))),
					O = r.getBlocksAsArray(),
					k = [...O.slice(0, p), ...C, ...O.slice(p + u.length)],
					x = r.merge({
						blockMap: o.BlockMapBuilder.createFromArray(k)
					}),
					T = {
						colIndex: g,
						rowIndex: f
					};
				let j = J()(C, t => Object(W.h)(T, Object(W.g)(t)));
				j || (j = C.length ? C[C.length - 1] : O[p > 0 ? p - 1 : 0]);
				const v = o.SelectionState.createEmpty(j.getKey()).merge({
					focusOffset: j.getLength(),
					anchorOffset: j.getLength()
				});
				let R = o.EditorState.push(t, x, G.e);
				return R = o.EditorState.forceSelection(R, v)
			};
			var Z = (t, e = !1) => {
				const n = t.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !e) return;
				const r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(W.e)(r, s, i);
				if (!c || c !== a) return;
				const l = {};
				let d = n;
				if (s === i) {
					const t = Object(W.n)(i, 0, n.getStartOffset()),
						e = Object(W.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(W.j)(i, [t, e]), d = n
				} else {
					if (c.blocks[0].getKey() === n.getStartKey() && V()(c.blocks).getKey() === n.getEndKey()) return X(t, "rows");
					Object(Y.a)(r, n, (t, e) => {
						l[e] = Object(W.n)(t, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = r.merge({
					blockMap: r.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(t, u, G.f)
			};
			const $ = (t, e, n, o) => {
					const {
						htmlParts: r
					} = e;
					t.forEach((t, s) => {
						r.push(`<${n} ${o[s]} style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);">`), ft(t, e), r.push(`</${n}>`)
					})
				},
				tt = t => {
					const e = t[0],
						n = t[t.length - 1],
						o = [...t].sort(W.b),
						{
							minCol: r,
							maxCol: s
						} = Object(W.f)(Object(W.g)(e), Object(W.g)(n)),
						i = s - r + 1;
					return Object(W.d)(N()(o, i))
				},
				et = (t, e, n) => {
					n ? ft(t[0], e) : ((t, e) => {
						const {
							editor: n,
							htmlParts: o
						} = e, r = n.getEditorKey(), s = t[0].map(t => {
							const {
								alignment: e
							} = Object(W.g)(t);
							return e ? `align="${W.a[e]}"` : ""
						}), [i, ...c] = t;
						o.push(`\n    <table data-editor="${r}">\n      <thead>\n        <tr>`), $(i, e, "th", s), o.push("\n        </tr>\n      </thead>\n      <tbody>"), c.forEach(t => {
							o.push("\n        <tr>"), $(t, e, "td", s), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(tt(t), e)
				},
				nt = (t, e, n) => {
					n ? e.textParts.push(Et(t[0], e)) : ((t, e) => {
						const {
							textParts: n
						} = e;
						t.forEach(t => {
							n.push(t.map(t => Et(t, e)).join(" "))
						})
					})(tt(t), e)
				},
				ot = t => {
					const {
						processed: e,
						remaining: n
					} = t, o = [];
					for (; n.length;) {
						const t = n[0];
						if (!Object(x.v)(t.getType())) break;
						o.push(n.shift())
					}
					const r = !n.length && !e.length,
						s = 1 === o.length && r;
					et(o, t, s), nt(o, t, s), ((t, e, n, o) => {
						if (n)
							if (o) {
								const n = t[0].merge({
									data: Object(M.Map)(),
									type: x.n
								});
								e.blocksParts = [n]
							} else e.blocksParts = P()(tt(t))
					})(o, t, r, s), e.push(...o)
				},
				rt = t => Z(t, !0),
				st = (t, e, n) => {
					const r = Object(x.v)(n.first().getType()),
						s = Object(x.v)(n.last().getType()),
						i = t.getBlockForKey(e.getAnchorKey()),
						c = t.getBlockForKey(e.getFocusKey()),
						[a, l] = Object(W.e)(t, i, c);
					return a && a === l ? ((t, e, n, r) => {
						const s = Object(x.v)(r.first().getType()),
							i = t.getBlockForKey(e.getAnchorKey()),
							c = t.getBlockForKey(e.getFocusKey()),
							{
								blocks: a,
								start: l
							} = n;
						a.sort(W.b);
						const d = Object(W.g)(a[0]);
						let {
							colCount: u
						} = d;
						const p = N()(a, u);
						let h = p.length;
						const {
							minRow: m,
							minCol: g
						} = Object(W.f)(Object(W.g)(i), Object(W.g)(c)), f = r.toArray();
						if (s) {
							const n = H()(f, t => Object(x.v)(t.getType()));
							n.sort(W.b);
							const r = Object(W.g)(n[0]).colCount,
								s = N()(n, r),
								i = s.length,
								c = m + i - 1,
								d = g + r - 1;
							if (n.length !== i * r) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(t => {
									t.push(...Object(W.l)(d - u + 1, 1))
								}), u = p[0].length, c >= h) {
								const t = N()(Object(W.l)(u, c - h + 1), u);
								p.push(...t)
							}
							h = p.length;
							for (let t = 0; t < i; t++)
								for (let e = 0; e < r; e++) {
									const n = m + t,
										o = g + e,
										r = s[t][e];
									p[n][o] = r.set("key", p[n][o].getKey())
								}
							const b = Object(W.d)(p),
								y = P()(b),
								E = t.getBlocksAsArray(),
								S = [...E.slice(0, l), ...y, ...E.slice(l + a.length)],
								C = Object(W.o)(e, p[m][g], p[c][d]);
							return t.merge({
								blockMap: o.BlockMapBuilder.createFromArray(S),
								selectionAfter: C
							})
						} {
							const n = p[m][g],
								r = Object(W.j)(n, f, " ");
							let s = e;
							return e.getStartKey() !== e.getEndKey() && (s = Object(W.o)(e, n, n)), z.c(t, s, o.BlockMapBuilder.createFromArray([r]))
						}
					})(t, e, a, n) : a || l || !r && !s ? void 0 : ((t, e, n) => {
						const r = Object(x.v)(n.first().getType()),
							s = Object(x.v)(n.last().getType()),
							i = n.toArray();
						r && i.unshift(Object(A.h)()), s && i.push(Object(A.h)());
						const c = o.BlockMapBuilder.createFromArray(i);
						return z.c(t, e, c)
					})(t, e, n)
				};
			var it = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				ct = n.n(it);
			var at = (t, e) => {
				const n = e.getStartKey(),
					o = e.getStartOffset(),
					r = e.getEndKey(),
					s = e.getEndOffset(),
					i = ct()(t, e).getBlockMap(),
					c = i.keySeq(),
					a = c.indexOf(n),
					l = c.indexOf(r) + 1;
				return i.slice(a, l).map((t, e) => {
					const i = t.getText(),
						c = t.getCharacterList();
					return n === r ? t.merge({
						text: i.slice(o, s),
						characterList: c.slice(o, s)
					}) : e === n ? t.merge({
						text: i.slice(o),
						characterList: c.slice(o)
					}) : e === r ? t.merge({
						text: i.slice(0, s),
						characterList: c.slice(0, s)
					}) : t
				})
			};
			const lt = (t, e) => {
					const n = {
							children: [],
							parentItem: e,
							type: t.getType()
						},
						o = {
							block: t,
							parentList: n
						};
					return n.children.push(o), e && (e.childrenLists = e.childrenLists || [], e.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				dt = (t, e) => {
					const {
						type: n,
						children: o
					} = t, {
						htmlParts: r
					} = e, s = n === x.b.ORDERED_LIST ? "ol" : "ul";
					r.push(`<${s}>`), o.forEach(t => ((t, e) => {
						const {
							block: n,
							childrenLists: o
						} = t, {
							htmlParts: r
						} = e;
						r.push("<li>"), ft(n, e, !0), o && o.forEach(t => dt(t, e)), r.push("</li>")
					})(t, e)), r.push(`</${s}>`)
				},
				ut = (t, e) => {
					const {
						children: n
					} = t;
					n.forEach((t, n) => pt(t, n, e))
				},
				pt = (t, e, n) => {
					const {
						block: o,
						childrenLists: r
					} = t, {
						textParts: s
					} = n, i = " ".repeat(o.getDepth()), c = o.getType() === x.b.ORDERED_LIST ? `${e+1}.` : "-", a = Et(o, n);
					s.push(`${i}${c} ${a}`), r && r.forEach(t => ut(t, n))
				},
				ht = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = n.getType(), r = [n];
					for (; e.length;) {
						const t = e[0],
							n = t.getType();
						if (!Object(x.s)(n)) break;
						if (t.getDepth() > 0 || n === x.b.UNORDERED_LIST) r.push(e.shift());
						else {
							if (n !== o) break;
							if (r.some(t => t.getType() !== x.b.ORDERED_LIST)) break;
							r.push(e.shift())
						}
					}
					const s = (t => {
						const e = t[0],
							n = {
								type: e.getType(),
								children: []
							};
						let o, r = n,
							s = e.getDepth();
						return t.forEach(t => {
							const e = t.getType(),
								n = t.getDepth();
							if (n > s) {
								const e = lt(t, o);
								r = e.list, o = e.item, s = n
							} else {
								for (; s !== n;) r = r.parentItem ? r.parentItem.parentList : r, s--;
								if (e === r.type) o = {
									block: t,
									parentList: r
								}, r.children.push(o);
								else {
									const e = lt(t, r.parentItem);
									r = e.list, o = e.item
								}
							}
						}), n
					})(r);
					dt(s, t), ut(s, t), t.processed.push(...r)
				};
			var mt = (t, e) => {
				const n = t.toArray().filter(t => !Object(x.t)(t.getType()));
				if (1 === n.length) {
					n[0].getType() !== x.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: x.n
					}))
				}
				const r = o.ContentState.createFromBlockArray(n),
					s = JSON.stringify(Object(o.convertToRaw)(r));
				return `<div data-reddit-rtjson="${B()(s)}">${e}</div>`
			};
			const gt = () => !!window.clipboardData,
				ft = (t, e, n = !1) => {
					const {
						htmlParts: o
					} = e, r = bt(t, e);
					r && r.forEach(t => o.push(n ? t.innerHTML : t.outerHTML))
				},
				bt = (t, e) => {
					const {
						selection: n,
						editor: o
					} = e, r = n.getStartKey(), s = n.getEndKey(), i = t.getKey(), c = o.refs.editor, a = Object(A.d)(i, c);
					return a ? i === r || i === s ? Object(L.c)(a) : [a] : null
				};
			var yt = (t, e, n) => {
				const r = t.getCurrentContent(),
					s = t.getSelection(),
					i = Tt(t) || at(r, s);
				if (!i || !i.count()) return;
				const c = i.toArray(),
					a = {
						editor: e,
						editorState: t,
						selection: s,
						remaining: c,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...c]
					};
				for (; a.remaining.length;) {
					const t = a.remaining[0].getType();
					switch (!0) {
						case Object(x.t)(t):
							xt(a);
							break;
						case Object(x.s)(t):
							ht(a);
							break;
						case Object(x.v)(t):
							ot(a);
							break;
						default:
							St(a)
					}
				}
				const l = a.textParts.join("\n"),
					d = (t => Object(M.OrderedMap)(t.map(t => {
						const e = Object(o.genKey)();
						return [e, t.set("key", e)]
					})))(a.blocksParts);
				return ((t, {
					html: e,
					text: n
				}) => {
					gt() ? window.clipboardData.setData("text", n) : (e && t.clipboardData.setData("text/html", e), t.clipboardData.setData("text/plain", n))
				})(n, {
					html: mt(d, a.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), e.setClipboard(d), d
			};
			const Et = (t, e) => {
					const n = t.getText(),
						o = e.editorState.getCurrentContent(),
						r = [];
					let s = -1;
					return t.getCharacterList().forEach((t, e) => {
						const i = t && t.getEntity();
						if (i && void 0 !== e) {
							const t = o.getEntity(i);
							t.getType() === K.a.EMOTE && (r.push(n.substring(s + 1, e)), r.push(`:${t.getData().id}:`), s = e)
						}
					}), r.push(n.substring(s + 1, n.length)), r.join("")
				},
				St = t => {
					const e = t.remaining.shift();
					((t, e) => ft(t, e))(e, t), ((t, e) => {
						e.textParts.push(Et(t, e))
					})(e, t), t.processed.push(e)
				},
				Ct = (t, e) => {
					const n = t.first(),
						r = t.last();
					let s = t;
					if (Object(x.u)(n.getType()) ? s = s.set(s.keySeq().first(), n.merge({
							type: x.n
						})) : Object(x.o)(n.getType()) && (s = o.BlockMapBuilder.createFromArray([Object(A.h)(), ...s.toArray()])), Object(x.u)(r.getType()) || !Object(I.q)(e)) {
						const t = Object(A.h)();
						s = s.set(t.getKey(), t)
					} else if (Object(x.o)(r.getType())) {
						const t = Object(A.h)().merge({
							type: x.j
						});
						s = s.set(t.getKey(), t)
					}
					return s
				},
				Ot = (t, e, n) => {
					const o = t.getBlockForKey(e.getStartKey());
					if (Object(x.u)(o.getType())) {
						const o = n.first(),
							r = n.set(n.keySeq().first(), Object(A.h)(o.getKey(), o.getText()).merge({
								type: x.j
							}));
						return z.c(t, e, r)
					}
				},
				kt = (t, e, n) => {
					const o = ((t, e, n) => {
						const o = e ? e.getText() : "";
						return `<span data-editor="${n}">${B()(o)}</span>`
					})(0, e, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				xt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = e[0] && Object(x.u)(e[0].getType()) ? e.shift() : void 0;
					kt(0, o, t), ((t, e) => {
						const n = t ? Et(t, e) : "";
						e.textParts.push(n)
					})(o, t), t.processed.push(n), o && t.processed.push(o)
				},
				Tt = t => {
					const e = t.getSelection(),
						n = e.getFocusKey();
					if (n !== e.getAnchorKey()) return;
					const r = t.getCurrentContent(),
						s = r.getBlockForKey(n);
					if (Object(x.o)(s.getType())) {
						const t = [s],
							e = r.getBlockAfter(s.getKey());
						return e && Object(x.u)(e.getType()) && t.push(e), o.ContentState.createFromBlockArray(t).getBlockMap()
					}
				},
				jt = t => {
					const e = Tt(t);
					if (e) return Object(I.d)(t, e.first().getKey())
				},
				vt = t => {
					const e = t.getSelection();
					let n = t.getCurrentContent();
					const r = n.getBlockForKey(e.getStartKey()),
						s = n.getBlockForKey(e.getEndKey());
					if (Object(x.t)(r.getType()) || Object(x.t)(s.getType())) {
						if (e.isCollapsed())
							if (Object(x.u)(r.getType())) n = z.d(n, e), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), x.n);
							else if (Object(x.o)(r.getType())) {
							let r = n.getBlockAfter(e.getStartKey());
							return r || (r = (t = Object(I.b)(t, e.getStartKey(), A.a.after)).getCurrentContent().getBlockAfter(e.getStartKey())), o.EditorState.forceSelection(t, Object(A.b)(r, !0))
						}
						return o.EditorState.push(t, n, "split-block")
					}
				},
				Rt = (t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent(),
						s = "up" === e ? n.getStartKey() : n.getEndKey(),
						i = r.getBlockForKey(s);
					if (!Object(x.o)(i.getType())) return;
					const c = "up" === e ? r.getBlockBefore(s) : r.getBlockAfter(s);
					return c ? o.EditorState.forceSelection(t, Object(A.b)(c, !0)) : Object(I.b)(t, s, "up" === e ? A.a.before : A.a.after)
				},
				wt = (t, e) => {
					if (t.shiftKey) return;
					const n = Rt(e, "up");
					return n && t.preventDefault(), n
				},
				_t = (t, e) => {
					if (t.shiftKey) return;
					const n = Rt(e, "down");
					return n && t.preventDefault(), n
				},
				Bt = (t, e) => {
					const n = t.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(x.o)(t.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var It = (t, e) => {
					if (!Object(I.q)(e)) return t;
					const n = t.getSelection(),
						o = t.getCurrentContent(),
						r = o.getBlockForKey(n.getStartKey());
					if (Object(x.o)(r.getType())) {
						const e = o.getBlockAfter(r.getKey());
						if (!e || !Object(x.u)(e.getType())) return Object(I.d)(t, r.getKey(), !1)
					}
					return t
				},
				At = n("./src/reddit/actions/modal.ts"),
				Kt = n("./src/reddit/actions/upload.ts"),
				Mt = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Lt = t => null,
				Dt = n("./src/reddit/helpers/media/index.ts"),
				Nt = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Ft = n("./src/reddit/selectors/activeModalId.ts");
			const Pt = "application/x-reddit-rte-block";
			var Ut = n("./src/reddit/models/Upload/index.ts"),
				Ht = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				zt = n.n(Ht);
			const Wt = g.a.img("Img", zt.a);
			var qt = g.a.wrapped(t => {
					const {
						className: e,
						url: n
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(Wt, {
						draggable: !1,
						src: n
					}))
				}, "Component", zt.a),
				Vt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				Gt = n.n(Vt);
			const Yt = g.a.div("Message", Gt.a);
			var Qt = g.a.wrapped(t => {
					const {
						className: e,
						isImage: n
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(Yt, null, n ? r.fbt._("Processing video...", null, {
						hk: "3g3QoU"
					}) : r.fbt._("Processing image...", null, {
						hk: "1xoNB3"
					})))
				}, "Component", Gt.a),
				Jt = n("./src/lib/formatApiError/index.ts"),
				Xt = n("./src/reddit/components/ProgressBar/index.tsx"),
				Zt = n("./src/reddit/controls/Button/index.tsx"),
				$t = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				te = n.n($t);
			const ee = g.a.div("ControlRow", te.a),
				ne = g.a.wrapped(Zt.q, "Button", te.a),
				oe = g.a.wrapped(Zt.q, "ErrButton", te.a),
				re = g.a.div("Status", te.a),
				se = g.a.wrapped(Xt.a, "ProgressBar", te.a),
				ie = g.a.div("ErrorLine", te.a),
				ce = t => e => {
					e.stopPropagation(), t(e)
				};
			var ae = g.a.wrapped(t => {
					const {
						upload: e
					} = t, n = ce(t.onCancel), o = ce(t.onRetry), s = ce(t.onRemove), {
						status: i,
						progress: c
					} = e, l = c && c.percent || 0, d = i === Ut.a.FAILED || i === Ut.a.CANCELED, u = (t => {
						const {
							status: e,
							progress: n
						} = t;
						return e === Ut.a.CANCELED ? r.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : e === Ut.a.FAILED ? r.fbt._("Upload failed: {errorText}", [r.fbt._param("errorText", Object(Jt.a)(t.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? r.fbt._("Success!", null, {
							hk: "3622uh"
						}) : r.fbt._("Uploading: {fileName}", [r.fbt._param("fileName", t.file.name)], {
							hk: "H7qzO"
						})
					})(e);
					return a.a.createElement("div", {
						className: t.className
					}, d ? a.a.createElement(ie, null) : a.a.createElement(se, {
						innerBarClassName: te.a.ProgressBarInner,
						percent: l
					}), a.a.createElement(ee, null, a.a.createElement(re, {
						className: d ? te.a.hasError : void 0,
						title: d ? u : void 0
					}, u), a.a.createElement("div", {
						className: te.a.ButtonsContainer
					}, d ? [a.a.createElement(oe, {
						kind: Zt.a.Button,
						priority: Zt.b.Plain,
						key: "remove",
						onClick: s
					}, r.fbt._("Remove", null, {
						hk: "3LUKPE"
					})), a.a.createElement(oe, {
						kind: Zt.a.Button,
						priority: Zt.b.Plain,
						key: "retry",
						onClick: o
					}, r.fbt._("Retry", null, {
						hk: "3sO2HB"
					}))] : a.a.createElement(ne, {
						kind: Zt.a.Button,
						priority: Zt.b.Plain,
						disabled: 100 === l,
						onClick: n
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})))))
				}, "Component", te.a),
				le = n("./node_modules/react-motion/lib/react-motion.js"),
				de = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ue = n("./src/reddit/components/PlayButton/index.tsx"),
				pe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				he = n.n(pe);
			const me = {
					stiffness: 60,
					damping: 20
				},
				ge = [{
					key: "video",
					style: {
						opacity: Object(le.spring)(1, me)
					}
				}],
				fe = g.a.wrapped(t => {
					const {
						autoPlay: e = !1,
						className: n,
						showControls: o,
						shouldPause: r,
						style: s,
						dashUrl: i,
						hlsUrl: c,
						otherUrl: l
					} = t;
					return a.a.createElement("div", {
						className: n,
						style: s
					}, a.a.createElement(de.b, {
						autoPlay: e,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: r,
						isGif: !1,
						hlsSource: c,
						mpegDashSource: i,
						otherSource: l,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", he.a),
				be = g.a.img("PosterImg", he.a),
				ye = g.a.wrapped(t => {
					const {
						className: e,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: r
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(be, {
						draggable: !1,
						src: o
					}), r && a.a.createElement(ue.a, {
						className: he.a.playButton,
						onClick: n
					}))
				}, "Poster", he.a);
			class Ee extends a.a.Component {
				constructor(t) {
					super(t), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(le.spring)(0, me)
					}), this.didLeave = () => {
						this.setState({
							showVideo: !1
						})
					}, this.state = {
						showVideo: !1
					}
				}
				renderVideo() {
					const {
						props: t
					} = this;
					return a.a.createElement("div", {
						className: t.className
					}, a.a.createElement(fe, {
						dashUrl: t.dashUrl,
						hlsUrl: t.hlsUrl,
						showControls: t.isUploaded && t.isSelected,
						shouldPause: !t.isSelected || void 0
					}))
				}
				render() {
					const {
						className: t,
						isSelected: e,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: r,
						otherUrl: s
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: i
					} = this.state, c = !!(o || r || s);
					return a.a.createElement(le.TransitionMotion, {
						defaultStyles: [],
						styles: e && i && c ? ge : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, c => a.a.createElement("div", {
						className: t
					}, c.map(t => a.a.createElement(fe, {
						key: t.key,
						autoPlay: !0,
						style: t.style,
						otherUrl: s,
						dashUrl: o,
						hlsUrl: r,
						showControls: !0,
						shouldPause: !e || void 0
					})), a.a.createElement(ye, {
						url: n,
						showPlayButton: !i || !e,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var Se = g.a.wrapped(Ee, "Component", he.a),
				Ce = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				Oe = n.n(Ce);

			function ke() {
				return (ke = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var xe = t => {
					const {
						alignCenter: e,
						isSelected: n,
						onCancel: o,
						onRetry: r,
						onRemove: s,
						upload: i,
						mediaAsset: c,
						thumbnail: l,
						...d
					} = t;
					let u = !1;
					if (i) u = "image" === Object(Dt.f)(i.metadata.mimetype);
					else {
						if (!c) return null;
						u = c.type === I.a.Image || c.type === I.a.AnimatedImage
					}
					const p = i ? i.metadata.height : c.height,
						m = !i || i.status === Ut.a.SUCCESS,
						g = u && !!p && p < 104,
						f = !p;
					return a.a.createElement("div", ke({
						className: Object(h.a)(Oe.a.container, {
							[Oe.a.alignCenter]: e,
							[Oe.a.isCompact]: g,
							[Oe.a.isUploaded]: m,
							[Oe.a.isSelected]: n
						})
					}, d), f ? a.a.createElement(Qt, {
						className: Oe.a.placeholder,
						isImage: u
					}) : u ? a.a.createElement(qt, {
						className: Oe.a.imagePreview,
						url: i ? i.metadata.localUrl : c.imageUrl
					}) : a.a.createElement(Se, {
						className: Oe.a.videoPreview,
						dashUrl: c ? c.dashUrl : void 0,
						hlsUrl: c ? c.hlsUrl : void 0,
						isSelected: n,
						isUploaded: m,
						otherUrl: i ? i.metadata.localUrl : void 0,
						posterUrl: l ? l.url : c.posterUrl
					}), i && a.a.createElement(ae, {
						className: Oe.a.statusBar,
						onCancel: o,
						onRemove: s,
						onRetry: r,
						upload: i
					}))
				},
				Te = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				je = n.n(Te);

			function ve() {
				return (ve = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Re = g.a.div("HiddenDiv", je.a);
			var we = ({
					elementRef: t,
					...e
				}) => a.a.createElement(Re, ve({}, e, {
					innerRef: t
				}), a.a.createElement("br", null)),
				_e = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Be = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Ie = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ae = n("./src/reddit/layout/row/Inline/index.tsx"),
				Ke = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Me = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Le = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				De = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				Ne = n.n(De);
			const Fe = g.a.wrapped(Me.a, "FormatterButton", Ne.a),
				Pe = Object(Le.f)(Ie.b),
				Ue = Object(Le.f)(Be.a),
				He = g.a.wrapped(Ae.a, "ToolbarContent", Ne.a);
			var ze = t => {
					const {
						alignCenter: e,
						block: n,
						editorState: o,
						onChange: s,
						showVideoControls: i
					} = t, c = n.getKey(), {
						makeGif: l = !1
					} = Object(I.h)(n) || {};
					return a.a.createElement("div", {
						className: Object(h.a)(Ne.a.container, {
							[Ne.a.alignCenter]: e
						})
					}, a.a.createElement(He, {
						className: Ne.a.content
					}, i && a.a.createElement(_e.a, {
						isCompact: !0,
						key: "make-gif",
						on: l,
						onClick: () => s(Object(I.r)(o, c, {
							makeGif: !l
						}))
					}), i && t.showThumbnailButton && a.a.createElement(Fe, {
						Icon: Ue,
						onClick: t.onThumbnailButtonClick,
						tooltip: r.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), i && a.a.createElement(Ke.c, null), a.a.createElement(Fe, {
						Icon: Pe,
						onClick: () => s(Object(I.d)(o, c)),
						tooltip: r.fbt._("Remove", null, {
							hk: "2aF1Zw"
						}),
						tooltipBelow: !0
					})))
				},
				We = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				qe = n.n(We);
			const Ve = t => `RTE_VIDEO_THUMBNAIL_SELECTOR_${t.getKey()}`,
				Ge = Object(d.a)(t => t.uploads, (t, e) => {
					const n = Object(I.h)(e.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (t, e) => e ? t[e] : void 0),
				Ye = Object(l.b)((t, e) => ({
					upload: Ge(t, e),
					isThumbnailSelectorOpen: Object(Ft.a)(t) === Ve(e.block),
					isRteVideoPosterEnabled: C.d.rteVideoPoster(t)
				}), (t, e) => ({
					onCancelUpload: e => t(Kt.i(e, !1)),
					toggleVideoThumbnailsSelector: () => t(Object(At.i)(Ve(e.block)))
				})),
				Qe = g.a.div("MediaContainer", qe.a),
				Je = g.a.div("Container", qe.a);
			class Xe extends a.a.Component {
				constructor(t) {
					super(t), this.onNativeSelectionChange = () => {
						const t = window.getSelection();
						if (0 === t.rangeCount) return;
						const e = t.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = e;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(L.i)(e, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const t = document.createRange();
						t.selectNodeContents(this.rootContainer);
						const e = window.getSelection();
						e.removeAllRanges(), e.addRange(t), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const t = this.props.blockProps.getEditorState().getSelection(),
							e = this.props.block.getKey();
						return this.state.active && Object(I.n)(t, e)
					}, this.onRetryUpload = () => {
						const {
							upload: t
						} = this.props;
						t && this.props.blockProps.onRetryUpload(t.key)
					}, this.onMediaViewClickCapture = t => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = t => {
						t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData(Pt, this.props.block.getKey())
					}, this.onRemove = () => {
						const t = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(I.d)(t, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = t => {
						this.props.blockProps.onChange(t)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = t => {
						const e = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(I.r)(e, this.props.block.getKey(), {
							thumbnail: t
						});
						o = Object(I.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(t, e) {
					return e.active !== this.state.active || e.isInSelection !== this.state.isInSelection || t.block !== this.props.block || t.upload !== this.props.upload || Object(I.n)(t.selection, t.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: t
					} = this.props;
					t.getHasFocus() && Object(I.n)(t, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Lt(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(t) {
					const e = t.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && t.selection !== this.props.selection && t.selection.getHasFocus() && Object(I.n)(t.selection, e) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: t
					} = this.rootContainer.getBoundingClientRect(), {
						top: e
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return t - e - 30 - 10
				}
				render() {
					const {
						block: t,
						blockProps: e,
						isRteVideoPosterEnabled: n,
						offsetKey: o,
						upload: r
					} = this.props, s = Object(I.h)(t), i = s ? s.thumbnail : void 0, c = !!r && Object(Dt.l)(r.metadata.mimetype || ""), {
						active: l,
						isInSelection: d
					} = this.state, u = e.editorType === Nt.a.Comment;
					return a.a.createElement(Je, {
						innerRef: t => this.rootContainer = t
					}, l && a.a.createElement(ze, {
						block: t,
						editorState: e.getEditorState(),
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: c,
						alignCenter: !u
					}), a.a.createElement(we, null), a.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": o
					}, a.a.createElement(Qe, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: t => this.mediaContainer = t
					}, a.a.createElement(xe, {
						isSelected: d || l,
						thumbnail: i,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: r,
						mediaAsset: s.mediaAsset,
						alignCenter: !u
					})), r && c && a.a.createElement(Mt.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: r.metadata.localUrl,
						videoDuration: r.metadata.videoDuration,
						selected: i,
						isOpen: this.props.isThumbnailSelectorOpen
					})), a.a.createElement(we, null))
				}
			}
			var Ze = Ye(Xe),
				$e = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				tn = n.n($e);
			class en extends a.a.PureComponent {
				constructor(t) {
					super(t);
					const {
						contentState: e,
						block: n
					} = Object(A.e)(t.children[0]).props;
					this.mediaBlockKey = e.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const t = this.props.children[0],
						e = Object(A.e)(t),
						{
							block: n,
							contentState: o
						} = e.props,
						s = o.getBlockForKey(this.mediaBlockKey),
						i = Object(I.h)(s);
					if (!i || !(i.mediaAsset || i.uploadInfo && i.uploadInfo.mediaType)) return null;
					const c = !n.getLength();
					return a.a.createElement("div", {
						className: tn.a.wrapper,
						style: {
							"--media-caption-placeholder-text": c ? `'${r.fbt._("Add caption",null,{hk:"3zI8El"})}'` : ""
						}
					}, t)
				}
			}
			const nn = Object(M.Map)({
				[x.j]: {
					element: "div",
					wrapper: a.a.createElement(en, null)
				}
			});
			var on = (t, e, n) => {
					const r = t.getSelection(),
						s = t.getCurrentContent(),
						i = s.getBlockForKey(r.getAnchorKey()),
						c = s.getBlockForKey(r.getFocusKey()),
						[a, l] = Object(W.e)(s, i, c);
					if (!a || a !== l) return t;
					const {
						blocks: d,
						start: u
					} = a, p = Object(W.g)(i), h = Object(W.g)(c), {
						colCount: m
					} = h;
					d.sort(W.b);
					const g = N()(d, m),
						{
							minCol: f,
							minRow: b,
							maxCol: y,
							maxRow: E
						} = Object(W.f)(p, h),
						S = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === e) {
						const t = "before" === n ? b : E + 1,
							e = N()(Object(W.l)(m, E - b + 1), m);
						g.splice(t, 0, ...e), S.rowIndex = t
					} else {
						const t = "before" === n ? f : y + 1;
						g.forEach(e => {
							e.splice(t, 0, ...Object(W.l)(y - f + 1, 1))
						}), S.colIndex = t
					}
					const C = Object(W.d)(g),
						O = s.getBlocksAsArray(),
						k = P()(C),
						x = [...O.slice(0, u), ...k, ...O.slice(u + d.length)],
						T = s.merge({
							blockMap: o.BlockMapBuilder.createFromArray(x)
						}),
						j = J()(k, t => Object(W.h)(S, Object(W.g)(t))),
						v = Object(W.o)(r, j, j);
					let R = o.EditorState.push(t, T, G.e);
					return R = o.EditorState.forceSelection(R, v)
				},
				rn = n("./node_modules/lodash/clamp.js"),
				sn = n.n(rn),
				cn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var an = (t, e, n = "preserve") => {
				const r = t.getSelection(),
					s = t.getCurrentContent(),
					i = "up" === e || "left" === e ? r.getStartKey() : r.getEndKey(),
					c = s.getBlockForKey(i);
				if (!Object(x.v)(c.getType())) return;
				const a = Object(W.g)(c),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = a,
					p = s.getBlocksAsArray(),
					h = Object(cn.a)(s, c);
				if (!h) return;
				let m = u,
					g = d;
				switch (e) {
					case "up":
						m--;
						break;
					case "down":
						m++;
						break;
					case "left":
						--g < 0 && (m--, g = l - 1);
						break;
					case "right":
						++g >= l && (m++, g = 0)
				}
				const f = {
					rowIndex: m,
					colIndex: g
				};
				let b = i;
				const y = J()(h.blocks, t => Object(W.h)(Object(W.g)(t), f));
				if (y) b = y.getKey();
				else {
					const t = Object(W.c)(f, a) < 0 ? h.start - 1 : h.start + h.blocks.length;
					0 <= t && t < p.length && (b = p[t].getKey())
				}
				const E = s.getBlockForKey(b);
				let S = 0;
				"preserve" === n ? S = sn()(r.getFocusOffset(), 0, E.getLength()) : "end" === n && (S = E.getLength());
				const C = r.merge({
					anchorKey: b,
					focusKey: b,
					focusOffset: S,
					anchorOffset: S
				});
				return r !== C ? o.EditorState.forceSelection(t, C) : void 0
			};
			const ln = (t, e) => {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						r = n.getBlockForKey(o.getFocusKey()),
						[s] = Object(W.e)(n, r, r);
					if (!s) return;
					const i = Object(W.g)(r);
					let c;
					return (c = i.colIndex === i.colCount - 1 && i.rowIndex === s.blocks.length / i.colCount - 1 && !t.shiftKey && o.getFocusKey() === o.getAnchorKey() ? on(e, "rows", "after") : an(e, t.shiftKey ? "left" : "right", "end")) ? (t.preventDefault(), c) : void 0
				},
				dn = (t, e) => {
					if (t.shiftKey) return;
					const n = an(e, "up");
					return n && t.preventDefault(), n
				},
				un = (t, e) => {
					if (t.shiftKey) return;
					const n = an(e, "down");
					return n && t.preventDefault(), n
				};
			class pn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(t) {
					const e = o.EditorState.undo(t);
					return an(e, "down", "end") || e
				}
				isSelectionInLastRow(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = e.getBlockForKey(n.getFocusKey()),
						[r] = Object(W.e)(e, o, o);
					if (!r) return !1;
					const s = Object(W.g)(r.blocks[0]).colCount,
						i = r.blocks.length / s;
					return Object(W.g)(o).rowIndex === i - 1
				}
				insertNewRow(t) {
					const e = t.getSelection();
					let n = on(t, "rows", "after");
					return n = o.EditorState.forceSelection(n, e), n = an(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(t) {
					return t.getSelection().isCollapsed() ? t === this.lastRowInsertionState ? this.undoRowInsertion(t) : this.isSelectionInLastRow(t) ? this.insertNewRow(t) : an(t, "down") || t : t
				}
			}
			const hn = (t, e) => {
				const n = t.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(W.e)(r, s, i);
				if (c && c === a) {
					const s = Object(W.o)(n, i, i, !1),
						c = z.b(r, s, e);
					return o.EditorState.push(t, c, G.d)
				}
			};
			var mn = n("./node_modules/lodash/forEach.js"),
				gn = n.n(mn);
			const fn = (t, e) => e ? t[0] : t[t.length - 1];
			var bn = (t, e) => {
					return t.getSelection().isCollapsed() ? ((t, e) => {
						const n = t.getSelection(),
							r = e.getSelection();
						if (!n.isCollapsed() || r.isCollapsed() || 0 !== r.getStartOffset() || r.getStartKey() !== n.getStartKey()) return t;
						const s = t.getCurrentContent(),
							i = e.getCurrentContent(),
							c = s.getBlockForKey(n.getAnchorKey());
						if (!Object(x.v)(c.getType())) return t;
						const {
							rowIndex: a,
							colIndex: l
						} = Object(W.g)(c);
						if (0 !== a || 0 !== l) return t;
						const d = s.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return t;
						const p = s.getBlockAfter(n.getAnchorKey()),
							h = i.getBlockAfter(r.getEndKey());
						if (p && p !== h) return t;
						const m = c.merge({
								type: x.n,
								data: Object(M.Map)({})
							}),
							g = s.merge({
								blockMap: d.set(c.getKey(), m)
							});
						return o.EditorState.set(t, {
							currentContent: g
						})
					})(t, e) : ((t, e) => {
						const n = t.getSelection();
						if (n.isCollapsed()) return t;
						if (e.getSelection() === n) return t;
						if (n.getFocusKey() === n.getAnchorKey()) return t;
						const r = t.getCurrentContent(),
							s = r.getBlockForKey(n.getAnchorKey()),
							i = r.getBlockForKey(n.getFocusKey()),
							[c, a] = Object(W.e)(r, s, i);
						if (!c && !a) return t;
						let l = t;
						if (c !== a) {
							const e = n.getIsBackward(),
								r = Object(W.o)(n, c ? fn(c.blocks, !e) : null, a ? fn(a.blocks, e) : null, e);
							n !== r && (l = o.EditorState.forceSelection(t, r))
						} else if (c && a && c === a) {
							const e = Object(W.g)(s),
								c = Object(W.g)(i),
								d = r.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = a,
								h = p[0],
								m = Object(W.g)(h);
							if (0 !== m.colIndex || 0 !== m.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const g = Object(W.b)(i, s) < 0,
								f = Object(W.k)(e, c),
								b = [],
								y = [];
							gn()(p, t => {
								const e = Object(W.g)(t);
								f(e.rowIndex, e.colIndex) ? b.push(t) : t !== h && y.push(t)
							});
							const E = b[0] === h;
							b.sort(W.b);
							const S = [...d.slice(0, u), ...E ? [] : [h], ...b, ...y, ...d.slice(u + p.length)],
								C = fn(b, !g),
								O = fn(b, g),
								k = Object(W.o)(n, C, O, g),
								x = r.merge({
									blockMap: o.BlockMapBuilder.createFromArray(S),
									selectionAfter: k
								});
							l = o.EditorState.set(t, {
								currentContent: x
							}), k !== n && (l = o.EditorState.forceSelection(l, k))
						}
						return l
					})(t, e)
				},
				yn = n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less"),
				En = n.n(yn);
			const Sn = g.a.div("Cell", En.a),
				Cn = g.a.div("Row", En.a),
				On = g.a.div("Table", En.a),
				kn = (t, e) => {
					if (!e || !t.contains(e)) return;
					let n = e;
					for (; n && n !== t;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				xn = (t, e = 10) => {
					let n = t,
						o = e;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				Tn = t => {
					const {
						dataset: e
					} = t;
					if ("string" == typeof e.row && "string" == typeof e.col) return {
						rowIndex: +e.row,
						colIndex: +e.col
					}
				},
				jn = t => {
					const e = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: r
						} = e;
					if (n !== o && r && t) {
						const n = e.getRangeAt(0);
						return Object(L.i)(n, t) && !t.contains(n.commonAncestorContainer)
					}
					return !1
				},
				vn = t => {
					const e = a.a.Children.toArray(t),
						n = Object(A.e)(e[0]),
						{
							selection: o,
							contentState: r,
							block: s
						} = n.props,
						{
							colCount: i
						} = Object(W.g)(s);
					e.sort((t, e) => Object(W.b)(Object(A.c)(t), Object(A.c)(e)));
					const c = N()(e, i);
					let l, d, u = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const t = r.getBlocksAsArray(),
							n = r.getBlockForKey(o.getStartKey()),
							i = r.getBlockForKey(o.getEndKey()),
							c = t.indexOf(n),
							a = t.indexOf(i),
							p = t.indexOf(s),
							h = p + e.length - 1;
						c < p && p < a || c < h && h < a ? u = !0 : p <= c && a <= h && (d = Object(W.g)(o.getIsBackward() ? i : n), l = Object(W.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: c,
						anchorCell: d,
						focusCell: l,
						isSelectWholeTable: u
					}
				};
			class Rn extends a.a.Component {
				constructor(t) {
					super(t), this.tableElem = null, this.onMouseDown = t => {
						if (!this.tableElem || t.nativeEvent.detail < 2) return;
						const e = window.getSelection(),
							n = e.rangeCount ? e.getRangeAt(0) : null,
							o = kn(this.tableElem, e.focusNode);
						if (n && o)
							if (2 === t.nativeEvent.detail && e.isCollapsed) {
								const r = n.cloneRange();
								r.setEndAfter(o), r.toString() || (t.preventDefault(), e.selectAllChildren(o))
							} else t.nativeEvent.detail >= 3 && (e.selectAllChildren(o), t.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const t = this.tableElem;
						if (!t) return;
						const e = window.getSelection();
						if (e.anchorNode === e.focusNode) return void this.resetSelection();
						const n = kn(t, e.anchorNode),
							o = kn(t, e.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : jn(t) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (t, e) => {
						const n = Tn(e),
							o = Tn(t);
						Object(W.h)(n, this.state.focusCell) && Object(W.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = vn(t.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.children !== this.props.children && this.setState(vn(t.children))
				}
				render() {
					const {
						rows: t,
						anchorCell: e,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let r;
					o ? r = (t, e) => !0 : e && n && !Object(W.h)(e, n) && (r = Object(W.k)(e, n));
					const s = t[0].map(t => Object(W.g)(Object(A.e)(t).props.block).alignment),
						i = t.map((t, e) => a.a.createElement(Cn, {
							key: e
						}, t.map((t, n) => a.a.createElement(Sn, {
							"data-row": e,
							"data-col": n,
							"data-selected": !!r && r(e, n),
							key: n,
							style: {
								"--cell-text-alignment": s[n] ? W.a[s[n]] : void 0
							}
						}, t))));
					return a.a.createElement(On, {
						className: r ? En.a.isFakeSelectionActive : void 0,
						innerRef: t => this.tableElem = t,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const wn = Object(M.Map)({
				[x.l]: {
					element: "div",
					wrapper: a.a.createElement(Rn, null)
				}
			});
			var _n = n("./node_modules/lodash/isEqual.js"),
				Bn = n.n(_n),
				In = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				An = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"),
				Kn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"),
				Mn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"),
				Ln = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"),
				Dn = n("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"),
				Nn = n("./src/reddit/models/RichTextJson/index.ts");
			var Fn = (t, e = !1) => {
				const n = t.getSelection(),
					r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(W.e)(r, s, i);
				if (c && c === a) {
					const {
						blocks: e
					} = c;
					e.sort(W.b);
					const r = Object(W.o)(n, e[0], V()(e));
					return X(o.EditorState.set(t, {
						selection: r
					}), "rows")
				}
			};
			var Pn = (t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent(),
						s = r.getBlockForKey(n.getAnchorKey()),
						i = r.getBlockForKey(n.getFocusKey()),
						[c, a] = Object(W.e)(r, s, i);
					if (!c || c !== a) return t;
					const l = Object(W.g)(s),
						d = Object(W.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(W.f)(l, d),
						h = c.blocks.map(t => {
							const {
								colIndex: n
							} = Object(W.g)(t);
							return u <= n && n <= p ? Object(W.m)(t, {
								alignment: e
							}) : t
						}),
						m = r.getBlockMap(),
						g = r.merge({
							blockMap: m.merge(o.BlockMapBuilder.createFromArray(h)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(t, g, G.b)
				},
				Un = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				Hn = n.n(Un);

			function zn() {
				return (zn = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Wn = (t, e) => n => a.a.createElement(t, zn({}, e, n)),
				qn = Object(Le.f)(Dn.a),
				Vn = Wn(qn, {
					orientation: "up"
				}),
				Gn = Wn(qn, {
					orientation: "right"
				}),
				Yn = Wn(qn, {
					orientation: "left"
				}),
				Qn = Object(Le.f)(Ln.a),
				Jn = Wn(Qn, {
					orientation: "vertical"
				}),
				Xn = Object(Le.f)(An.a),
				Zn = Object(Le.f)(Kn.a),
				$n = Object(Le.f)(Mn.a),
				to = Object(Le.f)(Ie.b),
				eo = g.a.wrapped(Ae.a, "ToolbarContent", Hn.a),
				no = t => a.a.createElement(Me.a, zn({}, t, {
					className: Object(h.a)(Hn.a.formatterButton, t.className),
					tooltipContentClass: Hn.a.tooltip
				}));
			var oo = t => {
					const {
						editorState: e,
						onChange: n
					} = t;
					return a.a.createElement(eo, null, a.a.createElement(no, {
						Icon: Zn,
						onClick: () => n(Pn(e, Nn.e)),
						tooltip: r.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), a.a.createElement(no, {
						Icon: Xn,
						onClick: () => n(Pn(e, Nn.d)),
						tooltip: r.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), a.a.createElement(no, {
						Icon: $n,
						onClick: () => n(Pn(e, Nn.f)),
						tooltip: r.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), a.a.createElement(Ke.c, null), a.a.createElement(no, {
						Icon: Yn,
						onClick: () => n(on(e, "columns", "before")),
						tooltip: r.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), a.a.createElement(no, {
						Icon: Gn,
						onClick: () => n(on(e, "columns", "after")),
						tooltip: r.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), a.a.createElement(no, {
						Icon: Jn,
						onClick: () => n(X(e, "columns")),
						tooltip: r.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), a.a.createElement(Ke.c, null), a.a.createElement(no, {
						Icon: Vn,
						onClick: () => n(on(e, "rows", "before")),
						tooltip: r.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), a.a.createElement(no, {
						Icon: qn,
						onClick: () => n(on(e, "rows", "after")),
						tooltip: r.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), a.a.createElement(no, {
						Icon: Qn,
						onClick: () => n(X(e, "rows")),
						tooltip: r.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), a.a.createElement(Ke.c, null), a.a.createElement(no, {
						Icon: to,
						onClick: () => n(Fn(e) || e),
						tooltip: r.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				ro = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				so = n.n(ro);
			const io = 20,
				co = g.a.div("ActionButton", so.a),
				ao = g.a.div("ToolbarWrapper", so.a),
				lo = t => {
					const e = {};
					if (!t || !document.documentElement) return e;
					const n = t.left - 154.5,
						o = t.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? e.left = -n + io + 2 : o > 0 && (e.left = -o + io - 2), e
				},
				uo = t => {
					t.preventDefault(), t.stopPropagation()
				};
			class po extends c.Component {
				constructor(t) {
					super(t), this.containerElem = null, this.setContainerRef = t => this.containerElem = t, this.onResize = t => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = t => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(t.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const t = window.getSelection();
						if (!t.rangeCount) return void this.hideActionButton();
						const e = t.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(e)) return void this.hideActionButton();
						const o = xn(e);
						if (!o) return void this.hideActionButton();
						const r = kn(o, t.anchorNode);
						if (!r) return void this.hideActionButton();
						const s = kn(o, t.focusNode);
						s ? this.updateActionButtonPosition(r, s) : this.hideActionButton()
					}, this.updateActionButtonPosition = (t, e) => {
						const n = t.getBoundingClientRect(),
							o = e.getBoundingClientRect(),
							r = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - io
							};
						Bn()(this.state.tooltipPosition, r) || this.setState({
							tooltipPosition: r
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = t => {
						this.setState(t => ({
							isToolbarActive: !t.isToolbarActive
						})), uo(t)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), t && t(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: t
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), t && t(null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					const e = t.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					e.getHasFocus() && Object(x.v)(o.RichUtils.getCurrentBlockType(t.editorState)) ? e !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const t = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: e
						} = this.state;
					return a.a.createElement("div", {
						ref: this.setContainerRef
					}, a.a.createElement(In.b, {
						targetPosition: e
					}, a.a.createElement(co, {
						className: t ? so.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: uo,
						onMouseMove: uo
					}, t ? a.a.createElement(ao, {
						style: lo(e)
					}, a.a.createElement(oo, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var ho = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function mo() {
				return (mo = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function go() {
				return new Map
			}
			const fo = a.a.createContext(go());

			function bo(t) {
				class e extends a.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = t => {
							const {
								registry: e
							} = this.props;
							this.elementRef = t, t ? e.set(this.props.entityKey, t) : e.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(t) {
						const {
							registry: e
						} = this.props;
						this.props.entityKey !== t.entityKey && this.elementRef && (e.get(this.props.entityKey) === this.elementRef && e.delete(this.props.entityKey), e.set(t.entityKey, this.elementRef))
					}
					render() {
						return a.a.createElement("span", {
							ref: this.updateElementRef
						}, a.a.createElement(t, this.props))
					}
				}
				return t => a.a.createElement(fo.Consumer, null, n => a.a.createElement(e, mo({}, t, {
					registry: n
				})))
			}
			var yo = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				Eo = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				So = n.n(Eo);
			const Co = {
					strategy: yo.e,
					component: bo(t => {
						const {
							contentState: e
						} = t, n = Object(yo.i)(e), o = e.getEntity(t.entityKey), {
							id: r,
							emoji: s,
							sticker: i
						} = o.getData(), c = n ? i : s;
						return a.a.createElement("span", {
							className: Object(h.a)(So.a.emote, {
								[So.a.sticker]: n
							}),
							title: `:${r}:`,
							style: {
								backgroundImage: `url(${c.path})`,
								width: c.x
							}
						}, t.children)
					})
				},
				Oo = () => Co;
			var ko = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				xo = n("./src/reddit/selectors/gold/powerups/index.ts"),
				To = n("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts"),
				jo = n("./src/higherOrderComponents/makeAsync.tsx"),
				vo = Object(jo.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SpecialMembershipsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx")).then(t => t.default)
				});
			var Ro = t => {
				const {
					subreddit: e
				} = t, n = e.id, o = Object(l.e)(t => Object(ko.b)(t, {
					subredditId: n
				}));
				return Object(l.e)(t => Object(xo.f)(t, {
					subredditId: n
				})) ? a.a.createElement(To.a, t) : a.a.createElement(a.a.Fragment, null, o && a.a.createElement(vo, t))
			};
			const wo = new Set([K.a.LINK]);
			var _o = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				Bo = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				Io = n.n(Bo);
			const Ao = g.a.a("RegularLink", Io.a),
				Ko = {
					strategy: _o.a,
					component: bo(t => {
						const e = t.contentState.getEntity(t.entityKey),
							{
								url: n
							} = e.getData();
						return a.a.createElement(Ao, {
							href: n
						}, t.children)
					})
				},
				Mo = () => Ko;
			var Lo = n("./src/lib/linkMatchers/index.ts");
			const Do = (t, e) => {
					if (e.getType() === x.f) return [];
					return (t.match(e.getText()) || []).filter(t => ((t, {
						index: e,
						lastIndex: n
					}) => {
						for (let o = e; o < n; o++) {
							if (t.getInlineStyleAt(o).contains(x.k.MONOSPACE)) return !1
						}
						return !0
					})(e, t))
				},
				No = (t, e, n, r, s, i) => {
					const c = t.getBlockForKey(e),
						a = o.SelectionState.createEmpty(e),
						l = [],
						d = new Set;
					let u = t;
					const p = n === K.a.USER_MENTION ? K.a.USER_LINK : n,
						h = (t, e, o) => {
							let r = null;
							for (let s = t; s < e; s++) {
								const t = c.getEntityAt(s),
									e = t && u.getEntity(t);
								if (e) {
									if (e.getType() !== n) return;
									r || d.has(t) || (r = t)
								}
							}
							if (r) {
								u.getEntity(r).getData().url !== o && (u = u.mergeEntityData(r, {
									url: o
								}))
							}
							return r || (t => (u = u.createEntity(p, "MUTABLE", {
								url: t
							})).getLastCreatedEntityKey())(o)
						},
						m = (t, e, n) => {
							const r = a.merge({
								anchorOffset: t,
								focusOffset: e
							});
							u = o.Modifier.applyEntity(u, r, n)
						},
						g = (t, e) => m(t, e, null),
						b = u.getBlockForKey(e);
					Do(r, b).forEach(({
						index: t,
						lastIndex: r,
						url: c
					}, p) => {
						const g = h(t, r, c);
						g && (n === K.a.USER_MENTION ? (((t, n, r) => {
							const c = u && u.getBlockForKey(e),
								l = c && c.getText().substr(t, n);
							if (l && l.replace(f.d.mention, "") && l.startsWith(f.d.mention) && f.c.test(l.replace(f.d.mention, ""))) {
								const e = a.merge({
										anchorOffset: t,
										focusOffset: t + f.d.mention.length
									}),
									c = a.merge({
										anchorOffset: t,
										focusOffset: n + f.d.mention.length
									}),
									l = a.merge({
										anchorOffset: n + f.d.mention.length,
										focusOffset: n + f.d.mention.length
									});
								u = Object(z.b)(u, e, f.d.profile), u = o.Modifier.applyEntity(u, c, r), s && i && i(o.EditorState.forceSelection(s, l))
							}
						})(t + p, r + p, g), l.push([t + p, r + p + 1])) : (m(t, r, g), l.push([t, r])), d.add(g))
					});
					let y = 0;
					return b.findEntityRanges(t => {
						const e = t.getEntity();
						return !!e && u.getEntity(e).getType() === n
					}, (t, e) => {
						if (y >= l.length) return void g(t, e);
						const [n, o] = l[y];
						e <= n ? g(t, e) : (t < n && g(t, n - 1), e > o && g(o, e), y++)
					}), u
				},
				Fo = (t, e) => {
					const n = t.getCurrentContent(),
						r = e.getCurrentContent();
					if (n === r) return t;
					const s = n.getBlockMap(),
						i = r.getBlockMap();
					let c = n;
					return s.forEach((e, n) => {
						if (n) {
							if (e === i.get(n)) return;
							c = No(c, n, K.a.SUBREDDIT_LINK, Lo.g), c = No(c, n, K.a.USER_LINK, Lo.j), c = No(c, n, K.a.USER_MENTION, Lo.e, t, e => t = e)
						}
					}), t.getCurrentContent() === c ? t : (c = c.merge({
						selectionAfter: t.getCurrentContent().getSelectionAfter(),
						selectionBefore: t.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(t, {
						currentContent: c
					}))
				};
			var Po = t => {
				const e = t.getCurrentContent();
				return e.getBlockMap().some(t => {
					if ((null == t ? void 0 : t.getType()) === x.a) return !0;
					let n = !1;
					return null == t || t.findEntityRanges(t => {
						const n = t.getEntity();
						return !!n && e.getEntity(n).getType() === K.a.EMOTE
					}, () => n = !0), n
				})
			};
			const Uo = " ".repeat(4),
				Ho = new RegExp("^ {1,4}|\\t"),
				zo = new Set([x.b.CODE_BLOCK]),
				Wo = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = t.shiftKey;
					let i = n,
						c = r.getAnchorOffset(),
						a = r.getFocusOffset();
					if (Object(Y.a)(n, r, (t, e) => {
							const n = t.getType();
							if ("paragraph" === n || !zo.has(n)) return !1;
							let l = null;
							const d = t.getText(),
								u = o.SelectionState.createEmpty(e);
							if (s) {
								const t = d.match(Ho);
								if (t) {
									const e = t[0].length;
									i = z.b(i, u.merge({
										focusOffset: e
									}), ""), l = -e
								}
							} else i = z.a(i, r.isCollapsed() ? r : u, Uo), l = 4;
							null !== l && (e === r.getAnchorKey() && (c += l), e === r.getFocusKey() && (a += l))
						}), i !== n) return i = i.merge({
						selectionAfter: r.merge({
							anchorOffset: c,
							focusOffset: a
						})
					}), t.preventDefault(), o.EditorState.push(e, i, s ? "remove-range" : "insert-characters")
				},
				qo = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return Z(t);
					if (0 === e.getStartOffset()) {
						const o = n.getBlockForKey(e.getEndKey());
						if (Object(x.v)(o.getType())) return t; {
							const e = n.getBlockBefore(o.getKey());
							if (e && Object(x.v)(e.getType())) return t
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const s = r.getBlockForKey(n.getEndKey());
						if (Object(x.o)(s.getType())) return Object(I.d)(t, s.getKey());
						if (Object(x.u)(s.getType())) {
							const e = r.getBlockBefore(s.getKey());
							return o.EditorState.forceSelection(t, Object(A.b)(e))
						}
						if (!Object(I.q)(e) && Object(A.g)(s)) {
							const e = r.getBlockBefore(s.getKey());
							if (e && Object(x.o)(e.getType())) return t = o.EditorState.push(t, Object(A.i)(r, s.getKey()), G.f), o.EditorState.forceSelection(t, Object(A.b)(e))
						}
					}
				})(t, e),
				Vo = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return Z(t); {
						const o = n.getBlockForKey(e.getEndKey());
						if (e.getEndOffset() === o.getLength()) {
							if (Object(x.v)(o.getType())) return t; {
								const e = n.getBlockAfter(o.getKey());
								if (e && Object(x.v)(e.getType())) return t
							}
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent();
					if (!n.isCollapsed()) return;
					const s = r.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === s.getLength()) {
						if (Object(x.o)(s.getType())) return Object(I.d)(t, s.getKey()); {
							const i = r.getBlockAfter(n.getEndKey());
							if (i && Object(x.o)(i.getType())) {
								if (Object(I.q)(e)) return Object(I.d)(t, i.getKey());
								if (Object(A.g)(s)) return t = o.EditorState.push(t, Object(A.i)(r, s.getKey()), G.f), o.EditorState.forceSelection(t, Object(A.b)(i))
							}
						}
					}
				})(t, e),
				Go = t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(t);
					if (!x.c.includes(n)) return !1;
					if (e.getFocusOffset() > 0) {
						if ("\n" === t.getCurrentContent().getBlockForKey(e.getFocusKey()).getText()[e.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var Yo = n("./src/lib/memoizeByReference/index.ts");
			const Qo = Object(Yo.a)(t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return;
					const n = e.getStartOffset(),
						o = t.getCurrentContent(),
						r = o.getBlockForKey(e.getFocusKey());
					if (r.getType() !== x.n) return;
					const s = r.getText();
					if (s.startsWith("1.") && 2 === n) return x.i.ORDERED;
					if (s.startsWith("*") && 1 === n) {
						const t = o.getBlockBefore(r.getKey());
						if (t && t.getType() === x.n && t.getText().startsWith("* ")) return;
						return x.i.UNORDERED
					}
				}),
				Jo = t => {
					const e = Qo(t);
					if (!e) return t;
					const n = Object(ho.a)(t);
					let r = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return r = o.Modifier.setBlockType(r, r.getSelectionAfter(), e), o.EditorState.push(n, r, G.c)
				};
			var Xo = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const Zo = Object(jo.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(t => t.default)
			});

			function $o(t) {
				return a.a.createElement(Zo, t)
			}
			var tr = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				er = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				nr = n.n(er);
			const or = t => a.a.createElement("span", {
					className: nr.a.spoiler
				}, a.a.createElement("span", null), t.children, a.a.createElement("span", null)),
				rr = () => ({
					strategy: tr.a,
					component: or
				});
			var sr = n("./src/reddit/components/FocusableContent/index.tsx"),
				ir = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				cr = n.n(ir);
			const ar = g.a.div("BlockQuoteWrapper", cr.a),
				lr = Object(M.Map)({
					[x.e]: {
						element: "blockquote",
						wrapper: a.a.createElement(ar, null)
					}
				});
			var dr = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				ur = n.n(dr);
			const pr = g.a.div("CodeBlockWrapper", ur.a),
				hr = Object(M.Map)({
					[x.f]: {
						element: "code",
						wrapper: a.a.createElement(pr, null)
					}
				});
			var mr = n("./node_modules/bowser/src/bowser.js"),
				gr = n.n(mr),
				fr = n("./node_modules/lodash/includes.js"),
				br = n.n(fr),
				yr = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Er = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				Sr = n.n(Er);
			const Cr = g.a.div("DropLine", Sr.a),
				Or = g.a.wrapped(In.b, "Tooltip", Sr.a);
			class kr extends c.Component {
				constructor(t) {
					super(t), this.dragCount = 0, this.setContainerRef = t => this.containerRef = t, this.preventDocumentDrop = t => {
						!! function t(e) {
							return e.draggable ? e : e.parentElement ? t(e.parentElement) : null
						}(t.target) || (t.preventDefault(), t.stopPropagation())
					}, this.onDragOver = t => {
						const e = br()(t.dataTransfer.types, Pt);
						if (!e) {
							if (!Object(yr.c)(t.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!e && !Object(yr.c)(t.dataTransfer)) return;
						t.preventDefault();
						try {
							t.dataTransfer.dropEffect = e ? "move" : "copy"
						} catch (s) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const r = Object(yr.b)(n, t);
						if (r) {
							const t = this.containerRef.getBoundingClientRect().left;
							o = {
								top: r.clientY,
								left: t
							}
						}
						Bn()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = t => {
						this.dragCount++
					}, this.onDragLeave = t => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = t => {
						const e = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = gr.a.msie ? null : t.dataTransfer.getData(Pt),
							o = Object(yr.a)(t.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void e();
						const {
							editorState: r
						} = this.props, s = Object(yr.b)(r, t);
						if (!s) return void e();
						t.preventDefault(), t.stopPropagation();
						const i = s.isBefore ? A.a.before : A.a.after;
						n ? this.props.onBlockMove(n, s.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, s.blockKey, i)
						}), e()
					}, this.state = {
						point: null
					}
				}
				componentDidMount() {
					document.addEventListener("drop", this.preventDocumentDrop), document.addEventListener("dragover", this.preventDocumentDrop)
				}
				componentWillUnmount() {
					document.removeEventListener("drop", this.preventDocumentDrop), document.removeEventListener("dragover", this.preventDocumentDrop)
				}
				render() {
					const {
						children: t
					} = this.props, {
						point: e
					} = this.state, n = a.a.Children.only(t);
					return a.a.createElement("div", {
						className: Object(h.a)(Sr.a.container, {
							[Sr.a.hideCaret]: !!e
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, a.a.createElement("div", null, n), a.a.createElement(Or, {
						targetPosition: e
					}, a.a.createElement(Cr, null)))
				}
			}
			var xr = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				Tr = n.n(xr),
				jr = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				vr = n.n(jr),
				Rr = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				wr = n.n(Rr),
				_r = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				Br = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function Ir(t, e, n) {
				const r = Object(o.convertFromHTML)(e, void 0, n);
				if (r) {
					const {
						contentBlocks: e,
						entityMap: n
					} = r;
					if (e) {
						const r = o.BlockMapBuilder.createFromArray(function(t) {
							return t.map(t => Object(x.r)(t.getType()) ? v(t) : t)
						}(e));
						return [t.set("entityMap", n), r]
					}
				}
				return [t, null]
			}

			function Ar(t, e, n) {
				const r = wr()(e),
					s = n && 1 === r.length ? n : o.CharacterMetadata.create(),
					i = Tr.a.processText(r, s).map(t => t.merge({
						type: x.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const Kr = t => {
					if (!t) return null;
					const e = (new DOMParser).parseFromString(t, "text/html").querySelector("[data-reddit-rtjson]");
					return e && e.getAttribute("data-reddit-rtjson")
				},
				Mr = t => {
					if (gt()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const e = t.clipboardData.getData("text/html");
						return {
							text: t.clipboardData.getData("text/plain"),
							html: e
						}
					}
				};

			function Lr(t, e, n, r) {
				const {
					text: s,
					html: i
				} = Mr(n), c = function(t, e, n, o) {
					const r = {
							text: e,
							html: n,
							rtjson: o,
							fragment: null
						},
						s = t.getClipboard();
					return s && n && function(t, e, n, o) {
						return -1 !== e.indexOf(o) || 1 === t.size && t.first().getText() === n
					}(s, n, e, t.getEditorKey()) && (r.fragment = s), r
				}(e, s, i, i && Kr(i));
				e.getClipboard() && !c.fragment && e.setClipboard(null);
				const a = t.getCurrentContent(),
					l = t.getSelection(),
					d = t.getCurrentInlineStyle(),
					u = e.props.blockRenderMap;
				let p = null,
					h = a;
				if (!(p = function(t, e, n) {
						const o = t.getBlockForKey(e.getStartKey()),
							r = t.getBlockForKey(e.getEndKey());
						if (o.getType() === x.f || r.getType() === x.f) return Ar(0, n).map(t => t.merge({
							type: x.f,
							depth: 0
						}))
					}(h, l, c.text)) && c.fragment && (p = c.fragment, [h, p] = Object(_r.b)(h, p), p = Ct(p, r)), !p && c.rtjson && (p = function(t) {
						const e = JSON.parse(t);
						return Object(o.convertFromRaw)(e).getBlockMap()
					}(c.rtjson)), !p && c.html && ([h, p] = Ir(h, c.html, u)), !p && c.text) {
					const t = function(t, e, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: vr()(t, e)
						})
					}(h, l, d);
					p = Ar(0, c.text, t), [h, p] = function(t, e) {
						let n = t,
							o = e;
						return e.forEach(t => {
							const e = t.getText(),
								r = Lo.f.match(e);
							if (!r) return;
							let s = t;
							r.forEach(({
								index: t,
								lastIndex: e,
								url: r
							}) => {
								const i = (n = n.createEntity(K.a.LINK, "MUTABLE", {
									url: r
								})).getLastCreatedEntityKey();
								s = Object(Br.a)(s, t, e, i), o = o.set(s.getKey(), s)
							})
						}), [n, o]
					}(h, p)
				}
				if (p) return h = function(t, e, n) {
					if (n.isEmpty()) return t;
					let o = st(t, e, n) || Ot(t, e, n);
					return o || (o = z.c(t, e, n))
				}(h, l, p), o.EditorState.push(t, h, G.e)
			}
			var Dr = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				Nr = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				Fr = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				Pr = n.n(Fr);
			const Ur = g.a.div("LinkDetailsBox", Pr.a),
				Hr = g.a.a("Link", Pr.a),
				zr = g.a.a("LinkButton", Pr.a);
			var Wr = t => a.a.createElement("div", null, a.a.createElement(Ur, {
					onMouseDown: t => t.preventDefault()
				}, a.a.createElement(Hr, {
					href: t.url,
					target: "_blank"
				}, t.url), a.a.createElement("span", null, " – "), a.a.createElement(zr, {
					onClick: () => t.onStartEdit(),
					role: "button"
				}, r.fbt._("Change", null, {
					hk: "3aOmcP"
				})), a.a.createElement("span", null, " | "), a.a.createElement(zr, {
					onClick: () => t.onRemove(),
					role: "button"
				}, r.fbt._("Remove", null, {
					hk: "3nPt5D"
				})))),
				qr = n("./src/reddit/controls/Input/index.tsx"),
				Vr = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				Gr = n.n(Vr);
			const Yr = g.a.form("EditForm", Gr.a),
				Qr = g.a.wrapped(t => a.a.createElement("div", t, t.children), "LinkEditorBox", Gr.a),
				Jr = g.a.wrapped(qr.a, "Input", Gr.a),
				Xr = g.a.label("Label", Gr.a),
				Zr = g.a.div("HintAndButtonRow", Gr.a),
				$r = g.a.span("InvalidUrlHint", Gr.a),
				ts = g.a.wrapped(Zt.i, "SubmitButton", Gr.a),
				es = t => {
					t && (t.focus(), t.select())
				},
				ns = / /g,
				os = t => t.replace(ns, "%20");
			class rs extends c.Component {
				constructor(t) {
					super(t), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const t = this.state.url.trim(),
							e = os(t),
							n = Object(Lo.i)(e);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus());
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || t)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = t => {
						t.stopPropagation()
					}, this.handleUrlChange = t => {
						const e = t.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(Lo.h)(Lo.f, e) && (n = !1), this.setState({
							url: e,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = t => {
						this.setState({
							displayText: t.target.value
						})
					}, this.handleSubmit = t => {
						this.onEdited(), t.preventDefault()
					}, this.state = {
						url: t.url,
						displayText: t.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(Lo.h)(Lo.f, this.state.displayText) ? es(this.textInputElementRef) : es(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: t
					} = this.props;
					return a.a.createElement(Qr, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, a.a.createElement(Yr, {
						onSubmit: this.handleSubmit
					}, a.a.createElement(Xr, null, r.fbt._("Text", null, {
						hk: "1oock0"
					}), ":", a.a.createElement(Jr, {
						innerRef: t => this.textInputElementRef = t,
						type: "text",
						placeholder: r.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), a.a.createElement(Xr, null, r.fbt._("Link", null, {
						hk: "1Cfzw7"
					}), a.a.createElement(Jr, {
						innerRef: t => this.urlInputElementRef = t,
						type: "text",
						placeholder: r.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), a.a.createElement(Zr, null, a.a.createElement(ts, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, t ? r.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? a.a.createElement($r, null, r.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function ss(t, e, n) {
				const o = t.getCurrentContent(),
					r = {
						text: "",
						url: ""
					};
				if (e.isCollapsed()) return r;
				if (n) r.text = n.entityText, r.url = o.getEntity(n.entityKey).getData().url;
				else {
					r.text = function(t, e) {
						if (t.getStartKey() !== t.getEndKey()) throw new Error("Selection must be in a single block");
						return t.isCollapsed() ? "" : e.getBlockForKey(t.getStartKey()).getText().slice(t.getStartOffset(), t.getEndOffset())
					}(e, t.getCurrentContent());
					const n = Object(Lo.h)(Lo.f, r.text);
					n && (r.url = n.url)
				}
				return r
			}

			function is(t, e) {
				return o.EditorState.set(t, {
					currentContent: o.Modifier.removeInlineStyle(t.getCurrentContent(), e, x.k.HIGHLIGHT)
				})
			}
			class cs extends c.Component {
				constructor(t) {
					super(t), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = t => {
						const {
							editorState: e
						} = this.props;
						let n = t,
							r = e;
						const s = e.getCurrentContent();
						if (!Object(_o.e)(s, t)) return !1;
						const i = Object(Dr.a)(s, t);
						if (i) {
							if (s.getEntity(i.entityKey).getType() !== K.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(Nr.a)());
						return this.state.linkSelection && (r = is(e, this.state.linkSelection)), r = function(t, e) {
							return o.EditorState.set(t, {
								currentContent: o.Modifier.applyInlineStyle(t.getCurrentContent(), e, x.k.HIGHLIGHT)
							})
						}(e, n), this.props.onChange(r, () => {
							this.setState({
								linkSelection: n,
								linkEntity: i
							})
						}), !0
					}, this.hidePopup = () => {
						this.interruptLinkEditing(), this.hideDetailsPopup()
					}, this.showDetailsPopup = () => {
						this.state.isDetailsPopupActive || this.setState({
							isDetailsPopupActive: !0
						})
					}, this.hideDetailsPopup = () => {
						this.state.isDetailsPopupActive && this.setState({
							isDetailsPopupActive: !1
						})
					}, this.updatePosition = () => {
						if (!this.updateTooltipPosition) return;
						const {
							editorState: t
						} = this.props, e = t.getCurrentContent();
						let n;
						if (this.state.linkSelection) {
							const t = Object(Dr.a)(e, this.state.linkSelection);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								n = e && e.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (n = this.lastEditorSelectionClientRect)
						} else {
							const e = Object(_o.c)(t);
							if (e) {
								const t = this.props.entityElementRegistry.get(e.entityKey);
								n = t && t.getBoundingClientRect()
							}
						}
						n && (this.updateTooltipPosition({
							left: n.left,
							top: n.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (t, e) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: r
						} = this.props;
						let s = r;
						n && (n.isCollapsed() || (s = is(r, n)), void 0 !== t && (s = Object(_o.h)(s, n, t, e)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), s !== r && (s = o.EditorState.forceSelection(s, s.getSelection()), this.props.onChange(s)))
					}, this.onLinkEdited = (t, e) => {
						this.handleLink(t, e)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(_o.c)(t);
						e && this.editLinkInSelection(e.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(_o.c)(t);
						e && this.props.onChange(Object(_o.h)(t, e.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: t,
							linkEntity: e
						} = this.state, {
							editorState: n
						} = this.props;
						if (!t) return null;
						const {
							text: o,
							url: r
						} = ss(n, t, e);
						return a.a.createElement(rs, {
							url: r,
							displayText: o,
							isInsertMode: !e,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing
						})
					}, this.renderDetailsPopup = () => {
						const t = Object(_o.c)(this.props.editorState);
						return t && this.isEditorFocused() && this.state.isDetailsPopupActive ? a.a.createElement(Wr, {
							url: t.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink
						}) : null
					}, this.state = {
						isDetailsPopupActive: !1,
						linkSelection: null,
						linkEntity: null
					}, this.api = {
						editLinkInSelection: this.editLinkInSelection,
						hidePopup: this.hidePopup
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					this.api && t && t(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(t, e) {
					e.linkSelection === this.state.linkSelection && t.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					return a.a.createElement(In.b, {
						onSetPositionUpdater: t => this.updateTooltipPosition = t,
						trianglePlacement: In.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var as = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				ls = n.n(as);
			const ds = g.a.ol("OrderedListWrapper", ls.a),
				us = Object(M.Map)({
					[x.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(ds, null)
					}
				});
			var ps = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				hs = n.n(ps);
			const ms = g.a.div("ParagraphWrapper", hs.a),
				gs = Object(M.Map)({
					[x.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: a.a.createElement(ms, null)
					}
				});
			var fs = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx");
			var bs = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				ys = n.n(bs);
			const Es = Object(Yo.a)(() => ({
					[x.k.SUPERSCRIPT]: {
						position: "relative",
						top: "-0.4em",
						fontSize: "0.7em",
						lineHeight: "0.7em"
					},
					[x.k.HIGHLIGHT]: {
						backgroundColor: "#b8e0f9"
					},
					[x.k.UNDERLINE]: {
						textDecoration: "none"
					},
					[x.k.MONOSPACE]: {
						backgroundColor: "var(--newRedditTheme-field)",
						caretColor: "#000",
						color: "var(--newRedditTheme-monospaceColor)",
						fontFamily: "Noto Mono, Menlo, Monaco, Consolas, monospace",
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				Ss = g.a.div("H1", ys.a),
				Cs = g.a.div("H2", ys.a),
				Os = g.a.div("H3", ys.a),
				ks = g.a.div("H4", ys.a),
				xs = g.a.div("H5", ys.a),
				Ts = g.a.div("H6", ys.a),
				js = t => ({
					component: e => a.a.createElement(t, null, a.a.createElement(o.EditorBlock, e)),
					editable: !0
				}),
				vs = {
					[x.g.H1]: js(Ss),
					[x.g.H2]: js(Cs),
					[x.g.H3]: js(Os),
					[x.g.H4]: js(ks),
					[x.g.H5]: js(xs),
					[x.g.H6]: js(Ts)
				},
				Rs = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				ws = () => {
					const t = document.fonts;
					t && t.load && Rs.forEach(e => t.load(e))
				};
			var _s = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Bs = n.n(_s);
			const Is = g.a.ul("UnorderedListWrapper", Bs.a),
				As = Object(M.Map)({
					[x.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(Is, null)
					}
				});
			var Ks = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Ms = n("./node_modules/lodash/debounce.js"),
				Ls = n.n(Ms),
				Ds = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				Ns = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				Fs = n.n(Ns);

			function Ps() {
				return (Ps = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Us = ({
				isFocused: t,
				...e
			}) => a.a.createElement("div", Ps({
				className: Object(h.a)(Fs.a.entry, {
					[Fs.a.mIsFocused]: t
				})
			}, e));
			class Hs extends c.Component {
				constructor(t) {
					super(t), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = t => {
						this.mouseDown = !0, t.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return a.a.createElement(Us, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var zs = n("./src/reddit/helpers/name/index.ts"),
				Ws = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const qs = Object(d.c)({
				subredditSuggestions: (t, e) => {
					const n = Object(Ws.d)(t, e);
					return n ? n.subreddits : []
				}
			});
			class Vs extends c.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.props.subredditSuggestions[t].name)
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.props.subredditSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const t = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t.name), !0
						}
						return !1
					}, this.state = {
						selectedSuggestionIndex: 0
					}, this.requestSubredditAutocomplete = Ls()(this.requestSubredditAutocomplete.bind(this), 200, {
						maxWait: 200
					}), this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.requestSubredditAutocomplete(this.props.substring), this.props.onDropdownApi(this.api)
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && (this.requestSubredditAutocomplete(t.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(t) {
					this.props.onGetSubredditAutocomplete(t)
				}
				render() {
					return this.props.subredditSuggestions.length ? a.a.createElement("div", {
						className: Object(h.a)(Fs.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((t, e) => a.a.createElement(Hs, {
						entry: e,
						isFocused: e === this.state.selectedSuggestionIndex,
						key: t.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(zs.c)(t.name)))) : null
				}
			}
			var Gs = Object(l.b)(qs, (t, e) => ({
					onGetSubredditAutocomplete: e => {
						t(Ds.a(e))
					}
				}))(Vs),
				Ys = n("./src/reddit/selectors/comments.ts");
			const Qs = Object(d.c)({
				commentAuthors: Ys.h
			});
			class Js extends c.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.state.userSuggestions[t])
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.state.userSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const t = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t), !0
						}
						return !1
					}, this.state = {
						userSuggestions: [],
						selectedSuggestionIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.props.onDropdownApi(this.api), this.setState({
						userSuggestions: this.filterUsers(this.props.substring)
					})
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(t.substring)
					})
				}
				filterUsers(t) {
					const {
						commentAuthors: e
					} = this.props;
					return e.filter(e => e.toLowerCase().startsWith(t.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? a.a.createElement("div", {
						className: Object(h.a)(Fs.a.list, this.props.className)
					}, this.state.userSuggestions.map((t, e) => a.a.createElement(Hs, {
						key: e,
						entry: e,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: e === this.state.selectedSuggestionIndex
					}, Object(zs.d)(t)))) : null
				}
			}
			var Xs = Object(l.b)(Qs)(Js),
				Zs = n("./node_modules/lodash/dropRightWhile.js"),
				$s = n.n(Zs),
				ti = n("./node_modules/lodash/flatMap.js"),
				ei = n.n(ti),
				ni = n("./node_modules/lodash/reduceRight.js"),
				oi = n.n(ni),
				ri = n("./node_modules/lodash/trimEnd.js"),
				si = n.n(ri),
				ii = n("./node_modules/lodash/trimStart.js"),
				ci = n.n(ii),
				ai = n("./src/lib/forEachGroup/index.ts");

			function li(t, e) {
				const n = [],
					o = t.withMutations(t => {
						for (; t.size && e(t.first());) n.push(t.first()), t.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var di = n("./src/lib/unicodeUtils/index.ts"),
				ui = n("./src/reddit/helpers/richTextJson/index.ts"),
				pi = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const hi = {
				BOLD: Nn.j.bold,
				ITALIC: Nn.j.italic,
				MONOSPACE: Nn.j.monospace,
				STRIKETHROUGH: Nn.j.strikethrough,
				SUBSCRIPT: Nn.j.subscript,
				SUPERSCRIPT: Nn.j.superscript,
				UNDERLINE: Nn.j.underline
			};
			var mi = (t, e) => gi(t.getBlockMap(), t, e);
			const gi = (t, e, n) => {
					const o = [];
					let r = t.toStack();
					for (; r.size;) {
						const t = r.first(),
							s = t.getType();
						switch (r = r.shift(), s) {
							case x.g.H1:
							case x.g.H2:
							case x.g.H3:
							case x.g.H4:
							case x.g.H5:
							case x.g.H6:
								o.push(Ci(t, e));
								break;
							case x.e: {
								const {
									popped: n,
									stack: s
								} = li(r, t => t.getType() === x.e);
								r = s, o.push(Oi([t, ...n], e));
								break
							}
							case x.f: {
								const {
									popped: e,
									stack: n
								} = li(r, t => t.getType() === x.f);
								r = n, o.push(ki([t, ...e]));
								break
							}
							case x.i.ORDERED:
							case x.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = li(r, t => t.getType() === s);
								r = i, o.push(xi([t, ...n], e));
								break
							}
							case x.l: {
								const {
									popped: n,
									stack: s
								} = li(r, t => Object(x.v)(t.getType()));
								r = s, o.push(Ti([t, ...n], e));
								break
							}
							case x.a: {
								let e = r.first();
								e && Object(x.u)(e.getType()) ? r = r.shift() : e = void 0, o.push(ji(t, e, n));
								break
							}
							case x.n:
							default:
								o.push(Ei(t, e))
						}
					}
					return o
				},
				fi = t => t.reduce((t, e) => e === x.k.UNDERLINE || e === x.k.SUBSCRIPT ? t : t | (hi[e] || 0) | 0, 0),
				bi = (t, e) => {
					const n = [],
						o = Object(di.b)(t);
					return Object(ai.a)(e, {
						keyFn: t => t.getStyle()
					}, (e, r, s, i) => {
						if (r.isEmpty()) return;
						const c = t.slice(s, i),
							a = s + (c.length - ci()(c).length),
							l = i - (c.length - si()(c).length),
							d = l - a,
							u = o[a],
							p = o[l] - u;
						d > 0 && n.push([fi(r), u, p])
					}), n.length ? n : null
				},
				yi = (t, e) => {
					const n = t.getText(),
						o = t.getCharacterList(),
						r = [],
						s = x.d.includes(t.getType()),
						i = x.c.includes(t.getType());
					let c = 0;
					return Object(ai.a)(o, {
						keyFn: (t, o) => {
							const r = t.getEntity();
							return s && t.getStyle().contains(x.k.SPOILER) ? "spoiler" : Object(K.b)(r, e) ? `link-${t.getEntity()}` : "\n" === n[o] ? i ? "linebreak" : "skip" : r && e.getEntity(r).getType() === K.a.EMOTE ? `emote-${c++}` : "text"
						}
					}, (t, s, i, c) => {
						const a = n.slice(i, c),
							l = o.slice(i, c).toList();
						if ("text" === s) {
							const t = bi(a, l);
							r.push(Object(pi.s)(a, t))
						} else if ("spoiler" === s) r.push(Object(pi.n)(a));
						else if (s.startsWith("link-")) {
							const n = e.getEntity(t.getEntity());
							r.push(((t, e, n) => {
								const o = t.getType(),
									r = [K.a.USER_LINK, K.a.USER_MENTION],
									{
										url: s
									} = t.getData(),
									i = e.startsWith("/");
								if (o === K.a.SUBREDDIT_LINK) {
									const t = e.replace(f.e, "");
									return Object(pi.o)(t, i)
								}
								if (r.includes(o)) {
									const t = e.replace(f.a, "");
									return Object(pi.t)(t, i)
								}
								const c = bi(e, n);
								return Object(pi.i)(e, s, c)
							})(n, a, l))
						} else if ("linebreak" === s) r.push(Object(pi.h)());
						else if (s.startsWith("emote-")) {
							const n = e.getEntity(t.getEntity()).getData();
							r.push(Object(pi.e)(n.fullId, n.imageType))
						}
					}), r
				},
				Ei = (t, e) => Object(pi.l)(yi(t, e)),
				Si = t => "text" === t.e ? Object(pi.m)(t.t) : "link" === t.e ? Object(pi.i)(t.t, t.u, null) : t.e === Nn.x ? t.c.map(Si) : t.e === Nn.n ? Object(pi.m)("") : t,
				Ci = (t, e) => Object(pi.f)(x.m[t.getType()], ((t, e) => oi()(ei()(yi(t, e), Si), ([t, ...e], n) => {
					if (!t) return [n];
					const o = e.length ? e : [];
					return t && "raw" === n.e && "raw" === t.e ? [Object(pi.m)(n.t + t.t), ...o] : [n, t, ...o]
				}, []))(t, e)),
				Oi = (t, e) => Object(pi.c)($s()(t.map(t => ((t, e) => t.getText().trim().length ? Ei(t, e) : pi.a)(t, e)), t => t === pi.a)),
				ki = t => Object(pi.d)(t.map(t => Object(pi.m)(t.getText()))),
				xi = (t, e) => {
					if (!t.length) return Object(pi.k)([], !1);
					const n = t[0].getDepth();
					let o = null;
					const r = [];
					let s = [];
					const i = () => null !== o || s.length,
						c = () => {
							const t = [];
							null !== o && (t.push(o), o = null), s.length && (t.push(xi(s, e)), s = []), r.push(Object(pi.j)(t))
						};
					return t.forEach(t => {
						t.getDepth() > n ? s.push(t) : (i() && c(), o = Object(pi.l)(yi(t, e)))
					}), i() && c(), Object(pi.k)(r, t[0].getType() === x.i.ORDERED)
				},
				Ti = (t, e) => {
					const n = [...t].sort(W.b),
						o = n[0],
						{
							colCount: r
						} = Object(W.g)(o),
						s = N()(n, r),
						i = s[0].map(t => {
							const {
								alignment: n
							} = Object(W.g)(t);
							return Object(pi.q)(yi(t, e), n)
						}),
						c = s.slice(1).map(t => t.map(t => Object(pi.p)(yi(t, e))));
					return Object(pi.r)(i, c)
				},
				ji = (t, e, n) => {
					const o = Object(I.h)(t);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: r,
						mediaAsset: s,
						makeGif: i
					} = o, c = e ? e.getText() : "";
					if (r && n) {
						const t = n[r.uploadKey],
							e = t && t.metadata.mimetype || "",
							{
								assetId: s,
								thumbnailAssetId: a
							} = Object(I.f)(o, n);
						return Object(Dt.j)(e) ? Object(pi.b)(s, c) : Object(Dt.k)(e) ? Object(pi.g)(s, c) : Object(pi.u)(s, c, a, i)
					} {
						const {
							assetId: t,
							type: e
						} = s;
						let n;
						switch (e) {
							case I.a.AnimatedImage:
								n = Object(pi.b)(t, c);
								break;
							case I.a.Image:
								n = Object(pi.g)(t, c);
								break;
							case I.a.Video:
								n = Object(pi.u)(t, c);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(ui.f)(t) ? Object(pi.l)([n]) : n
					}
				};
			var vi, Ri = n("./src/reddit/constants/componentSizes.ts"),
				wi = n("./src/reddit/constants/elementIds.ts");
			! function(t) {
				t.Up = "up", t.Down = "down"
			}(vi || (vi = {}));
			var _i = t => {
					const e = window.getSelection().focusNode;
					if (!e || !e.parentElement) return;
					const n = document.getElementById(wi.d),
						o = n || document.documentElement;
					if (!o) return;
					const r = window.innerHeight,
						{
							bottom: s,
							top: i
						} = e.parentElement.getBoundingClientRect(),
						c = n ? 0 : Ri.f + Ri.p;
					t === vi.Up && i < c ? o.scrollBy(0, i - c) : t === vi.Down && s > r && o.scrollBy(0, s - r)
				},
				Bi = n("./src/reddit/models/Product/index.ts"),
				Ii = (t, e, n) => {
					const o = {
						url: n
					};
					return t.createEntity(e, "MUTABLE", o)
				},
				Ai = n("./node_modules/lodash/maxBy.js"),
				Ki = n.n(Ai);
			const Mi = (t, e) => {
				if (!e) return (t => {
					const e = t.id;
					switch (t.e) {
						case Nn.m:
							return {
								assetId: e, type: I.a.Image
							};
						case Nn.a:
							return {
								assetId: e, type: I.a.AnimatedImage
							};
						case Nn.D:
							return {
								assetId: e, type: I.a.Video
							}
					}
				})(t);
				const n = e.id;
				switch (e.e) {
					case Nn.s: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: I.a.Image,
							imageUrl: t.u,
							width: t.x,
							height: t.y
						}
					}
					case Nn.r: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: I.a.AnimatedImage,
							imageUrl: t.gif,
							posterUrl: t.p,
							dashUrl: t.mp4,
							width: t.x,
							height: t.y
						}
					}
					case Nn.t: {
						const {
							isGif: t,
							dashUrl: o,
							hlsUrl: r,
							p: s,
							x: i,
							y: c
						} = e;
						let a;
						if (s) {
							a = Ki()(s, t => t.x).u
						}
						return {
							assetId: n,
							type: I.a.Video,
							isGif: t,
							dashUrl: o,
							hlsUrl: r,
							posterUrl: a,
							width: i,
							height: c
						}
					}
				}
			};

			function Li(t, e, n) {
				const r = t.id,
					s = t.c,
					i = Nn.E(e, r),
					c = Mi(t, i),
					a = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: x.a,
						data: Object(M.Map)({
							mediaAsset: c
						})
					})];
				if (n) {
					const t = Object(A.h)(Object(o.genKey)(), s).merge({
						type: x.j
					});
					a.push(t)
				}
				return a
			}
			const Di = Object.keys(hi),
				Ni = (t, e, n) => {
					switch (e.e) {
						case Nn.u:
							return Wi(t, e.c, x.b.UNSTYLED, n);
						case Nn.k:
							const o = x.h[e.l];
							return Wi(t, e.c || [], o, n);
						case Nn.p:
							return Ui(t, e, n);
						case Nn.b:
							return Fi(t, e, n);
						case Nn.c:
							return void e.c.forEach(e => Wi(t, [e], x.b.CODE_BLOCK, n));
						case Nn.z:
							return Pi(t, e, n);
						case Nn.m:
						case Nn.a:
						case Nn.D:
							return void t.blocks.push(...Li(e, n.mediaMetadataMap, Object(I.q)(n.editorType)))
					}
				},
				Fi = (t, e, n) => {
					e && e.c && e.c.length && e.c.forEach(e => e.e === Nn.u ? Wi(t, e.c, x.b.BLOCK_QUOTE, n) : Ni(t, e, n))
				},
				Pi = (t, e, n) => {
					const {
						h: o,
						c: r
					} = e, s = o.length;
					[o, ...r].forEach((e, r) => e.forEach((e, i) => {
						const {
							c = []
						} = e, {
							a
						} = o[i], l = {
							alignment: a,
							colCount: s,
							colIndex: i,
							rowIndex: r
						};
						Wi(t, c, x.b.TABLE_CELL, n, l)
					}))
				},
				Ui = (t, e, n, o = 0) => {
					const r = e.o ? x.b.ORDERED_LIST : x.b.UNORDERED_LIST;
					e.c.forEach(e => {
						const s = e.c;
						if (!s || !s.length) return;
						const [i, c] = s, a = i.e === Nn.u ? i.c : [];
						Wi(t, a, r, n, void 0, o), c && c.e === Nn.p && Ui(t, c, n, o + 1)
					})
				},
				Hi = {
					[Nn.y]: ["r/", "/r/"],
					[Nn.B]: ["u/", "/user/"],
					[Nn.C]: ["u/", "/user/"],
					[Nn.v]: ["p/", ""],
					[Nn.g]: ["c/", ""]
				},
				zi = {
					[Nn.y]: K.a.SUBREDDIT_LINK,
					[Nn.B]: K.a.USER_LINK,
					[Nn.C]: K.a.USER_MENTION,
					[Nn.v]: K.a.POST_LINK,
					[Nn.g]: K.a.COMMENT_LINK
				},
				Wi = (t, e, n, r, s = {}, i, c = !1) => {
					const a = t.content;
					if (1 === e.length && (e[0].e === Nn.m || e[0].e === Nn.a)) {
						const n = e[0];
						if (Object(ui.f)(n.id)) return void t.blocks.push(...Li(n, r.mediaMetadataMap, Object(I.q)(r.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = qi(e, a, r), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(M.List)(l),
						data: Object(M.fromJS)(s),
						depth: i,
						text: d,
						type: n
					});
					t.content = u || a, c ? t.blocks.unshift(p) : t.blocks.push(p)
				},
				qi = (t, e, n) => {
					let o = e,
						r = "";
					const s = [];
					if (t.forEach(t => {
							const e = Vi(t, o, n);
							o = e.updatedContent || o, r += e.text, s.push(...e.charList)
						}), r.length !== s.length) throw new Error("Characters length mismatch!");
					return {
						charList: s,
						text: r,
						updatedContent: o !== e ? o : void 0
					}
				},
				Vi = (t, e, n) => {
					switch (t.e) {
						case Nn.A: {
							const {
								t: e,
								f: n
							} = t;
							return {
								charList: Gi(e, n),
								text: e
							}
						}
						case Nn.x: {
							const {
								c: r
							} = t, s = qi(r, e, n);
							return s.charList = s.charList.map(t => (t => o.CharacterMetadata.create({
								style: t.getStyle().add(x.k.SPOILER),
								entity: t.getEntity()
							}))(t)), s
						}
						case Nn.v:
						case Nn.g:
						case Nn.w: {
							const {
								t: e
							} = t;
							return {
								charList: Gi(e),
								text: e
							}
						}
						case Nn.y:
						case Nn.B:
						case Nn.C: {
							const [n, o] = Hi[t.e], r = (t.l ? "/" : "") + n + t.t, s = o + t.t, i = Ii(e, zi[t.e], s), c = i.getLastCreatedEntityKey();
							return {
								charList: Gi(r, void 0, c),
								text: r,
								updatedContent: i
							}
						}
						case Nn.o: {
							const {
								t: n,
								u: o,
								f: r
							} = t, s = Ii(e, K.a.LINK, o), i = s.getLastCreatedEntityKey();
							return {
								charList: Gi(n, r, i),
								text: n,
								updatedContent: s
							}
						}
						case Nn.m:
						case Nn.a:
							const {
								id: r
							} = t;
							if (r.startsWith("emote|")) {
								const t = Object(Bi.b)(r),
									o = n.activeEmotes && n.activeEmotes[t];
								if (o) {
									const t = Object(yo.c)(e, o),
										n = t.getLastCreatedEntityKey(),
										r = yo.a;
									return {
										charList: Gi(r, void 0, n),
										text: r,
										updatedContent: t
									}
								}
								const s = `:${t}:`;
								return {
									charList: Gi(s),
									text: s
								}
							}
							return {
								text: "", charList: Gi("")
							};
						default:
							return {
								text: "", charList: Gi("")
							}
					}
				},
				Gi = (t, e, n = null) => {
					const r = o.CharacterMetadata.create({
							entity: n
						}),
						s = Array(t.length).fill(r),
						i = Object(di.a)(t);
					return e && e.forEach(t => {
						const [e, r, c] = t, a = (t => {
							const e = Di.filter(e => !!(hi[e] & t));
							return Object(M.OrderedSet)(e)
						})(e), l = r + c, d = o.CharacterMetadata.create({
							entity: n,
							style: a
						});
						s.fill(d, i[r], i[l])
					}), s
				},
				Yi = (t, e) => {
					t.blocks.length && (t.blocks[0].getType() === x.b.TABLE_CELL && Wi(t, [], x.b.UNSTYLED, e, void 0, void 0, !0), t.blocks[t.blocks.length - 1].getType() === x.b.TABLE_CELL && Wi(t, [], x.b.UNSTYLED, e))
				};
			var Qi = (t, e, n, r) => {
					const s = "string" == typeof t ? JSON.parse(t) : t;
					if (!s || !s.document || !s.document.length) return null;
					const i = {
							editorType: e,
							mediaMetadataMap: n,
							activeEmotes: r ? r.reduce((t, e) => ({
								...t,
								...e.emotes
							}), {}) : void 0
						},
						c = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					s.document.forEach(t => {
						Ni(c, t, i)
					}), 0 === c.blocks.length && Wi(c, [], x.b.UNSTYLED, i), Yi(c, i);
					const a = o.BlockMapBuilder.createFromArray(c.blocks),
						l = o.SelectionState.createEmpty(a.first().getKey());
					return c.content.merge({
						blockMap: a,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				Ji = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Xi = n("./src/reddit/constants/elementClassNames.ts"),
				Zi = n("./src/reddit/constants/keycodes.ts"),
				$i = n("./src/reddit/icons/svgs/Send/index.tsx"),
				tc = n("./src/reddit/selectors/economics.ts"),
				ec = n("./src/reddit/components/RichTextEditor/index.m.less"),
				nc = n.n(ec);

			function oc() {
				return (oc = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			Object(fs.b)({
				draftToRTFJson: mi,
				getMediaCount: I.g,
				getPendingThumbnailUploads: I.i,
				isAllMediaUploaded: I.m
			});
			const rc = "handled",
				sc = "not-handled",
				ic = /^\s*$/,
				cc = 20,
				ac = g.a.wrapped(sr.a, "FocusableContent", nc.a),
				lc = g.a.div("Container", nc.a),
				dc = g.a.wrapped(Ji.a, "CurrentUserIcon", nc.a),
				uc = t => `${S.b}-${t}`,
				pc = Object(l.b)(() => {
					const t = (() => Object(d.a)(t => t.uploads, (t, e) => e.rteState.editorKey, (t, e) => i()(t, t => t.key.startsWith(uc(e)))))();
					return Object(d.c)({
						editorUploads: t,
						emotesSpecialMembershipEnabled: C.d.spEmotes,
						giphySpecialMembershipEnabled: C.d.spGiphy,
						activeEmotes: (t, e) => {
							var n;
							return Object(tc.b)(t, {
								subredditId: null === (n = e.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						},
						shouldShowCommentGifsTooltip: (t, e) => {
							var n;
							return Object(ko.c)(t, {
								subredditId: null === (n = e.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						}
					})
				}, t => ({
					onFetchEditorProducts: e => t(Object(E.e)(e)),
					onTrackMediaDrop: e => t((t, n) => O.o(n(), e)),
					retryUpload: e => t(S.c(e)),
					startUploads: (e, n, o) => t(S.e(e, n, uc(o)))
				}));
			class hc extends c.Component {
				constructor(t) {
					super(t), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(lr, hr, wn, us, gs, As, nn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[T.BREAK_HEADER_ENTITY]: ho.b,
						[T.INSERT_LINE_BREAK]: ho.e,
						[T.REDUCE_LIST_INDENT]: ho.f,
						[T.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: ho.g,
						[T.REMOVE_EXTRA_LIST_ITEM]: ho.h,
						[w.d]: t => Vo(t, this.props.editorType),
						[w.b]: t => qo(t, this.props.editorType),
						[w.f]: ho.d,
						[w.c]: t => Object(ho.c)(x.k.BOLD, t),
						[w.e]: t => Object(ho.c)(x.k.ITALIC, t),
						[w.g]: t => Object(ho.c)(x.k.UNDERLINE, t)
					}, this.setContainerRef = t => {
						const {
							domRef: e
						} = this.props;
						e && e(t), this.setState({
							containerRef: t
						})
					}, this.setFocusableContentRef = t => this.setState({
						focusableContentRef: t
					}), this.rteStateChanged = (t, e) => {
						const n = {
							...this.props.rteState,
							isBound: !0,
							editorState: t
						};
						this.props.onChange(n, e)
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const t = this.editorRef.refs.editor,
							e = t.style.height ? Number.parseInt(t.style.height) : null;
						this.editorHeight !== e && (this.hideTooltips(), this.editorHeight = e, e && this.props.onEditorResize && this.props.onEditorResize(e))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: t
						} = this.props, {
							editorState: e,
							mediaToInsert: n
						} = this.state;
						if (!n) return;
						const {
							files: o,
							blockKey: r,
							insertionMode: s
						} = n, i = o.map(e => t.find(t => t.file === e)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const c = i.filter(t => !!t.metadata.mimetype);
						c.length && this.onChange(Object(I.l)(e, c, r, s))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = t => this.editorRef = t, this.setSuggestionDropdownApi = t => this.suggestionDropdownApi = t, this.setLinksControllerApi = t => this.linksControllerApi = t, this.setTableToolbarControllerApi = t => this.tableToolbarControllerApi = t, this.setEmotesTooltipApi = t => this.emotesTooltipApi = t, this.setGifTooltipApi = t => this.gifTooltipApi = t, this.setSuggestionDropdownPositionUpdater = t => this.updateSuggestionDropdownPosition = t, this.getEditorState = () => this.state.editorState, this.setEditorState = (t, e) => {
						const n = this.state.editorState.getCurrentContent() !== t.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: t
						}, e), this.rteStateChanged(t, n))
					}, this.toolbarSetState = t => {
						const e = t.getInlineStyleOverride();
						let n = t;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), e && (n = o.EditorState.setInlineStyleOverride(n, e))), this.onChange(n)
					}, this.onChange = (t, e) => {
						let n = t;
						n = bn(n, this.state.editorState), n = It(n, this.props.editorType), this.emotesTooltipApi && (n = Object(yo.d)(n, this.state.editorState)), n = Fo(n, this.state.editorState), n = Object(Xo.d)(n, this.state.editorState), this.setEditorState(n, e);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const e = Object(_o.b)(t);
							e && e.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							onFocus: t
						} = this.props;
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), t && t()
					}, this.handleBeforeInput = t => {
						const {
							editorState: e
						} = this.state;
						if (this.isMouseDown) return rc;
						if (Bt(e, t)) return rc;
						let n = function(t, e) {
							const n = t.getSelection(),
								r = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === r) return;
							const s = n.getFocusKey(),
								i = t.getCurrentContent(),
								c = i.getBlockForKey(s),
								a = c.getEntityAt(r - 1),
								l = c.getEntityAt(r);
							if (!(a && (!l || l !== a))) return;
							const d = i.getEntity(a),
								u = wo.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const r = o.Modifier.insertText(i, n, e, t.getCurrentInlineStyle());
								return o.EditorState.push(t, r, "insert-characters")
							}
						}(e, t) || e;
						return (n = hn(n, t) || n) !== e ? (this.onChange(n), rc) : sc
					}, this.keyBindingFN = t => {
						const {
							editorState: e
						} = this.state, {
							submitOnEnter: n
						} = this.props, r = e.getSelection();
						if (t.metaKey && t.keyCode === Zi.a.K) return T.OPEN_LINK_TOOLTIP;
						if (t.keyCode === Zi.a.Space) {
							if (Qo(e)) return T.CONVERT_TO_LIST_ON_SPACE;
							if (Object(_o.d)(e)) return T.LINKIFY_ON_SPACE
						} else if (t.keyCode === Zi.a.Enter) {
							if (t.ctrlKey || t.metaKey || n && !t.shiftKey) return T.SUBMIT;
							if (t.shiftKey && Go(e)) return T.INSERT_LINE_BREAK; {
								const t = this.enterKeyBinding(e);
								if (t) return t
							}
						} else if (t.keyCode === Zi.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return w.h;
							if (r.isCollapsed()) {
								const t = e.getCurrentContent(),
									n = r.getEndKey(),
									o = r.getStartOffset(),
									s = t.getBlockForKey(n),
									i = s.getType();
								if ((Object(x.s)(i) || Object(x.q)(i) || Object(x.p)(i)) && 0 === o && s.getLength() > 0) {
									const e = t.getBlockBefore(n);
									if (!e || e.getType() !== i) return T.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(t)
					}, this.handleKeyCommand = t => {
						const {
							editorState: e
						} = this.state;
						let n = t,
							r = null;
						const s = t => {
							let e = t;
							if (r) {
								const {
									selection: t,
									url: n
								} = r;
								e = Object(_o.f)(e, t, n)
							}
							return this.onChange(e), this.isJustLinkified = !!r, rc
						};
						if (n === T.SUBMIT) this.props.onSubmit();
						else {
							if (n === T.CONVERT_TO_LIST_ON_SPACE) {
								const t = s(Jo(e));
								return this.isJustConvertedToList = !0, t
							}
							if (n === T.LINKIFY_ON_SPACE) return r = Object(_o.d)(e), s(Object(ho.a)(e));
							if (n === T.LINKIFY_ON_ENTER && (r = Object(_o.d)(e), !(n = this.enterKeyBinding(e, !1)))) return s(Object(ho.d)(e))
						}
						if (n === T.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), rc;
						if (n === T.MAKE_PLAIN_BLOCK) {
							return s(Object(ho.i)(x.n, e))
						}
						if (n === T.EXEC_TABLE_ON_ENTER_HANDLER) return s(this.tableOnEnterHandler.handle(e));
						const i = this.transforms[n];
						if (i) {
							const t = i(e);
							if (t) return s(t)
						}
						const c = o.RichUtils.handleKeyCommand(e, n);
						return c ? s(c) : sc
					}, this.handleOnTab = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void t.preventDefault();
						const {
							editorState: e
						} = this.state;
						let n = ln(t, e);
						if (n = n || Wo(t, e)) return void this.onChange(n);
						const r = o.RichUtils.onTab(t, e, 2);
						this.onChange(r)
					}, this.handleOnUpArrow = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void t.preventDefault();
						const e = dn(t, this.state.editorState) || wt(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = vi.Up
					}, this.handleOnDownArrow = t => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void t.preventDefault();
						const e = un(t, this.state.editorState) || _t(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = vi.Down
					}, this.handleReturn = t => {
						const e = vt(this.state.editorState);
						return e ? (this.onChange(e), t.preventDefault(), rc) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (t.preventDefault(), rc) : sc
					}, this.suppressAutocompleteForFocusedLink = () => {
						const t = Object(_o.b)(this.state.editorState);
						t && this.state.suppressAutocompleteForLink !== t.entityKey && this.setState({
							suppressAutocompleteForLink: t.entityKey
						})
					}, this.handleEscape = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = t => {
						this.editorRef && yt(this.state.editorState, this.editorRef, t)
					}, this.handleOnCut = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (!yt(e, this.editorRef, t)) return;
						const n = rt(e) || jt(e) || Object(I.e)(e);
						n && this.onChange(n)
					}, this.handleOnPaste = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(t, e), t.isPropagationStopped()) return;
						const n = Lr(e, this.editorRef, t, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (t, e) => {
						if (!this.props.allowMediaUploads) return void t.stopPropagation();
						const n = t.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								r = e.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: r,
								insertionMode: A.a.after,
								filesSource: y.FileSource.Clipboard
							}), t.stopPropagation()
						}
					}, this.handleOnMouseDown = t => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = t => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (t, e) => rc, this.handleDrop = (t, e, n) => rc, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (t, e) => rc, this.onInternalSuggestionSelected = t => {
						this.onChange(Object(_o.g)(this.state.editorState, t)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = t => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(t)
					}, this.onToolbarGifButtonClick = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(t)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: t
						} = this.state;
						this.linksControllerApi.editLinkInSelection(t.getSelection()) || Object(b.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: t
						} = this.state, {
							onSwitchEditorMode: e
						} = this.props, n = fs.a.toRichTextJSON({
							...this.props.rteState,
							isBound: !0,
							editorState: Object(I.c)(t)
						});
						e && e(k.h.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: t
						} = this.state;
						t && Po(t) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.insertMediaFiles = async t => {
						this.setState({
							mediaToInsert: t
						});
						const {
							files: e,
							filesSource: n
						} = t, o = e.slice(0, cc);
						await this.props.startUploads(o, n, this.props.rteState.editorKey), this.insertValidatedMedia()
					}, this.onRetryUpload = t => {
						this.props.retryUpload(t)
					}, this.onFilesSelect = t => {
						const {
							editorState: e
						} = this.state, n = e.getSelection().getEndKey();
						this.insertMediaFiles({
							files: t,
							blockKey: n,
							insertionMode: A.a.after,
							filesSource: y.FileSource.FileSelector
						})
					}, this.onFilesDrop = (t, e, n) => {
						this.props.onTrackMediaDrop(t), this.insertMediaFiles({
							files: t,
							blockKey: e,
							insertionMode: n,
							filesSource: y.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (t, e, n) => {
						const {
							editorState: o
						} = this.state, r = Object(I.o)(o, t, e, n);
						r && this.onChange(r)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: Ze,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = t => {
						const e = t.getType();
						return e === x.a ? this.getAtomicBlocksRenderConfig() : e in vs ? vs[e] : void 0
					}, this.renderToolbar = t => a.a.createElement(Ke.b, t), this.entityElementRegistry = go(), this.tableOnEnterHandler = new pn;
					const {
						activeEmotes: e,
						editorType: n,
						noBorder: r,
						initialHeight: s,
						initialMinHeight: i,
						rteState: c
					} = t;
					let l;
					c.isBound ? l = c.editorState : Object(Nn.G)(c.initialRTJSON) ? l = this.createInitialState(c.editorKey) : (l = o.EditorState.createWithContent(Qi(c.initialRTJSON, n, c.mediaMetadataMap, e), this.editorDecorators()), l = this.moveSelectionToEnd(l)), this.state = {
						noBorder: r,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: l,
						focusableContentRef: null,
						inited: !1,
						initialHeight: s,
						initialMinHeight: i,
						mediaToInsert: null,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([Oo(), rr(), Mo()])
				}
				moveSelectionToEnd(t) {
					const e = t.getCurrentContent().getBlockMap(),
						n = e.last().getKey(),
						r = e.last().getLength(),
						s = new o.SelectionState({
							anchorKey: n,
							anchorOffset: r,
							focusKey: n,
							focusOffset: r
						});
					return o.EditorState.acceptSelection(t, s)
				}
				createInitialState(t) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: `${t}_initial`
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), m.a.write(ws), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const t = this.editorRef.refs.editor;
						t.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(t, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: t,
						emotesSpecialMembershipEnabled: e,
						giphySpecialMembershipEnabled: n
					} = this.props;
					t && t.id && (e || n) && this.props.onFetchEditorProducts(t.id)
				}
				componentDidUpdate(t, e) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const t = this.entityElementRegistry.get(n.entityKey);
						if (t) {
							const {
								left: e,
								bottom: n,
								height: o
							} = t.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: e,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (_i(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.rteState !== this.props.rteState && t.rteState.isBound && t.rteState.editorState !== this.state.editorState && this.setState({
						editorState: t.rteState.editorState
					})
				}
				shouldComponentUpdate(t, e) {
					if (e !== this.state) return !0;
					if (!(t.rteState.isBound && t.rteState.editorState === this.state.editorState)) return !0;
					return !p()(t, this.props, (t, e, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(t, e = !0) {
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						r = o.getStartKey(),
						s = o.getEndKey(),
						i = o.getEndOffset(),
						c = n.getBlockForKey(r).getType(),
						a = n.getBlockForKey(s),
						l = a.getType(),
						d = i === a.getText().length;
					if (c === x.l || l === x.l) return T.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (e && Object(_o.d)(t)) return T.LINKIFY_ON_ENTER;
						if (Object(x.r)(l) && d) return T.BREAK_HEADER_ENTITY;
						if (Object(x.s)(l)) {
							if (ic.test(a.getText())) return a.getDepth() > 0 ? T.REDUCE_LIST_INDENT : T.REMOVE_EXTRA_LIST_ITEM
						} else if (l === x.e) {
							const t = n.getBlockBefore(s);
							if (t && t.getType() === x.e && ic.test(t.getText()) && ic.test(a.getText())) return T.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === x.f) {
							const t = n.getBlockBefore(s),
								e = n.getBlockAfter(s);
							if (!a.getText() && t && t.getType() === x.f && !t.getText() && (!e || e.getType() !== x.f)) return T.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: t,
						suppressAutocompleteForLink: e
					} = this.state;
					if (!this.isJustAutocompleteSelected && t.getSelection().getHasFocus()) {
						const n = Object(_o.b)(t);
						if (n && n.entityKey !== e) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: t
					} = this.props, e = this.getLinkForAutocomplete();
					return e ? a.a.createElement(In.b, {
						aboveParent: t,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, e.entityText.startsWith(f.f) && a.a.createElement(Gs, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					}), f.a.test(e.entityText) && a.a.createElement(Xs, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					})) : null
				}
				render() {
					const {
						className: t,
						userCanUseGifs: e,
						allowMediaUploads: n = !1,
						dataTestId: s,
						destSubreddit: i,
						editorType: c,
						focusableContentRTEClassName: l,
						hideToolbar: d,
						rteState: u,
						isExpanded: p,
						isOverlay: m,
						isCommentBoxDesignEnabled: g,
						onSubmit: f,
						placeholderText: b,
						shouldShowCommentGifsTooltip: y,
						showSubmitButton: E = !1,
						submitButtonClassName: S,
						toolbarPosition: C = "top",
						renderToolbar: O = this.renderToolbar
					} = this.props, {
						editorKey: k
					} = u, {
						containerRef: x,
						editorState: T,
						mediaToInsert: v,
						confirmModalOpen: w
					} = this.state, _ = this.props.readOnly || !!v, B = j(T), I = this.isEmpty(), A = O({
						allowMediaUploads: n,
						destSubreddit: i,
						editorKey: k,
						editorState: T,
						isOverlay: !!m,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: _,
						onEmoteButtonClick: this.onToolbarEmoteButtonClick,
						onGifButtonClick: this.onToolbarGifButtonClick,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseGifs: !!e
					}), K = !d && (!g || p);
					return a.a.createElement(lc, {
						className: t,
						innerRef: this.setContainerRef
					}, g && a.a.createElement("div", {
						className: nc.a.userIcon
					}, a.a.createElement(dc, null)), a.a.createElement(ac, {
						className: Object(h.a)(l, {
							[nc.a.showSubmitButton]: E,
							[nc.a.mExpanded]: p,
							[nc.a.mRedesign]: g
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, K && "top" === C && A, x && a.a.createElement(po, {
						editorState: T,
						readOnly: _,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: x
					}), a.a.createElement("div", {
						className: Object(h.a)(nc.a.editorWrapper, {
							[nc.a.hasInitialHeight]: !!this.props.initialHeight,
							[nc.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[nc.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? `${this.props.initialHeight}px` : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? `${this.props.initialMinHeight}px` : void 0
						},
						"data-test-id": s,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n                .${Xi.b}[${Xi.d}="${B}-0-0"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '${b}';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              `
						}
					}), a.a.createElement(kr, {
						allowMediaUploads: n && !_,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: T,
						onChange: this.onChange
					}, a.a.createElement(fo.Provider, {
						value: this.entityElementRegistry
					}, a.a.createElement(o.Editor, {
						readOnly: _,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: k,
						editorState: T,
						keyBindingFn: this.keyBindingFN,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						onBlur: this.handleBlur,
						onChange: this.onChange,
						onFocus: this.onFocus,
						onTab: this.handleOnTab,
						onUpArrow: this.handleOnUpArrow,
						onDownArrow: this.handleOnDownArrow,
						onEscape: this.handleEscape,
						spellCheck: !0,
						handleReturn: this.handleReturn,
						customStyleMap: Es()
					})))), K && "bottom" === C && A, a.a.createElement(cs, {
						editorState: T,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), c === Nt.a.Comment && i && a.a.createElement(Ro, {
						editorState: T,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: i
					}), (y || e) && i && a.a.createElement($o, {
						editorState: T,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: i,
						userCanUseGifs: !!e
					}), this.renderInternalLinkSuggestionDropdown(), E && a.a.createElement(Zt.d, {
						"aria-label": r.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(h.a)(S, nc.a.insetSubmitButton, {
							[nc.a.emptyContent]: I,
							[nc.a.focusedContent]: this.isFocused()
						}),
						disabled: I,
						onClick: f,
						tabIndex: -1,
						type: "submit"
					}, a.a.createElement($i.a, null))), w && a.a.createElement(R.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: r.fbt._("Continue", null, {
							hk: "3aoEeD"
						}),
						cancelActionText: r.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: r.fbt._("Switch to Markdown", null, {
							hk: "3zGkKa"
						}),
						modalText: r.fbt._("Switching to markdown will remove any images, gifs or videos from your post.", null, {
							hk: "3rlwkB"
						}),
						trackClick: () => {}
					}))
				}
			}
			e.a = pc(Object(Ks.b)(t => a.a.createElement(hc, oc({
				key: t.rteState.editorKey
			}, t))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(t, e, n) {
			t.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(t, e, n) {
			t.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(t, e, n) {
			t.exports = {
				buttonBaseStyles: "_3R1ajPuzbs2MdbXedj3YXU",
				ControlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				controlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				ButtonsContainer: "dZ3F6qSOhun6ezUwcnbal",
				buttonsContainer: "dZ3F6qSOhun6ezUwcnbal",
				Button: "_2rIEdliEXr7qNb-COL-zuO",
				button: "_2rIEdliEXr7qNb-COL-zuO",
				ErrButton: "_3CUr1530H3uD-ts9tKd9RA",
				errButton: "_3CUr1530H3uD-ts9tKd9RA",
				Status: "jXuqxr-x0kyU3BSfugjwM",
				status: "jXuqxr-x0kyU3BSfugjwM",
				hasError: "_4XwI6tILia1pR9HTda4wv",
				ProgressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				progressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				ProgressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				progressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				ErrorLine: "_3M-thbkBHHvsWjDt8edbhz",
				errorLine: "_3M-thbkBHHvsWjDt8edbhz",
				Component: "_1CqupI5I-zzAInIdLwphQg",
				component: "_1CqupI5I-zzAInIdLwphQg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(t, e, n) {
			t.exports = {
				VideoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				videoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				PosterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				posterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				Poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				Component: "wSihDBKVJH6iP2jdDjRQ6",
				component: "wSihDBKVJH6iP2jdDjRQ6",
				playButton: "il4HPAfKcVtq-WQY-if85"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(t, e, n) {
			t.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(t, e, n) {
			t.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(t, e, n) {
			t.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(t, e, n) {
			t.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "q", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "r", (function() {
				return E
			})), n.d(e, "l", (function() {
				return S
			})), n.d(e, "k", (function() {
				return C
			})), n.d(e, "n", (function() {
				return O
			})), n.d(e, "p", (function() {
				return k
			})), n.d(e, "d", (function() {
				return T
			})), n.d(e, "c", (function() {
				return j
			})), n.d(e, "e", (function() {
				return v
			})), n.d(e, "m", (function() {
				return w
			})), n.d(e, "g", (function() {
				return _
			})), n.d(e, "j", (function() {
				return B
			})), n.d(e, "i", (function() {
				return I
			})), n.d(e, "o", (function() {
				return A
			})), n.d(e, "b", (function() {
				return K
			})), n.d(e, "f", (function() {
				return L
			}));
			var o, r = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./node_modules/lodash/flatten.js"),
				c = n.n(i),
				a = n("./node_modules/lodash/last.js"),
				l = n.n(a),
				d = n("./src/reddit/helpers/media/index.ts"),
				u = n("./src/reddit/helpers/richTextEditor/index.ts"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/Upload/index.ts"),
				m = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				g = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t[t.Image = 0] = "Image", t[t.AnimatedImage = 1] = "AnimatedImage", t[t.Video = 2] = "Video"
			}(o || (o = {}));
			const b = t => t !== u.a.Comment,
				y = t => {
					if (!Object(f.o)(t.getType())) return;
					const e = t.getData(),
						n = e.get("mediaAsset"),
						o = e.get("uploadInfo");
					if (!n && !o) return;
					const r = e.get("thumbnail");
					return {
						makeGif: e.get("makeGif"),
						thumbnail: r,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				E = (t, e, n) => {
					let o = t.getCurrentContent();
					const i = o.getBlockForKey(e),
						c = y(i),
						a = c && c.uploadInfo;
					if (!a) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === c.makeGif && n.thumbnail === c.thumbnail) return t;
					const l = Object(s.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(t => {
							const e = y(t);
							return !!e && !!e.uploadInfo && e.uploadInfo.uploadKey === a.uploadKey
						}).map(t => t.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: t.getSelection()
					}), r.EditorState.push(t, o, m.b)
				},
				S = (t, e, n, o) => {
					let i = t.getCurrentContent();
					const a = c()(e.map(t => {
						const e = Object(d.f)(t.metadata.mimetype),
							n = (t => {
								if (t && t.metadata.videoFirstFrameUrl) {
									return {
										url: t.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(t);
						return [new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.a,
							data: Object(s.Map)({
								uploadInfo: {
									mediaType: e,
									uploadKey: t.key
								},
								thumbnail: n
							})
						}), new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.j
						})]
					}));
					i = Object(g.f)(i, n, a, o);
					const u = r.EditorState.push(t, i, m.e),
						p = l()(a);
					return r.EditorState.forceSelection(u, Object(g.b)(p, !0))
				},
				C = (t, e, n, i, c, a, l, d) => {
					const u = new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.a,
							data: Object(s.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.b)(e, i),
									imageUrl: n,
									width: c,
									height: a
								}
							})
						}),
						h = Object(g.f)(t.getCurrentContent(), l, [u], d);
					let b = r.EditorState.push(t, h, m.e);
					b = r.EditorState.forceSelection(b, Object(g.b)(u, !0));
					const y = u.getKey();
					return b.getCurrentContent().getBlockAfter(y) || (b = K(b, y)), b
				};

			function O(t, e) {
				return t.isCollapsed() && t.getStartKey() === e && 0 === t.getStartOffset() && 0 === t.getEndOffset()
			}

			function k(t, e) {
				const n = t.getCurrentContent().getBlockAfter(e);
				return r.EditorState.forceSelection(t, Object(g.b)(n, !0))
			}
			const x = (t, e) => {
					const n = t.getBlockAfter(e);
					return t = Object(g.i)(t, e), n && Object(f.u)(n.getType()) && (t = Object(g.i)(t, n.getKey())), t
				},
				T = (t, e, n = !0) => {
					let o = t.getCurrentContent();
					o = x(o, e);
					let s = n ? r.EditorState.push(t, o, m.f) : r.EditorState.set(t, {
						currentContent: o
					});
					return s = r.EditorState.forceSelection(s, o.getSelectionAfter())
				},
				j = t => {
					let e = t.getCurrentContent();
					R(e).forEach(t => {
						e = x(e, t.getKey())
					});
					const n = r.EditorState.push(t, e, m.f);
					return r.EditorState.forceSelection(n, e.getSelectionAfter())
				},
				v = t => {
					let e = t.getCurrentContent();
					const n = t.getSelection();
					e = r.Modifier.removeRange(e, n, "forward");
					let o = r.EditorState.push(t, e, m.f);
					return o = r.EditorState.forceSelection(o, e.getSelectionAfter())
				},
				R = t => t.getBlockMap().toSeq().filter(t => !!t && !!y(t)),
				w = (t, e) => t.getBlockMap().toSeq().filter(t => {
					const n = y(t),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || e[o] && e[o].url)
				}).isEmpty(),
				_ = t => {
					const e = R(t),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return e.forEach(t => {
						const e = y(t);
						let r;
						r = e.makeGif ? "gifvideo" : e.uploadInfo && "video" === e.uploadInfo.mediaType || e.mediaAsset && e.mediaAsset.type === o.Video ? "video" : "image", n[r]++, n.total++
					}), n
				},
				B = t => !R(t).isEmpty(),
				I = (t, e) => {
					const n = R(t).map(t => {
						const n = y(t),
							{
								uploadInfo: o,
								thumbnail: r
							} = n;
						if (!o || !r) return;
						const s = M(n),
							i = e[s];
						return i && i.url ? void 0 : {
							...r,
							uploadKey: s
						}
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				A = (t, e, n, o) => {
					let s = t.getCurrentContent();
					const i = s.getBlockForKey(e),
						c = s.getBlockAfter(e),
						a = [i];
					if (c && Object(f.u)(c.getType()) && a.push(c), a.find(t => t.getKey() === n)) return;
					const d = a.reduce((t, e) => t.remove(e.getKey()), s.getBlockMap());
					s = s.set("blockMap", d), s = Object(g.f)(s, n, a, o);
					const u = r.EditorState.push(t, s, m.e);
					return r.EditorState.forceSelection(u, Object(g.b)(l()(a), !0))
				},
				K = (t, e, n = g.a.after) => {
					const o = Object(g.h)(),
						s = Object(g.f)(t.getCurrentContent(), e, [o], n),
						i = r.EditorState.push(t, s, m.e);
					return r.EditorState.forceSelection(i, r.SelectionState.createEmpty(o.getKey()))
				},
				M = t => t.thumbnail && t.uploadInfo ? `${t.uploadInfo.uploadKey}-thumbnail-${t.thumbnail.time}` : "",
				L = (t, e) => {
					let n = "",
						o = "";
					if (t.uploadInfo) {
						const {
							uploadKey: r
						} = t.uploadInfo, s = e[r];
						s && s.url && (n = Object(h.b)(s.url));
						const i = e[M(t)];
						i && i.url && (o = Object(h.b)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(t, e, n) {
			t.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const s = t => t.getStyle().has(r.k.SPOILER);

			function i(t, e, n) {
				const r = t.getCharacterList();
				Object(o.a)(r, {
					keyFn: s
				}, (t, n, o, r) => {
					n && e(o, r)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(t, e, n) {
			t.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(t, e, n) {
			t.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return a
			})), n.d(e, "g", (function() {
				return l
			})), n.d(e, "m", (function() {
				return u
			})), n.d(e, "n", (function() {
				return p
			})), n.d(e, "j", (function() {
				return h
			})), n.d(e, "l", (function() {
				return m
			})), n.d(e, "f", (function() {
				return g
			})), n.d(e, "k", (function() {
				return f
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "i", (function() {
				return S
			})), n.d(e, "e", (function() {
				return C
			})), n.d(e, "o", (function() {
				return O
			})), n.d(e, "d", (function() {
				return k
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = {
					[s.e]: "left",
					[s.f]: "right",
					[s.d]: "center"
				},
				l = t => {
					const e = t.getData();
					return {
						colIndex: e.get("colIndex"),
						rowIndex: e.get("rowIndex"),
						colCount: e.get("colCount"),
						alignment: e.get("alignment")
					}
				},
				d = ["data"],
				u = (t, e) => t.mergeIn(d, e),
				p = (t, e, n) => t.merge({
					text: t.getText().slice(e, n),
					characterList: t.getCharacterList().slice(e, n)
				}),
				h = (t, e, n = "", r) => {
					const s = e.map(t => t.getText()).join(n),
						i = n ? r || o.CharacterMetadata.create() : null,
						c = [];
					return e.forEach(t => {
						c.push(...t.getCharacterList().toArray()), i && e.length > 1 && c.push(i)
					}), t.merge({
						text: s,
						characterList: c
					})
				},
				m = (t, e) => {
					const n = [];
					for (let s = 0; s < e; s++)
						for (let e = 0; e < t; e++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: c.l,
							data: Object(r.Map)({
								colCount: t,
								colIndex: e,
								rowIndex: s
							})
						}));
					return n
				},
				g = (t, e) => ({
					minCol: Math.min(t.colIndex, e.colIndex),
					minRow: Math.min(t.rowIndex, e.rowIndex),
					maxCol: Math.max(t.colIndex, e.colIndex),
					maxRow: Math.max(t.rowIndex, e.rowIndex)
				}),
				f = (t, e) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: r,
						maxRow: s
					} = g(t, e);
					return (t, e) => o <= t && t <= s && n <= e && e <= r
				},
				b = (t, e) => t.rowIndex < e.rowIndex ? -1 : t.rowIndex > e.rowIndex ? 1 : t.colIndex - e.colIndex,
				y = (t, e) => t === e || !(!t || !e) && 0 === b(t, e),
				E = (t, e) => b(l(t), l(e)),
				S = t => {
					if (Object(c.v)(t.getType())) {
						return 0 === l(t).rowIndex
					}
					return !1
				},
				C = (t, e, n) => {
					const o = (e, n) => {
						if (e) {
							const o = Object(i.a)(t, e);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(t, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(c.v)(e.getType()) ? e : null, Object(c.v)(n.getType()) ? n : null)
				},
				O = (t, e, n, o = !1) => {
					const r = {
						isBackward: o
					};
					return e && (r.anchorKey = e.getKey(), r.anchorOffset = o ? e.getLength() : 0), n && (r.focusKey = n.getKey(), r.focusOffset = o ? 0 : n.getLength()), t.merge(r)
				},
				k = t => {
					if (!t.length) return [];
					const e = t[0].length;
					return t.map((t, n) => t.map((t, o) => u(t, {
						rowIndex: n,
						colIndex: o,
						colCount: e
					})))
				}
		},
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(t, e, n) {
			t.exports = {
				Component: "uqOt5KqJAqw5pe-WNxa0a",
				component: "uqOt5KqJAqw5pe-WNxa0a",
				TitleRow: "HEiFtUR3s93dQ2jUWWnxr",
				titleRow: "HEiFtUR3s93dQ2jUWWnxr",
				Close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				CloseWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				closeWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				ThumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				thumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				Image: "_2H32szY9NZ1aKr6j4Ced7u",
				image: "_2H32szY9NZ1aKr6j4Ced7u",
				thumbnail: "_2Ks8P6YD1-8_Ju3IrYpPJf",
				isSelected: "_3oA67AGI49fKcqDP970t4U",
				ButtonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				buttonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				CancelButton: "mBq3crGX9-xOOg-b-1V85",
				cancelButton: "mBq3crGX9-xOOg-b-1V85"
			}
		},
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				i = n("./node_modules/lodash/range.js"),
				c = n.n(i),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/media/index.ts"),
				g = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/components/ThumbnailSelector/index.m.less"),
				E = n.n(y);
			const S = 10,
				C = Object(p.a)(u.a.div("Component", E.a)),
				O = u.a.wrapped(b.a, "TitleRow", E.a),
				k = u.a.wrapped(f.a, "Close", E.a),
				x = u.a.div("CloseWrapper", E.a),
				T = u.a.div("ThumbnailsContainer", E.a),
				j = u.a.img("Image", E.a),
				v = t => l.a.createElement("div", {
					className: Object(d.a)(E.a.thumbnail, Object(g.a)({
						isLoading: t.isLoading
					}), {
						[E.a.isSelected]: t.isSelected
					}),
					onClick: t.onClick,
					ref: t.elementRef
				}, t.thumbnail.url && l.a.createElement(j, {
					src: t.thumbnail.url
				})),
				R = u.a.wrapped(b.a, "ButtonRow", E.a),
				w = h.i,
				_ = u.a.wrapped(h.l, "CancelButton", E.a),
				B = (t, e) => {
					if (1 === t) return [0];
					const n = c()(0, e, e / (t - 1));
					return n.push(e), n.map(t => +t.toFixed(2))
				};
			class I extends l.a.Component {
				constructor(t) {
					super(t), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = t => this.selectedElement = t, this.setThumbnails = s()(t => this.setState({
						thumbnails: t
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = t => {
						this.setState({
							selectedIndex: t
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: t
						} = this.state, e = this.state.thumbnails[t];
						this.props.onSelect({
							time: e.time,
							url: e.url
						})
					};
					const {
						thumbnailsCount: e = S,
						selected: n,
						videoDuration: o
					} = this.props, r = B(e, o).map(t => ({
						time: t,
						url: n && n.time === t ? n.url : void 0
					})), i = n ? r.findIndex(t => n.time === t.time) : -1;
					this.state = {
						thumbnails: r,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(t) {
					this.props.isOpen && !t.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: t
					} = this.state;
					if (this.isThumbnailsAreGenerating || !t.find(t => !t.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const e = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(m.o)(e, this.props.videoSource);
					let o = 0;
					e.currentTime = t[o].time, await Object(m.d)(e, n, e => (t[o].url = e.dataUrl, o++, this.setThumbnails(t), o < t.length ? t[o].time : null)), this.setState({
						thumbnails: t
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: t,
						thumbnails: e
					} = this.state;
					return l.a.createElement(C, {
						withOverlay: !0
					}, l.a.createElement(O, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(x, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(k, null))), l.a.createElement(T, null, e.map((e, n) => l.a.createElement(v, {
						key: n,
						elementRef: n === t ? this.setSelectedElementRef : void 0,
						isLoading: !e.url,
						onClick: () => this.setSelected(n),
						isSelected: n === t,
						thumbnail: e
					}))), l.a.createElement(R, null, l.a.createElement(_, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(w, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			e.a = I
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(t, e, n) {
			t.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const s = (t, e) => Object(r.a)(t, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: e.productId,
							quantity: "1"
						}],
						subredditId: e.subredditId
					}
				}),
				i = (t, e) => Object(r.a)(t, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${e}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return l
			})), n.d(e, "b", (function() {
				return d
			})), n.d(e, "d", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				c = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/communities/${e.subredditId}/me`,
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function d(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: e && e.username
					}
				})
			}

			function u(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: e.trial ? "0" : e.price,
						products: [{
							productId: e.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: e.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: e.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: e.username
						}
					}
				})
			}

			function p(t, e) {
				return Object(i.a)(Object(r.a)(t, [s.a]), {
					endpoint: `${t.apiUrl}/api/info?id=${e.join(",")}`,
					method: "get"
				}).then(t => {
					if (t.ok) {
						const e = t.body.data.children.map(({
							data: t
						}) => Object(a.a)(t)).reduce((t, e) => (t[e.id] = e, t), {});
						return {
							...t,
							body: e
						}
					}
					return t
				})
			}
			async function h(t, e) {
				const n = await Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						...e,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(c.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				r = n.n(o),
				s = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				c = n("./src/reddit/endpoints/governance/community.ts"),
				a = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(t, e, n) {
				const o = {
						subredditId: e,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(t, e) {
						return Object(l.a)(t, {
							method: "get",
							endpoint: `${s.a.metaUrl}/product-collections/${e}?types=badge`
						})
					}(t, e),
					u = Object(c.a)(t, {
						subredditId: e
					}),
					p = Object(a.b)(t, e),
					h = Object(i.c)(t, e, n),
					[m, g, f, b] = await Promise.all([d, u, p, h]);
				if (m.ok ? o.collections = m.body : o.errors.collections = m.error, g.ok) {
					const t = g.body;
					o.subscription = t.specialMemberships, o.communityRaw = t
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, b.ok ? (r()(o.badges, b.body.badges), o.userOwnedBadges = b.body.userOwnedBadges) : o.errors.userBadges = b.error, o
			}
			const u = (t, e) => Object(l.a)(t, {
				endpoint: `${s.a.metaUrl}/products/${e}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(t, e) {
				return Object(s.a)(t, {
					endpoint: `${o.a.metaUrl}/communities/${e.subredditId}/me`,
					method: r.eb.GET
				})
			}
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(t, e, n) {
			"use strict";
			var o;
			n.d(e, "a", (function() {
					return o
				})),
				function(t) {
					t[t.Post = 0] = "Post", t[t.Comment = 1] = "Comment"
				}(o || (o = {}))
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === t.orientation ? "rotate(90, 10, 10)" : ""
			}, r.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), r.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), r.a.createElement("path", {
				d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				c = n.n(i);
			const a = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: a[t.orientation || "down"]
			}, r.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), r.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), r.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			e.a = t => r.a.createElement("svg", {
				className: t.className,
				id: t.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), r.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/selectors/editorContent.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const r = (t, e) => t.creations.api.editor.converting.pending[e || o.k]
		},
		"./src/reddit/selectors/gold/enabledFeatures.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "c", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/selectors/economics.ts"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts");
			const c = Object(o.a)(r.d.spEmotes, s.b, i.f, (t, {
					subredditId: e
				}) => {
					var n;
					return e && (null === (n = t.subreddits.about[e]) || void 0 === n ? void 0 : n.userIsSubscriber) || !1
				}, (t, e, n, o) => {
					if (n && o) return !0;
					const r = !(!e || !Object.keys(e).length);
					return t && r
				}),
				a = Object(o.a)(s.b, i.g, i.h, i.f, (t, e, n, o) => {
					if (o) return [...e, ...n].slice(0, 3);
					let r = [];
					for (const s of t || [])
						if ((r = [...r, ...Object.values(s.emotes)]).length > 3) break;
					return r.slice(0, 3)
				}),
				l = Object(o.a)(r.d.spGiphy, i.q, (t, e) => t || e)
		},
		"./src/reddit/selectors/products.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const r = (t, e) => {
					const n = t.products.models[e];
					if (n && n.type === o.a.Badge) return n
				},
				s = (t, {
					productId: e
				}) => {
					const n = t.products.models[e];
					if (n) {
						const o = n.subredditId,
							r = Object.keys(t.user.ownedBadges[o] || {}),
							s = t.badges.models,
							i = Date.now();
						let c = !1;
						return r.forEach(t => {
							const n = s[t];
							n && n.type === e && n.endsAt > i && (c = !0)
						}), c
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor.855da3bdaf39132db33f.js.map