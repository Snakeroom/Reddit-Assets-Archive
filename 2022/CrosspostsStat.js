// https://www.redditstatic.com/desktop2x/CrosspostsStat.e9d24b44e3b49f8ce3bb.js
// Retrieved at 12/13/2022, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CrosspostsStat"], {
		"./src/reddit/components/CreatorStats/CrosspostsStat.m.less": function(e, t, s) {
			e.exports = {
				expandedCrosspostsStat: "_3lEoTL6D5cTOgAyKCbUHId",
				expandedCrosspostedDestination: "_8DIJfssiMg0HZ4gY6MwCR",
				subredditHoveredName: "_1nv1yL_SWy9nFWxjfau2eP",
				expandedCrosspostedIcon: "_33G0UMckKYc73FTmbRlXNF",
				defaultExpandedIcon: "_1HJkf4p6Votb8o-R6lC7NE",
				subredditName: "_3nbomvObbOOIUxRA98gCHL",
				previewCrosspostsStat: "_1OTX7e2vvxoYOYlYgNlUrT",
				previewCrosspostedIcon: "eUpTr_TIPZQXECxfU_v6",
				defaultPreviewIcon: "_1Zr0nXozb5ARkJPsj0A6B8",
				previewIconsRemainder: "jNBLOYezUbj0Kja0jIiH8"
			}
		},
		"./src/reddit/components/CreatorStats/CrosspostsStat.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				i = s("./src/reddit/endpoints/post/create.ts"),
				c = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/CreatorStats/CrosspostsStat.m.less"),
				b = s.n(m);
			t.default = e => {
				let {
					crosspostedDestinations: t,
					onClick: s,
					isExpanded: m,
					postId: _,
					postViews: O
				} = e;
				const j = Object(l.a)(),
					f = Object(a.f)(),
					S = Object(o.useCallback)((e, t) => {
						const s = f.getState(),
							r = Object(i.f)(e),
							o = t.substring(2),
							n = Object(u.I)(s, o) || Object(p.o)(s, o);
						j(Object(c.a)(_, e, r, n, o, O))
					}, [f, j, _, O]);
				return n.a.createElement("div", {
					className: m ? b.a.expandedCrosspostsStat : b.a.previewCrosspostsStat,
					onClick: s
				}, m ? Object.keys(t).map(e => {
					const s = t[e],
						o = s.postUrl;
					return n.a.createElement("a", {
						className: b.a.expandedCrosspostedDestination,
						key: `expanded-${e}`,
						href: o,
						onClick: () => S(o, e)
					}, n.a.createElement(d.b, {
						className: Object(r.a)(b.a.expandedCrosspostedIcon, {
							[b.a.defaultExpandedIcon]: !s.iconUrl
						}),
						iconUrl: s.iconUrl || void 0
					}), n.a.createElement("span", {
						className: Object(r.a)(b.a.subredditName, b.a.subredditHoveredName)
					}, e))
				}) : n.a.createElement(n.a.Fragment, null, Object.keys(t).slice(0, 2).map(e => {
					const s = t[e];
					return n.a.createElement(d.b, {
						className: Object(r.a)(b.a.previewCrosspostedIcon, {
							[b.a.defaultPreviewIcon]: !s.iconUrl
						}),
						iconUrl: s.iconUrl || void 0,
						key: `preview-${e}`
					})
				}), Object.keys(t).length > 2 && n.a.createElement("span", {
					className: b.a.previewIconsRemainder
				}, `+${Object.keys(t).length-2}`)))
			}
		},
		"./src/reddit/endpoints/post/create.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return S
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return h
			}));
			var r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/Poll/index.ts"),
				m = s("./src/reddit/models/Post/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function O(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const j = e => {
					switch (e.kind) {
						case b.p.CROSSPOST:
							return b.p.CROSSPOST;
						case b.p.LINK:
							return b.p.LINK;
						case b.p.POLL:
							return b.p.POLL;
						case b.p.MEDIA:
							return e.makeGif ? b.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				f = e => {
					switch (e.kind) {
						case b.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case b.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case b.p.LINK:
						case b.p.MEDIA:
							return {
								url: e.url
							};
						case b.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case b.p.POLL:
							return e.poll.type === u.a.Prediction ? {
								duration: 999999,
								end_timestamp: O(e.poll.endDate),
								options: e.poll.options.map(e => e.text),
								prediction: !0,
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							} : {
								duration: Math.floor(e.poll.duration / 864e5),
								options: e.poll.options.map(e => e.text),
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							}
					}
				},
				S = e => {
					const t = Object(l.i)(e.destSubreddit.name);
					return {
						...e.destSubreddit.isProfile ? {
							sr: `u_${t}`,
							submit_type: "profile"
						} : {
							sr: t,
							submit_type: "subreddit"
						},
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? m.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== b.p.POLL ? {
							kind: j(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...f(e),
						...e.kind === b.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === b.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(c.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === b.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				x = e => {
					const t = /comments\/(\w+)\/.*$/.exec(e),
						s = t && t[1];
					return s ? `${o.Nb.Post}_${s}` : ""
				},
				v = async (e, t) => {
					if (!e.ok) return Object(p.b)(e);
					const s = e.body.json.data;
					let o = s.url;
					o || t.kind !== b.p.MEDIA || (o = await ((e, t) => new Promise(s => {
						const r = new WebSocket(e),
							o = e => {
								r.close(), clearTimeout(n), s(e)
							},
							n = setTimeout(() => {
								o("")
							}, t);
						r.onmessage = e => {
							const t = JSON.parse(e.data),
								s = "success" === t.type ? t.payload.redirect : "";
							o(s)
						}, r.onerror = e => {
							o("")
						}
					}))(s.websocket_url, 3e4));
					const n = s.id || x(o),
						a = Object(r.parse)(o).path,
						d = s.drafts_count;
					return {
						...e,
						body: {
							id: n,
							path: a,
							draftsCount: d
						}
					}
				}, I = (e, t) => Object(n.a)(Object(a.a)(e, [d.a]), {
					endpoint: Object(_.a)(Object(i.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: o.ob.POST,
					data: S(t),
					type: "json"
				}).then(e => v(e, t)), h = (e, t) => Object(n.a)(Object(a.a)(e, [d.a]), {
					endpoint: Object(_.a)(Object(i.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
					method: o.ob.POST,
					data: {
						...S(t),
						items: t.galleryItems.map(e => ({
							caption: e.caption,
							outbound_url: e.url,
							media_id: e.assetId
						}))
					},
					type: "json"
				}).then(e => v(e, t));
			t.c = (e, t) => Object(n.a)(Object(a.a)(e, [d.a]), {
				endpoint: Object(_.a)(Object(i.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: o.ob.POST,
				data: S(t)
			}).then(async e => await v(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CrosspostsStat.e9d24b44e3b49f8ce3bb.js.map