// https://www.redditstatic.com/desktop2x/StructuredStyles.7f3912bbc0af406d4d0b.js
// Retrieved at 8/6/2020, 3:30:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["StructuredStyles"], {
		"./src/higherOrderComponents/withImageUploads.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/imageUploads.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/selectors/imageUploads.ts");
			const o = Object(r.c)({
				_imageUploads: i.b
			});

			function d(e, t) {
				return Object(a.b)(o, e => ({
					uploadImage: n => e(t(n)),
					cancelUpload: t => e(Object(s.h)(t))
				}), (function(e, t, n) {
					return Object.assign(Object.assign(Object.assign({}, n), t), {
						getImageUploadsIfModified: function(t) {
							return function(e, t) {
								const n = [];
								let a = !1;
								for (const r of t)
									if (Object(l.i)(r) || e[r.id])
										if (e[r.id]) {
											const t = e[r.id];
											n.push(t), a = a || t !== r
										} else a = !0;
								else n.push(r);
								return a ? n : null
							}(e._imageUploads, t)
						}
					})
				}))(e)
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const a = e => e;

			function r(e, t, n) {
				const [r, s] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: l = a
				} = t || {};
				let {
					start: i = 0,
					end: o = r
				} = t || {};
				if ((i = i < 0 ? 0 : i) >= (o = o > r ? r : o)) return;
				let d = s(i),
					c = l(d, i),
					u = i;
				for (let a = i + 1; a < o; a++) {
					const e = s(a),
						t = l(e, a);
					if (t !== c) {
						if (!1 === n(d, c, u, a)) return;
						c = t, u = a, d = e
					}
				}
				n(d, c, u, o)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "h", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = n("./node_modules/linkify-it/index.js"),
				r = n.n(a),
				s = n("./node_modules/tlds/index.js"),
				l = n.n(s),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./node_modules/lodash/values.js"),
				d = n.n(o);
			const c = e => d()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				h = r()().tlds(l.a).set({
					fuzzyIP: !0
				}),
				p = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				g = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				b = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				E = r()().tlds(l.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				f = h.normalize;
			h.normalize = e => {
				f.call(h, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
					return (E.match(e) || []).filter(e => {
						const n = c(e.text);
						return !n || n && t
					})
				},
				x = e => {
					return [...b.match(e) || [], ...p.match(e) || []].map(e => !c(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				S = e => {
					const t = h.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				o = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(l.b, {
				className: Object(s.a)(e.className, o.a.container, e.text.length >= e.maxChars ? o.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return O
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isNil.js")),
				o = n.n(i),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var c = n("./src/reddit/singleton/EventSystem.ts"),
				u = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
					}
					return n
				};
			const m = Object(l.c)({
				consumers: e => e.jsApi
			});
			class h extends a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: n,
								consumers: a
							} = t,
							r = u(t, ["className", "consumers"]);
						c.a.publish(d.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					o()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					o()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(s.b)(m, {})(h),
				g = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/subreddit.ts");
			const E = (e, t) => {
				const n = Object(g.n)(e, t),
					a = Object(b.I)(e, t);
				return {
					comment: n,
					isModerator: !(!a || !a.name) && !!e.moderatingSubreddits[a.name],
					subredditOrProfile: a
				}
			};
			var f = Object(s.b)(() => Object(l.a)(E, g.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => r.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const v = (e, t) => {
				const n = Object(g.n)(e, t),
					a = Object(b.I)(e, t);
				return {
					comment: n,
					isModerator: !(!a || !a.name) && !!e.moderatingSubreddits[a.name],
					subredditOrProfile: a
				}
			};
			var x = Object(s.b)(() => Object(l.a)(v, e => e))(e => r.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var C = Object(s.b)(() => Object(l.c)({
					subreddit: b.R
				}))(e => r.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				S = n("./src/reddit/selectors/posts.ts");
			var I = Object(s.b)(() => Object(l.c)({
				post: S.M,
				subredditOrProfile: S.Z,
				isModerator: (e, t) => {
					const n = Object(S.Z)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var y = Object(s.b)(() => Object(l.c)({
				subredditOrProfile: (e, t) => Object(S.Z)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const n = Object(S.Z)(e, {
						postId: t.post.id
					});
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var k = Object(s.b)(() => Object(l.c)({
				post: S.M,
				subredditOrProfile: S.Z,
				isModerator: (e, t) => {
					const n = Object(S.Z)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var w = Object(s.b)(() => Object(l.c)({
				subreddit: b.R
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var _ = Object(s.b)(() => Object(l.c)({
				subredditOrProfile: (e, t) => Object(b.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var O = Object(s.b)(() => Object(l.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(b.R)(e, {
						subredditId: n
					}) : null
				}
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/Media/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				image: "_1Wd26c2ichqUxeZVJStEJT"
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/config.ts"),
				l = n("./src/reddit/components/Media/LoadingIcon/index.m.less"),
				i = n.n(l);
			t.a = () => r.a.createElement("img", {
				className: i.a.image,
				src: "".concat(s.a.assetPath, "/img/loading.gif")
			})
		},
		"./src/reddit/components/StructuredStyles/BackgroundPositionInput/index.m.less": function(e, t, n) {
			e.exports = {
				Center: "_1HK0ZCl49BfBKbq2XoFpob",
				center: "_1HK0ZCl49BfBKbq2XoFpob",
				Fill: "_22v-0rKeK2pI-4IlCZ7nMo",
				fill: "_22v-0rKeK2pI-4IlCZ7nMo",
				PositionCenter: "_1M_0e-1Qrm29zKSAy9LXTn",
				positionCenter: "_1M_0e-1Qrm29zKSAy9LXTn",
				PositionLeft: "_3SYwcXTxPqRzvCoCfntbA8",
				positionLeft: "_3SYwcXTxPqRzvCoCfntbA8",
				PositionRight: "_13D9sUZrz6PMEAsaMuQGD-",
				positionRight: "_13D9sUZrz6PMEAsaMuQGD-",
				Tile: "_2ApNPWDHr8rhCgp-Oknej",
				tile: "_2ApNPWDHr8rhCgp-Oknej",
				StyledRadioInput: "_2_Oys-6qnBbrLX6ohG1oLu",
				styledRadioInput: "_2_Oys-6qnBbrLX6ohG1oLu",
				StyledRadioOption: "dspNk2z94quVtuCqNn8M1",
				styledRadioOption: "dspNk2z94quVtuCqNn8M1",
				selected: "_3ihBSoGFIt9n64vbK7KHa4"
			}
		},
		"./src/reddit/components/StructuredStyles/Blade/BladeLink/index.m.less": function(e, t, n) {
			e.exports = {
				FakeLink: "_2VPQcx0BcQjax06lM-xfXn",
				fakeLink: "_2VPQcx0BcQjax06lM-xfXn",
				StyledLink: "_2XQW-ni40O2YdSlPkjdrlg",
				styledLink: "_2XQW-ni40O2YdSlPkjdrlg"
			}
		},
		"./src/reddit/components/StructuredStyles/Blade/InfoLink/index.m.less": function(e, t, n) {
			e.exports = {
				linkContainer: "_3voX79zMk-EbG4uYqspgv4",
				infoIcon: "_3ux47DYRy9s9LA7asXOIAv"
			}
		},
		"./src/reddit/components/StructuredStyles/Blade/QuarantineNotice/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2s4rZ-bVMj9gpOiG0ZQbDc",
				icon: "_3bD0KF3oQul2d37Rf4A_8P"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawer/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_2zkJDbS5-NSVy7UAq2KE2H",
				bladeContainer: "_2zkJDbS5-NSVy7UAq2KE2H",
				BladeCloseButton: "_3uGLQmFblUx8HTQAMyzmTV",
				bladeCloseButton: "_3uGLQmFblUx8HTQAMyzmTV"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BladeContainer", (function() {
				return no
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				l = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				i = n("./node_modules/react-router/esm/react-router.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/ToggleInput/index.m.less"),
				b = n.n(g);
			var E = e => r.a.createElement("div", {
					className: e.className
				}, r.a.createElement("input", {
					className: b.a.input,
					name: e.name,
					value: e.selected ? e.onValue : e.offValue,
					onClick: t => e.onChange(e.selected ? e.offValue : e.onValue),
					readOnly: !0
				})),
				f = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				v = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/components/StructuredStyles/StyledComponents/index.m.less"),
				C = n.n(x);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const I = s.a.wrapped(v.a, "CloseIcon", C.a),
				y = s.a.wrapped(f.a, "ThemedChevron", C.a),
				k = s.a.wrapped(p.f, "Button", C.a),
				w = s.a.wrapped(p.n, "TertiaryButton", C.a),
				_ = s.a.div("SubFormTitle", C.a),
				O = s.a.wrapped(p.i, "SecondaryButton", C.a),
				D = s.a.wrapped(w, "DeleteButton", C.a),
				T = (s.a.section("ModalBody", C.a), s.a.header("ModalHeader", C.a), s.a.h2("ModalTitle", C.a), s.a.div("ModalMain", C.a), s.a.p("ModalText", C.a), s.a.footer("ModalFooter", C.a), e => r.a.createElement(E, S({}, e, {
					className: Object(h.a)(C.a.ToggleInput, {
						[C.a.selected]: !!e.selected
					})
				})));
			s.a.div("DisabledOverlay", C.a);
			var j = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/constants/blade.ts");

			function N(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return {
					pathname: e,
					state: Object.assign(Object.assign({}, t), {
						title: R.f[e]()
					})
				}
			}

			function A(e) {
				switch (e) {
					case "textarea":
					case "button":
					case "subreddit-rules":
					case "calendar":
					case "community-list":
					case "moderators":
						const t = R.j[e]();
						return l.fbt._("{widget type} widget appearance", [l.fbt._param("widget type", t)], {
							hk: "4uRtPH"
						});
					default:
						return R.j[e]()
				}
			}
			var W = n("./src/reddit/helpers/trackers/blade.ts"),
				F = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				B = n("./src/reddit/components/StructuredStyles/Blade/BladeLink/index.m.less"),
				L = n.n(B);
			const U = s.a.span("FakeLink", L.a),
				M = s.a.wrapped(m.a, "StyledLink", L.a),
				q = Object(P.c)(e => {
					const t = () => e.sendEvent(Object(W.b)(e.route));
					return e.disabled ? r.a.createElement(U, {
						onClick: t
					}, e.children) : r.a.createElement(M, {
						to: e.to,
						onClick: t
					}, e.children)
				});
			var V = e => {
					const t = N(e.route),
						n = e.title || t.state.title;
					return r.a.createElement(q, {
						disabled: e.disabled,
						route: e.route,
						to: t
					}, r.a.createElement(j.b, {
						disabled: e.disabled,
						title: e.tooltipText
					}, r.a.createElement(F.a, null, n, r.a.createElement(y, null))))
				},
				K = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				H = n("./src/reddit/components/StructuredStyles/Blade/QuarantineNotice/index.m.less"),
				G = n.n(H);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Q = () => r.a.createElement("div", {
					className: G.a.container
				}, r.a.createElement(K.a, {
					className: G.a.icon
				}), z._("This community has been quarantined, some of your settings may not apply.", null, {
					hk: "3wh0B0"
				})),
				Y = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				Z = n("./src/reddit/actions/modal.ts"),
				J = n("./src/reddit/actions/structuredStyles/index.ts"),
				X = n("./src/higherOrderComponents/asModal/index.tsx"),
				$ = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ee = n("./src/reddit/controls/TextButton/index.tsx");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ne extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClose = () => {
						this.props.toggleModal()
					}, this.handleCancel = () => {
						this.props.onCancel && this.props.onCancel(), this.props.toggleModal()
					}, this.handleSave = () => {
						this.props.onSave(), this.props.toggleModal()
					}
				}
				render() {
					return r.a.createElement($.d, null, r.a.createElement($.h, null, r.a.createElement(F.a, null, r.a.createElement($.p, null, te._("Reset to default styling?", null, {
						hk: "2Ztjzn"
					})), r.a.createElement(ee.a, {
						onClick: this.handleClose
					}, r.a.createElement($.b, null)))), r.a.createElement($.k, null, r.a.createElement($.o, null, te._("Resetting to defaults here will rollback all your past edits to when your community was first created.", null, {
						hk: "3eSsCv"
					}))), r.a.createElement($.f, null, r.a.createElement($.a, {
						onClick: this.handleCancel,
						"data-redditstyle": !0
					}, te._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement($.q, {
						onClick: this.handleSave,
						"data-redditstyle": !0
					}, te._("Reset", null, {
						hk: "DQKTE"
					}))))
				}
			}
			var ae = Object(X.a)(ne),
				re = n("./src/reddit/selectors/activeModalId.ts"),
				se = n("./src/reddit/components/StructuredStyles/ResetAllStylesButton/index.m.less"),
				le = n.n(se);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), oe = s.a.wrapped(w, "TertiaryButton", le.a), de = Object(c.c)({
				activeModalId: re.a
			});
			var ce = Object(o.b)(de, e => ({
					resetStyles: t => {
						e(Object(J.j)(t))
					},
					toggleResetAllStylesModal: () => {
						e(Object(Z.i)("StructuredStyles--Modal--ResetAllStylesModal"))
					}
				}), (e, t, n) => ({
					isResetAllStylesModalOpen: "StructuredStyles--Modal--ResetAllStylesModal" === e.activeModalId,
					resetStyles: () => t.resetStyles(n.subredditId),
					toggleResetAllStylesModal: t.toggleResetAllStylesModal
				}))(Object(P.c)(e => {
					const {
						isResetAllStylesModalOpen: t,
						sendEvent: n,
						resetStyles: a,
						toggleResetAllStylesModal: s
					} = e;
					return r.a.createElement("div", null, t && r.a.createElement(ae, {
						toggleModal: s,
						onSave: () => {
							a(), n(Object(W.g)("reset_done"))
						}
					}), r.a.createElement(oe, {
						onClick: () => {
							s(), n(Object(W.g)("reset"))
						},
						"data-redditstyle": !0
					}, ie._("Reset to Defaults", null, {
						hk: "1Brv0w"
					})))
				})),
				ue = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				me = n("./src/reddit/featureFlags/index.ts"),
				he = n("./src/reddit/selectors/moderatorPermissions.ts"),
				pe = n("./src/reddit/selectors/structuredStyles.ts"),
				ge = n("./src/reddit/selectors/subreddit.ts");
			const be = Object(c.c)({
				chatEnabled: ge.e,
				isImportExportThemesEnabled: me.d.importExportThemes,
				isStylingRestrictedDueToQuarantine: pe.k,
				moderatorPermissions: he.j,
				subreddit: ge.R
			});
			class Ee extends r.a.Component {
				constructor() {
					super(...arguments), this.onGoToModHub = () => {
						const e = this.props.moderatorPermissions && this.props.moderatorPermissions.posts,
							t = "".concat(this.props.subreddit.url, "about/"),
							n = e ? "".concat(t, "modqueue") : t;
						this.props.pushUrl(n)
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(W.j)())
				}
				render() {
					const {
						isImportExportThemesEnabled: e,
						isStylingRestrictedDueToQuarantine: t,
						moderatorPermissions: n,
						subredditId: a,
						title: s
					} = this.props, i = n && n.config, o = t ? l.fbt._("Setting is disabled since this community is quarantined", null, {
						hk: "4luznT"
					}) : void 0;
					return r.a.createElement(ue.k, null, r.a.createElement(ue.n, {
						onClick: this.onGoToModHub
					}, r.a.createElement(Y.a, null), s), t && r.a.createElement(Q, null), i && e && r.a.createElement(ue.o, null, r.a.createElement(ue.m, null, l.fbt._("Themes", null, {
						hk: "OgQbA"
					})), r.a.createElement(V, {
						disabled: t,
						route: "exportImport",
						tooltipText: o
					})), i && r.a.createElement(ue.o, null, r.a.createElement(ue.m, null, l.fbt._("Appearance", null, {
						hk: "4owi7o"
					})), r.a.createElement(u.c, {
						sectionName: "appearance",
						subredditId: a
					}), r.a.createElement(V, {
						disabled: t,
						route: "global",
						tooltipText: o
					}), r.a.createElement(V, {
						disabled: t,
						route: "nameAndIcon",
						tooltipText: o
					}), r.a.createElement(V, {
						disabled: t,
						route: "banner",
						tooltipText: o
					}), r.a.createElement(V, {
						disabled: t,
						route: "menu",
						tooltipText: o
					}), r.a.createElement(V, {
						disabled: t,
						route: "post",
						tooltipText: o
					}), r.a.createElement(V, {
						disabled: !0,
						route: "css",
						title: "CSS",
						tooltipText: l.fbt._("Coming Soon", null, {
							hk: "BytN1"
						})
					}), r.a.createElement(ce, {
						subredditId: a
					})), i && r.a.createElement(ue.o, null, r.a.createElement(ue.m, null, l.fbt._("Structure", null, {
						hk: "3lQsEW"
					})), r.a.createElement(u.c, {
						sectionName: "structure",
						subredditId: a
					}), i && r.a.createElement(V, {
						disabled: t,
						route: "menuLinks",
						tooltipText: o
					}), i && r.a.createElement(V, {
						route: "widgets"
					})))
				}
			}
			var fe = Object(o.b)(be, e => ({
					pushUrl: t => e(Object(d.b)(t))
				}))(Object(P.c)(Ee)),
				ve = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				xe = n("./src/reddit/models/Widgets/index.ts"),
				Ce = n("./src/reddit/selectors/widgets.ts");

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Ie = Object(c.c)({
					isStylingRestrictedDueToQuarantine: pe.k,
					widgetKinds: Ce.j
				}),
				ye = Object(o.b)(Ie),
				ke = e => r.a.createElement(j.b, {
					onClick: () => e.fake ? void 0 : e.onAdd(e.widgetKind),
					disabled: e.fake,
					title: e.fake ? "Coming Soon" : void 0
				}, r.a.createElement(F.a, null, r.a.createElement(ve.a, {
					label: Object(xe.p)(e.widgetKind),
					description: Object(xe.o)(e.widgetKind),
					fake: e.fake
				}), r.a.createElement(y, null)));
			class we extends r.a.Component {
				constructor(e) {
					super(e), this.showAdvanced = e => this.setState({
						showAdvanced: !0
					}), this.state = {
						showAdvanced: !1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(ue.k, null, r.a.createElement(Y.b, {
						breadcrumbs: e.breadcrumbs,
						onNavigate: e.stopEditing
					}), r.a.createElement(ue.m, null, e.title), r.a.createElement(ue.f, null, r.a.createElement(ke, Se({
						widgetKind: "textarea"
					}, e)), !e.widgetKinds.includes("subreddit-rules") && r.a.createElement(ke, Se({
						widgetKind: "subreddit-rules"
					}, e)), !e.isStylingRestrictedDueToQuarantine && r.a.createElement(ke, Se({
						widgetKind: "button"
					}, e)), !e.isStylingRestrictedDueToQuarantine && r.a.createElement(ke, Se({
						widgetKind: "image"
					}, e)), r.a.createElement(ke, Se({
						widgetKind: "community-list"
					}, e)), e.widgetKinds.filter(e => "calendar" === e).length < 2 && r.a.createElement(ke, Se({
						widgetKind: "calendar"
					}, e)), e.widgetKinds.filter(e => "post-flair" === e).length < xe.c && !e.isStylingRestrictedDueToQuarantine && r.a.createElement(ke, Se({
						widgetKind: "post-flair"
					}, e)), t.showAdvanced && r.a.createElement(ke, Se({
						widgetKind: "custom"
					}, e))), !t.showAdvanced && !e.isStylingRestrictedDueToQuarantine && r.a.createElement(ue.f, null, r.a.createElement(w, {
						onClick: this.showAdvanced,
						"data-redditstyle": !0
					}, l.fbt._("Advanced", null, {
						hk: "3EAifd"
					}))))
				}
			}
			var _e = ye(we),
				Oe = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx")),
				De = n("./src/reddit/models/StructuredStyles/index.ts");

			function Te(e) {
				const t = Object(c.c)({
					value: (e, t) => {
						const {
							draft: n
						} = e.structuredStyles, a = Object(De.h)(n);
						return Object(De.k)(a)[t.name]
					}
				});
				return Object(o.b)(t, (e, t) => ({
					onChange: n => e(Object(J.d)({
						[t.name]: n
					}))
				}))(e)
			}
			var je = n("./src/reddit/controls/RadioInput/index.tsx");

			function Pe() {
				return Te(je.a)
			}

			function Re(e) {
				return t => r.a.createElement(e, t)
			}
			Pe();
			const Ne = Pe(),
				Ae = Re(Oe.a),
				We = (Pe(), Re(Oe.a), Pe()),
				Fe = Re(Oe.a),
				Be = Pe(),
				Le = Re(Oe.a),
				Ue = (Re(Oe.a), Re(Oe.a));
			var Me = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx");
			var qe = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "6",
				y: "4",
				width: "8",
				height: "8"
			})));
			var Ve = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "12",
				height: "12"
			})));
			var Ke = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "7",
				y: "7",
				width: "6",
				height: "6"
			})));
			var He = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("rect", {
					stroke: "inherit",
					fill: "none",
					x: "1.5",
					y: "1.5",
					width: "17",
					height: "17",
					rx: "4"
				}), r.a.createElement("rect", {
					fill: "inherit",
					stroke: "none",
					x: "4",
					y: "7",
					width: "6",
					height: "6"
				}))),
				Ge = n("./src/reddit/icons/svgs/PositionRight/index.m.less"),
				ze = n.n(Ge);
			var Qe = e => r.a.createElement("svg", {
					className: Object(h.a)(e.className, ze.a.icon),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("rect", {
					stroke: "inherit",
					fill: "none",
					x: "1.5",
					y: "1.5",
					width: "17",
					height: "17",
					rx: "4"
				}), r.a.createElement("rect", {
					fill: "inherit",
					stroke: "none",
					x: "10",
					y: "7",
					width: "6",
					height: "6"
				}))),
				Ye = n("./src/reddit/icons/svgs/Tile/index.tsx"),
				Ze = n("./src/reddit/components/StructuredStyles/BackgroundPositionInput/index.m.less"),
				Je = n.n(Ze);

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const $e = Pe(),
				et = Re(Me.a),
				tt = e => r.a.createElement(et, Xe({}, e, {
					className: Object(h.a)({
						[Je.a.selected]: e.selected,
						[Je.a.StyledRadioOption]: !0
					})
				}), ((e, t, n) => {
					switch (e) {
						case "tiled":
							return r.a.createElement(Ye.a, {
								className: Je.a.IconStyles
							});
						case "centered":
							return "bannerPositionedImagePosition" === n ? r.a.createElement(Ke, {
								className: Je.a.IconStyles
							}) : r.a.createElement(qe, {
								className: Je.a.IconStyles
							});
						case "cover":
							return r.a.createElement(Ve, {
								className: Je.a.IconStyles
							});
						case "left":
							return r.a.createElement(He, {
								className: Je.a.IconStyles
							});
						case "right":
							return r.a.createElement(Qe, {
								className: Je.a.IconStyles
							});
						default:
							return null
					}
				})(e.value, e.selected, e.name), (e => {
					switch (e) {
						case "cover":
							return l.fbt._("Fill", null, {
								hk: "RAFZ4"
							});
						case "tiled":
							return l.fbt._("Tile", null, {
								hk: "2H83Wg"
							});
						case "centered":
							return l.fbt._("Center", null, {
								hk: "1VDAjK"
							});
						case "left":
							return l.fbt._("Left", null, {
								hk: "1LDLub"
							});
						case "right":
							return l.fbt._("Right", null, {
								hk: "4Ge4UX"
							})
					}
				})(e.value));
			var nt = e => r.a.createElement($e, {
				name: e.name,
				className: Je.a.StyledRadioInput
			}, e.values.map(t => r.a.createElement(tt, {
				key: t,
				value: t,
				name: e.name
			})));
			var at = e => r.a.createElement(ue.f, null, r.a.createElement(k, {
					onClick: e.saveChanges,
					disabled: e.isApiRequestInProgress,
					"data-redditstyle": !0
				}, l.fbt._("Save", null, {
					hk: "1qAtYt"
				})), r.a.createElement(O, {
					onClick: e.revertChanges,
					"data-redditstyle": !0
				}, l.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))),
				rt = n("./src/reddit/icons/fonts/Info/index.tsx"),
				st = n("./src/reddit/components/StructuredStyles/Blade/InfoLink/index.m.less"),
				lt = n.n(st);
			class it extends r.a.Component {
				constructor() {
					super(...arguments), this.viewHelpInfo = () => {
						this.props.sendEvent(e => ({
							source: "styling_blade",
							action: "click",
							noun: "info_help_link"
						}))
					}
				}
				render() {
					return r.a.createElement("a", {
						className: lt.a.linkContainer,
						href: this.props.href,
						onClick: this.viewHelpInfo,
						target: "_blank"
					}, r.a.createElement(rt.a, {
						className: lt.a.infoIcon
					}), this.props.children)
				}
			}
			var ot = Object(P.c)(it);
			const {
				fbt: dt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ct extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClose = () => {
						this.props.toggleModal()
					}, this.handleCancel = () => {
						this.props.onCancel(), this.props.toggleModal()
					}, this.handleSave = () => {
						this.props.onSave(), this.props.toggleModal()
					}
				}
				render() {
					return r.a.createElement($.d, null, r.a.createElement($.h, null, r.a.createElement(F.a, null, r.a.createElement($.p, null, dt._("Save changes before leaving?", null, {
						hk: "2Dr4N3"
					})), r.a.createElement(ee.a, {
						onClick: this.handleClose
					}, r.a.createElement($.b, null)))), r.a.createElement($.k, null, r.a.createElement($.o, null, dt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "4A9yJT"
					}))), r.a.createElement($.f, null, r.a.createElement($.a, {
						onClick: this.handleCancel,
						"data-redditstyle": !0
					}, dt._("Discard", null, {
						hk: "1SiwLl"
					})), r.a.createElement($.q, {
						onClick: this.handleSave,
						"data-redditstyle": !0
					}, dt._("Save", null, {
						hk: "1qAtYt"
					}))))
				}
			}
			var ut = Object(X.a)(ct);
			var mt = e => r.a.createElement("div", null, e.isSaveChangesModalOpen && r.a.createElement(ut, {
				toggleModal: e.toggleSaveChangesModal,
				onSave: e.saveChanges,
				onCancel: e.revertChanges,
				withOverlay: !0
			}), r.a.createElement(Y.b, {
				breadcrumbs: e.breadcrumbs,
				onNavigate: t => {
					e.hasUnsavedChanges ? e.toggleSaveChangesModal() : e.stopEditing(t)
				}
			}), r.a.createElement(ue.m, null, e.title, r.a.createElement(ot, {
				href: e.helpCenterLink
			}, e.title)));
			var ht = Object(o.b)(() => Object(c.c)({
				value: (e, t) => Object(pe.d)(e, t),
				imageUpload: (e, t) => Object(pe.h)(e, t)
			}))(e => {
				let t = e.value;
				return !t && e.imageUpload && (t = e.imageUpload.url), r.a.createElement("div", null, e.render(t))
			});

			function pt(e) {
				return r.a.createElement("div", null, e.render(e.value))
			}

			function gt() {
				return function(e) {
					const t = Object(c.c)({
						value: (e, t) => e.structuredStyles.draft[t.name]
					});
					return Object(o.b)(t)(e)
				}(pt)
			}
			const bt = gt(),
				Et = gt();
			var ft = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx");
			var vt = Te(e => r.a.createElement(ft.b, {
					name: e.name,
					label: e.label || "",
					onChange: t => {
						Array.isArray(t) ? e.onChange(t[0]) : e.onChange(t)
					},
					value: e.value
				})),
				xt = n("./src/reddit/controls/ImageDisplay/index.tsx");
			var Ct = e => r.a.createElement(xt.a, {
				backgroundImage: e.value,
				children: e.children
			});
			var St = Te(e => r.a.createElement(ee.a, {
					onClick: () => e.onChange(""),
					children: e.children
				})),
				It = n("./src/reddit/components/StructuredStyles/UploadedImage/index.tsx");
			var yt = n("./src/reddit/models/Image/index.tsx");
			const {
				fbt: kt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var wt, _t = (wt = e => {
					const t = e.imageUpload && e.imageUpload.kind === yt.b.FailedToUpload ? e.imageUpload.error : "",
						n = !t && !!e.imageUpload && e.imageUpload.kind === yt.b.NotUploaded,
						a = e.isRequestInProgress && !!e.imageUpload && e.imageUpload.kind === yt.b.TempUploaded,
						s = n || a;
					return r.a.createElement(Ct, {
						name: e.name,
						value: e.value || ""
					}, s && r.a.createElement(It.c, null), r.a.createElement(It.a, {
						isHiding: !!s
					}, t && r.a.createElement(It.b, null, kt._("Something went wrong", null, {
						hk: "2xn6Fx"
					})), r.a.createElement(St, {
						name: e.name
					}, r.a.createElement(It.d, null))))
				}, Object(o.b)(() => Object(c.a)(pe.d, pe.h, (e, t) => {
					let n;
					return e && "string" == typeof e ? n = e : t && (n = t.url), {
						value: n,
						imageUpload: t
					}
				}))(wt)),
				Ot = n("./src/reddit/actions/tooltip.ts"),
				Dt = n("./src/reddit/constants/elementIds.ts"),
				Tt = n("./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx");
			const jt = e => "Custom--Color--Input--".concat(e);
			class Pt extends r.a.Component {
				constructor() {
					super(...arguments), this.handleColorPickerOpened = () => {
						this.props.sendEvent(Object(W.d)(this.props.name))
					}, this.handleSystemInputOpened = () => {
						this.props.sendEvent(Object(W.c)("system_color", this.props.name))
					}, this.handleChange = (e, t) => {
						this.props.onChange(e), t ? this.props.sendEvent(Object(W.c)("default_color", this.props.name)) : this.props.sendEvent(Object(W.c)("hex_color", this.props.name))
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.tooltipId || jt(e.name);
					return r.a.createElement(Tt.a, {
						dropdownPosition: e.dropdownPosition,
						onToggleDropdown: e.onToggleDropdown,
						value: e.value,
						includeTransparent: e.includeTransparent,
						isDropdownOpen: e.isDropdownOpen,
						onChange: this.handleChange,
						onColorPickerOpened: this.handleColorPickerOpened,
						onSystemInputOpened: this.handleSystemInputOpened,
						containerId: Dt.a,
						tooltipId: t
					})
				}
			}
			var Rt = Object(P.c)(Pt);
			var Nt = Te(e => r.a.createElement(Rt, e)),
				At = n("./src/reddit/selectors/tooltip.ts"),
				Wt = n("./src/reddit/components/StructuredStyles/LabeledColorInput/index.m.less"),
				Ft = n.n(Wt);
			const Bt = Object(c.c)({
					activeTooltipId: At.a
				}),
				Lt = Object(o.b)(Bt, (e, t) => {
					let {
						name: n
					} = t;
					return {
						onToggleDropdown: () => e(Object(Ot.h)({
							tooltipId: jt(n)
						}))
					}
				}),
				Ut = s.a.wrapped(ue.e, "FormElementTitle", Ft.a),
				Mt = s.a.wrapped(F.a, "ExpandLeft", Ft.a);
			var qt = Lt(e => {
					const t = jt(e.name);
					return r.a.createElement(Mt, null, r.a.createElement(Ut, {
						id: t,
						onClick: e.onToggleDropdown
					}, e.label), r.a.createElement(Nt, {
						isDropdownOpen: e.activeTooltipId === t,
						name: e.name,
						onToggleDropdown: e.onToggleDropdown
					}))
				}),
				Vt = n("./node_modules/lodash/pick.js"),
				Kt = n.n(Vt),
				Ht = n("./src/reddit/actions/exportImportStyles.ts"),
				Gt = n("./src/reddit/actions/apiRequestState.ts"),
				zt = n("./src/reddit/models/ApiRequestState/index.ts"),
				Qt = n("./src/reddit/selectors/apiRequestState.ts");
			const Yt = Object(c.c)({
				apiRequestStates: Qt.a
			});
			class Zt extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						apiRequestId: Object(zt.b)()
					}
				}
				getApiRequestFromProps(e) {
					if (this.state.apiRequestId) return e.apiRequestStates[this.state.apiRequestId]
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.getApiRequestFromProps(e);
					t && t.apiRequestStatus === zt.a.Complete && e.onRequestComplete()
				}
				componentWillUnmount() {
					this.state.apiRequestId && this.props.releaseRequest(this.state.apiRequestId)
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.getApiRequestFromProps(e);
					return e.children(t.apiRequestId, n, function(e) {
						if (!e || e.apiRequestStatus === zt.a.Failed) return !1;
						return !0
					}(n))
				}
			}
			const Jt = Object(o.b)(Yt, e => ({
				releaseRequest: t => {
					e(Object(Gt.g)(t))
				}
			}))(Zt);
			var Xt = Jt;

			function $t() {
				return ($t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const en = "StructuredStyles--Modal--SaveChangesModal",
				tn = "StructuredStyles--Modal--ImportThemesModal";

			function nn(e, t) {
				for (const n in e)
					if (e[n] !== t[n]) return !0;
				return !1
			}

			function an(e, t) {
				const n = Object(c.c)({
						activeModalId: re.a,
						draftStyles: (e, n) => Kt()(e.structuredStyles.draft, t),
						savedStyles: (e, t) => e.structuredStyles.models[t.subredditId],
						subreddit: ge.R,
						isExportPending: pe.e
					}),
					a = Object(o.b)(n, (e, n) => ({
						saveChanges: (t, a) => {
							e(Object(J.k)(t, a, n.paneName, n.apiRequestId))
						},
						toggleSaveChangesModal: () => {
							e(Object(Z.i)(en))
						},
						toggleImportThemesModal: () => {
							e(Object(Z.i)(tn))
						},
						revertChanges: () => {
							e(Object(J.c)(n.subredditId, n.paneName, t)), n.stopEditing()
						},
						revertImport: () => {
							e(Object(J.c)(n.subredditId, n.paneName, t))
						},
						exportStructuredStyles: () => {
							e(Object(Ht.d)(n.subredditId))
						},
						importStructuredStyles: t => e(Object(Ht.e)(t))
					}), (e, t, n) => Object.assign(Object.assign({}, n), {
						hasUnsavedChanges: nn(e.draftStyles, e.savedStyles),
						exportStructuredStyles: t.exportStructuredStyles,
						importStructuredStyles: t.importStructuredStyles,
						isExportPending: e.isExportPending,
						isSaveChangesModalOpen: e.activeModalId === en,
						isImportThemesModalOpen: e.activeModalId === tn,
						subreddit: e.subreddit,
						revertChanges: t.revertChanges,
						revertImport: t.revertImport,
						toggleSaveChangesModal: t.toggleSaveChangesModal,
						toggleImportThemesModal: t.toggleImportThemesModal,
						saveChanges: () => {
							t.saveChanges(n.subredditId, e.draftStyles)
						}
					}))(e);
				return e => r.a.createElement(Xt, {
					onRequestComplete: e.stopEditing
				}, (t, n, s) => r.a.createElement(a, $t({
					apiRequestId: t,
					apiRequestState: n,
					isApiRequestInProgress: s
				}, e)))
			}
			var rn = n("./src/reddit/models/Theme/index.ts");
			const sn = e => {
					switch (e) {
						case "small":
							return l.fbt._("Small • {size}px", [l.fbt._param("size", rn.a[e].toLocaleString())], {
								hk: "2OECjT"
							});
						case "medium":
							return l.fbt._("Medium • {size}px", [l.fbt._param("size", rn.a[e].toLocaleString())], {
								hk: "zwqi5"
							});
						case "large":
							return l.fbt._("Large • {size}px", [l.fbt._param("size", rn.a[e].toLocaleString())], {
								hk: "3ch4JX"
							})
					}
				},
				ln = (e, t) => l.fbt._("Recommended upload size: {width}x{height}px", [l.fbt._param("width", e.toLocaleString()), l.fbt._param("height", t.toLocaleString())], {
					hk: "JkJ4g"
				}),
				on = e => r.a.createElement(ue.a, null, r.a.createElement(ue.e, null, l.fbt._("Hover Image (optional)", null, {
					hk: "2LGckw"
				})), r.a.createElement(ht, {
					name: "secondaryBannerPositionedImage",
					render: t => t ? r.a.createElement(_t, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "secondaryBannerPositionedImage"
					}) : r.a.createElement(vt, {
						label: l.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "secondaryBannerPositionedImage"
					})
				}), r.a.createElement(ue.g, null, ln(4e3, 128))),
				dn = e => r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Mobile banner image", null, {
					hk: "4qNKwo"
				})), r.a.createElement(ue.g, null, l.fbt._("This image will override the banner background image on mobile apps. Removing the mobile banner image will display the banner background image on mobile apps.", null, {
					hk: "2FCdz6"
				})), r.a.createElement(ue.e, null, l.fbt._("Image", null, {
					hk: "T0knK"
				})), r.a.createElement(ht, {
					name: "mobileBannerImage",
					render: t => t ? r.a.createElement(_t, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "mobileBannerImage"
					}) : r.a.createElement(vt, {
						label: l.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "mobileBannerImage"
					})
				}), r.a.createElement(ue.g, null, ln(1600, 480)));
			var cn = an(e => r.a.createElement(ue.k, null, r.a.createElement(mt, e), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Height", null, {
				hk: "2A9oKY"
			})), r.a.createElement(ue.a, null, r.a.createElement(Ne, {
				name: "bannerHeight"
			}, r.a.createElement(Ae, {
				value: "small",
				label: sn("small")
			}), r.a.createElement(Ae, {
				value: "medium",
				label: sn("medium")
			}), r.a.createElement(Ae, {
				value: "large",
				label: sn("large")
			})))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Background", null, {
				hk: "dWBpK"
			})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
				label: l.fbt._("Color", null, {
					hk: "2h4C3E"
				}),
				name: "bannerBackgroundColor"
			})), r.a.createElement(ue.a, null, r.a.createElement(ue.e, null, l.fbt._("Image", null, {
				hk: "1WZQOn"
			})), r.a.createElement(ht, {
				name: "bannerBackgroundImage",
				render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(_t, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "bannerBackgroundImage"
				}), r.a.createElement(ue.d, null, r.a.createElement(nt, {
					name: "bannerBackgroundImagePosition",
					values: ["cover", "tiled"]
				}))) : r.a.createElement(vt, {
					label: l.fbt._("Drag and Drop or Upload Image", null, {
						hk: "3dgtIz"
					}),
					name: "bannerBackgroundImage"
				})
			}), r.a.createElement(ue.g, null, ln(4e3, 128)))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Additional Background Image", null, {
				hk: "e3sfR"
			})), r.a.createElement(ue.a, null, r.a.createElement(ue.e, null, l.fbt._("Image", null, {
				hk: "aQ8qn"
			})), r.a.createElement(ht, {
				name: "bannerPositionedImage",
				render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(_t, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "bannerPositionedImage"
				}), r.a.createElement(on, e), ",", r.a.createElement(ue.d, null, r.a.createElement(nt, {
					name: "bannerPositionedImagePosition",
					values: ["left", "centered", "right"]
				}))) : r.a.createElement(vt, {
					label: l.fbt._("Drag and Drop or Upload Image", null, {
						hk: "3dgtIz"
					}),
					name: "bannerPositionedImage"
				})
			}), r.a.createElement(ue.g, null, ln(4e3, 128)))), r.a.createElement(dn, e), r.a.createElement(at, e)), ["bannerHeight", "bannerPositionedImage", "bannerPositionedImagePosition", "bannerBackgroundColor", "bannerBackgroundImage", "bannerBackgroundImagePosition", "mobileBannerImage", "secondaryBannerPositionedImage"]);
			class un extends r.a.Component {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(), this.props.toggleModal()
					}, this.onSave = () => {
						this.props.onSave(), this.props.toggleModal()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement($.d, null, r.a.createElement($.h, null, r.a.createElement(F.a, null, r.a.createElement($.p, null, e.modalTitle), r.a.createElement(ee.a, {
						onClick: this.props.toggleModal
					}, r.a.createElement($.b, null)))), r.a.createElement($.k, null, r.a.createElement($.o, null, e.modalText)), r.a.createElement($.f, null, r.a.createElement($.a, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, e.onCancelText), r.a.createElement($.q, {
						onClick: this.onSave,
						"data-redditstyle": !0
					}, e.onSaveText)))
				}
			}
			var mn = Object(X.a)(un),
				hn = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts");
			const pn = "ss-file-input",
				gn = () => {};
			class bn extends r.a.Component {
				constructor(e) {
					super(e), this.onExport = () => {
						this.props.exportStructuredStyles(), this.setState({
							hasExportedStyles: !0
						})
					}, this.exportAndImport = () => {
						this.onExport(), this.onOpenFileInput()
					}, this.hasExported = () => {
						this.state.hasExportedStyles ? this.onOpenFileInput() : this.props.toggleImportThemesModal()
					}, this.onFileUpload = e => {
						e && e.target && e.target.files && (this.props.importStructuredStyles(e.target.files[0]), this.setState({
							hasImportedStyles: !0
						}))
					}, this.onImportRevert = () => {
						this.props.revertImport(), this.setState({
							hasImportedStyles: !1
						})
					}, this.state = {
						hasExportedStyles: !1,
						hasImportedStyles: !1
					}
				}
				onOpenFileInput() {
					const e = document.getElementById(pn);
					e && e.click()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(ue.k, null, r.a.createElement(mt, e), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, t.hasImportedStyles ? l.fbt._("Theme preview", null, {
						hk: "VrPgW"
					}) : l.fbt._("Themes", null, {
						hk: "TXVbY"
					})), r.a.createElement(ue.g, null, t.hasImportedStyles ? l.fbt._("This is a preview of your imported theme. Saving theme will overwrite existing community theme.", null, {
						hk: "27cUDS"
					}) : l.fbt._("Generate a .zip file to allow you to save your community's theme or apply other themes. A theme contains appearance settings in:", null, {
						hk: "Yq7un"
					})), e.isImportThemesModalOpen && r.a.createElement(mn, {
						modalText: t.hasImportedStyles ? l.fbt._("Applying new theme will overwrite the current theme styling. This action cannot be undone.", null, {
							hk: "2N7zl7"
						}) : l.fbt._("Importing a new theme will overwrite your existing theme. Do you wish to export your current theme before importing a new one?", null, {
							hk: "3j1wkn"
						}),
						modalTitle: t.hasImportedStyles ? l.fbt._("Apply theme over existing theme?", null, {
							hk: "2QPUly"
						}) : l.fbt._("Export current theme before import?", null, {
							hk: "1ChWsN"
						}),
						onCancel: t.hasImportedStyles ? gn : this.onOpenFileInput,
						onCancelText: t.hasImportedStyles ? l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}) : l.fbt._("Continue without export", null, {
							hk: "2uFUDz"
						}),
						onSave: t.hasImportedStyles ? e.saveChanges : this.exportAndImport,
						onSaveText: t.hasImportedStyles ? l.fbt._("Apply styles", null, {
							hk: "2IoGFk"
						}) : l.fbt._("Export", null, {
							hk: "2kv7Vl"
						}),
						toggleModal: e.toggleImportThemesModal
					}), t.hasImportedStyles ? r.a.createElement(a.Fragment, null, r.a.createElement(k, {
						onClick: this.props.toggleImportThemesModal,
						"data-redditstyle": !0
					}, l.fbt._("Apply styles", null, {
						hk: "3GgTTA"
					})), r.a.createElement(O, {
						onClick: this.onImportRevert,
						"data-redditstyle": !0
					}, l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))) : r.a.createElement(a.Fragment, null, r.a.createElement("ul", null, r.a.createElement(ue.j, null, "-", " ", l.fbt._("Color theme", null, {
						hk: "UeaQk"
					})), r.a.createElement(ue.j, null, "-", " ", l.fbt._("Banner", null, {
						hk: "2uppls"
					})), r.a.createElement(ue.j, null, "- ", l.fbt._("Menu", null, {
						hk: "3ETBC"
					})), r.a.createElement(ue.j, null, "-", " ", l.fbt._("Posts (excluding post flair templates)", null, {
						hk: "4GEeVq"
					}))), r.a.createElement(w, {
						onClick: this.onExport,
						"data-redditstyle": !0,
						disabled: e.isExportPending
					}, l.fbt._("Export theme", null, {
						hk: "13ZJb8"
					})), r.a.createElement(w, {
						onClick: this.hasExported,
						"data-redditstyle": !0
					}, l.fbt._("Add new theme", null, {
						hk: "1SC71"
					})), r.a.createElement(hn.g, {
						id: "ss-file-input",
						type: "file",
						onChange: this.onFileUpload
					}))))
				}
			}
			var En = an(bn, ["menuPosition", "bannerCommunityNameFormat", "bannerShowCommunityIcon", "bannerHeight", "postVoteIcons", "submenuBackgroundStyle", "backgroundImagePosition", "bannerBackgroundImagePosition", "bannerPositionedImagePosition", "postBackgroundImagePosition", "postPlaceholderImagePosition", "menuBackgroundOpacity", "backgroundImage", "bannerBackgroundImage", "bannerPositionedImage", "communityIcon", "menuBackgroundImage", "postBackgroundImage", "postDownvoteIconActive", "postDownvoteIconInactive", "postPlaceholderImage", "postUpvoteIconActive", "postUpvoteIconInactive", "secondaryBannerPositionedImage", "bannerBackgroundColor", "bannerOverlayColor", "menuBackgroundColor", "menuLinkColorActive", "menuLinkColorInactive", "menuLinkColorHover", "mobileKeyColor", "sidebarWidgetBackgroundColor", "sidebarWidgetHeaderColor", "submenuBackgroundColor", "backgroundColor", "highlightColor", "postBackgroundColor", "postDownvoteCountColor", "postTitleColor", "postUpvoteCountColor", "primaryColor"]),
				fn = n("./src/reddit/controls/Typography/index.tsx");
			var vn = an(e => r.a.createElement(ue.k, null, r.a.createElement(mt, e), r.a.createElement(fn.c, null, l.fbt._("These community styling options will also display in Reddit apps.", null, {
					hk: "34bghj"
				})), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Theme Colors", null, {
					hk: "10yzRc"
				})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Base", null, {
						hk: "1qRNsV"
					}),
					name: "primaryColor"
				})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Highlight", null, {
						hk: "1xLPh3"
					}),
					name: "highlightColor"
				}))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Body Background", null, {
					hk: "22gpXW"
				})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Color", null, {
						hk: "XRgby"
					}),
					name: "backgroundColor"
				})), r.a.createElement(ue.a, null, r.a.createElement(ue.e, null, l.fbt._("Image", null, {
					hk: "34rPbo"
				})), r.a.createElement(ht, {
					name: "backgroundImage",
					render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(_t, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "backgroundImage"
					}), r.a.createElement(ue.d, null, r.a.createElement(nt, {
						name: "backgroundImagePosition",
						values: ["cover", "tiled", "centered"]
					}))) : r.a.createElement(vt, {
						label: l.fbt._("Drag and Drop or Upload Image", null, {
							hk: "30Hu5J"
						}),
						name: "backgroundImage"
					})
				}))), r.a.createElement(at, e)), ["primaryColor", "highlightColor", "backgroundColor", "backgroundImage", "backgroundImagePosition"]),
				xn = n("./src/reddit/actions/widgets/index.ts");
			const Cn = "blade_leave_menu";
			var Sn = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				In = n("./src/reddit/icons/svgs/Trash/index.tsx"),
				yn = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				kn = n("./src/reddit/components/StructuredStyles/CancelApplyButtons/index.m.less"),
				wn = n.n(kn);
			const _n = s.a.wrapped(In.a, "TrashIcon", wn.a),
				On = s.a.wrapped(k, "PrimaryButton", wn.a),
				Dn = s.a.wrapped(O, "SecondaryButton", wn.a),
				Tn = s.a.div("ButtonRow", wn.a);
			var jn = e => r.a.createElement(yn.a, null, e.onDelete && r.a.createElement("span", {
					onClick: e.onDelete
				}, r.a.createElement(_n, null)), r.a.createElement(Tn, null, e.onCancel && e.cancelText && r.a.createElement(Dn, {
					"data-redditstyle": !0,
					children: e.cancelText,
					onClick: e.onCancel,
					disabled: e.disabled
				}), e.onApply && e.applyText && r.a.createElement(On, {
					"data-redditstyle": !0,
					children: e.applyText,
					onClick: e.onApply,
					disabled: e.disabled || e.invalid
				}))),
				Pn = n("./src/reddit/components/StructuredStyles/DragItem/index.tsx"),
				Rn = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Nn = n("./src/reddit/components/StructuredStyles/EditItem/index.m.less"),
				An = n.n(Nn);
			const Wn = s.a.wrapped(Rn.a, "PencilIcon", An.a);
			var Fn = e => r.a.createElement(j.b, {
					disabled: e.disabled,
					onClick: e.disabled ? void 0 : e.onClick
				}, r.a.createElement(F.a, null, r.a.createElement("div", null, e.children), r.a.createElement(Wn, {
					className: Object(h.a)({
						[An.a.disabled]: e.disabled
					})
				}))),
				Bn = n("./src/reddit/components/StructuredStyles/LabeledColorPicker/index.m.less"),
				Ln = n.n(Bn);
			const Un = Object(c.c)({
					activeTooltipId: At.a
				}),
				Mn = Object(o.b)(Un, (e, t) => {
					let {
						name: n
					} = t;
					return {
						onToggleDropdown: () => e(Object(Ot.h)({
							tooltipId: jt(n)
						}))
					}
				}),
				qn = s.a.wrapped(ue.e, "FormElementTitle", Ln.a),
				Vn = s.a.wrapped(F.a, "ExpandLeft", Ln.a);
			var Kn = Mn(e => {
					const t = jt(e.name);
					return r.a.createElement(Vn, null, r.a.createElement(qn, {
						id: t,
						onClick: e.onToggleDropdown
					}, e.label), r.a.createElement(Rt, {
						includeTransparent: e.includeTransparent,
						isDropdownOpen: e.activeTooltipId === t,
						name: e.name,
						onChange: e.onChange,
						onToggleDropdown: e.onToggleDropdown,
						value: e.value
					}))
				}),
				Hn = n("./src/reddit/components/StructuredStyles/Forms/WidgetColorPicker/index.m.less"),
				Gn = n.n(Hn);
			const zn = s.a.wrapped(p.n, "TertiaryButton", Gn.a),
				Qn = Object(c.c)({
					savedStructuredStyles: pe.l
				});
			class Yn extends r.a.Component {
				constructor() {
					super(...arguments), this.onChangeBackgroundColor = e => {
						this.props.onChangeWidgetStyles(Object.assign(Object.assign({}, this.props.widgetStyles || Object(xe.m)()), {
							backgroundColor: e
						}))
					}, this.onChangeHeaderColor = e => {
						this.props.onChangeWidgetStyles(Object.assign(Object.assign({}, this.props.widgetStyles || Object(xe.m)()), {
							headerColor: e
						}))
					}, this.onClearWidgetStyles = () => {
						this.props.onChangeWidgetStyles(Object(xe.m)())
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.widgetStyles || Object(xe.m)(), n = !!t.backgroundColor || !!t.headerColor, a = e.savedStructuredStyles.sidebarWidgetBackgroundColor, s = e.savedStructuredStyles.sidebarWidgetHeaderColor;
					return r.a.createElement(ue.i, null, r.a.createElement(ue.a, null, r.a.createElement(Kn, {
						label: l.fbt._("Title background color", null, {
							hk: "1lxRhZ"
						}),
						name: "sidebarWidgetHeaderColor",
						onChange: this.onChangeHeaderColor,
						value: t.headerColor || s || void 0
					})), r.a.createElement(ue.a, null, r.a.createElement(Kn, {
						label: l.fbt._("Widget background color", null, {
							hk: "BG39P"
						}),
						name: "sidebarWidgetBackgroundColor",
						onChange: this.onChangeBackgroundColor,
						value: t.backgroundColor || a || void 0
					})), n && r.a.createElement(zn, {
						onClick: this.onClearWidgetStyles
					}, l.fbt._("Clear widget colors", null, {
						hk: "VRsbO"
					})))
				}
			}
			var Zn = Object(o.b)(Qn)(Yn);
			class Jn extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement($.d, null, r.a.createElement($.h, null, r.a.createElement(F.a, null, r.a.createElement($.p, null, l.fbt._("Leave this menu without saving?", null, {
						hk: "2VpfMT"
					})), r.a.createElement(ee.a, {
						onClick: e.toggleModal
					}, r.a.createElement($.b, null)))), r.a.createElement($.k, null, r.a.createElement($.o, null, l.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "3dOZum"
					}))), r.a.createElement($.f, null, r.a.createElement($.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement($.q, {
						onClick: e.onLeave,
						"data-redditstyle": !0
					}, l.fbt._("Leave", null, {
						hk: "2tuwHw"
					}))))
				}
			}
			var Xn = Object(X.a)(Jn);
			class $n extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", null, e.isUnsavedChangesModalOpen && r.a.createElement(Xn, {
						onLeave: e.stopEditing,
						toggleModal: e.toggleLeaveMenuUnsavedModal,
						withOverlay: !0
					}), r.a.createElement(Y.b, {
						breadcrumbs: e.breadcrumbs,
						onNavigate: () => {
							e.isUnsavedChangesModalOpen || (e.isDirty ? e.toggleLeaveMenuUnsavedModal() : e.stopEditing())
						}
					}), r.a.createElement(ue.m, null, e.title, r.a.createElement(ot, {
						href: e.helpCenterLink
					}, e.title)))
				}
			}
			var ea, ta = $n,
				na = n("./src/reddit/controls/Sortable/index.tsx"),
				aa = n("./src/reddit/components/StructuredStyles/FeatureToggle/index.m.less"),
				ra = n.n(aa);
			! function(e) {
				e.Off = "0", e.On = "1"
			}(ea || (ea = {}));
			const sa = s.a.wrapped(hn.h, "StyledLabel", ra.a),
				la = s.a.wrapped(T, "ToggleInput", ra.a),
				ia = s.a.wrapped(ue.e, "FormElementTitle", ra.a);
			var oa = e => r.a.createElement(sa, null, r.a.createElement(F.a, null, r.a.createElement(ia, null, e.label), r.a.createElement(la, {
					redditStyle: !0,
					name: e.name,
					offValue: e.offValue,
					onChange: e.onChange,
					onValue: e.onValue,
					selected: e.value === e.onValue
				}))),
				da = n("./src/lib/linkMatchers/index.ts");
			var ca;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(ca || (ca = {}));
			const ua = e => {
					if (!e) return ca.NoUrl;
					if (e.length < 4) return ca.TooShort;
					const t = Object(da.g)(da.e, e);
					return t ? "ftp:" === t.schema ? ca.Invalid : "mailto:" === t.schema ? ca.Invalid : ca.Valid : ca.Invalid
				},
				ma = 20;
			var ha;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(ha || (ha = {}));
			const pa = e => e ? e.length > ma ? ha.TooLong : ha.Valid : ha.TooShort;
			var ga;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(ga || (ga = {}));
			const ba = e => e.length ? ga.Valid : ga.TooShort;
			var Ea = n("./src/higherOrderComponents/withImageUploads.tsx");
			var fa = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(Ue, {
				value: xe.f.Text,
				label: l.fbt._("Text button", null, {
					hk: "2zD9iL"
				}),
				selected: e.value === xe.f.Text,
				onClick: () => e.onClick(xe.f.Text)
			}), r.a.createElement(Ue, {
				value: xe.f.Image,
				label: l.fbt._("Image button", null, {
					hk: "1sQoTL"
				}),
				selected: e.value === xe.f.Image,
				onClick: () => e.onClick(xe.f.Image)
			}));
			var va = e => r.a.createElement(r.a.Fragment, null, e.localImage ? r.a.createElement(It.e, {
				imageData: e.localImage,
				onRemove: e.onRemoveImage
			}) : r.a.createElement(ft.b, {
				label: l.fbt._("Drag and Drop or Upload Image", null, {
					hk: "Ru1kh"
				}),
				onChange: e.onUploadImage
			}), r.a.createElement(ue.b, null, l.fbt._(".jpeg or .png files up to 10 MB", null, {
				hk: "4tX3oZ"
			})), r.a.createElement(ue.b, null, l.fbt._("Recommended upload size: {width}x{height}px", [l.fbt._param("width", xe.b.toLocaleString()), l.fbt._param("height", xe.a.toLocaleString())], {
				hk: "4hNwLa"
			})));
			const xa = 24;
			var Ca;
			! function(e) {
				e.Button = "button-image", e.Hover = "hover-image"
			}(Ca || (Ca = {}));
			const Sa = e => {
					if (e.hoverState && e.hoverState.kind === xe.f.Text) return Object.assign({}, e.hoverState);
					const t = e.kind === xe.f.Text ? e : Object(xe.s)();
					return {
						kind: xe.f.Text,
						color: t.color,
						text: "",
						fillColor: t.fillColor,
						textColor: t.textColor || t.color
					}
				},
				Ia = e => {
					const {
						url: t,
						height: n,
						width: a
					} = e;
					return Object(yt.g)({
						url: t,
						height: n,
						width: a
					})
				};
			class ya extends r.a.Component {
				constructor(e) {
					super(e), this.updateButtonDraft = e => {
						e.kind === xe.f.Text && this.setState({
							cachedTextButton: e
						}), this.props.updateButtonDraft(e)
					}, this.updateButtonLink = e => {
						const t = e.currentTarget.value,
							n = Object.assign({}, this.props.buttonDraft);
						n.kind === xe.f.Text ? n.url = t : n.linkUrl = t, this.setState({
							cachedTextButton: Object.assign(Object.assign({}, this.state.cachedTextButton), {
								url: t
							})
						}), this.updateButtonDraft(n)
					}, this.updateButtonText = e => {
						const t = e.currentTarget.value,
							n = Object.assign(Object.assign({}, this.props.buttonDraft), {
								text: t
							});
						this.setState({
							cachedTextButton: Object.assign(Object.assign({}, this.state.cachedTextButton), {
								text: t
							})
						}), this.updateButtonDraft(n)
					}, this.updateTextButtonDraft = e => {
						if (this.props.buttonDraft.kind === xe.f.Text) {
							const t = Object.assign(Object.assign({}, this.props.buttonDraft), e);
							this.updateButtonDraft(t)
						}
					}, this.updateTextButtonFillColor = e => {
						this.updateTextButtonDraft({
							fillColor: e
						})
					}, this.updateTextButtonColor = e => {
						this.updateTextButtonDraft({
							color: e
						})
					}, this.updateTextButtonTextColor = e => {
						this.updateTextButtonDraft({
							textColor: e
						})
					}, this.updateTextButtonHoverState = e => {
						const t = Object.assign(Object.assign({}, this.state.hoverButtonDraft), e);
						this.setState({
							hoverButtonDraft: t
						}), this.updateButtonDraft(Object.assign(Object.assign({}, this.props.buttonDraft), {
							hoverState: t
						}))
					}, this.updateHoverDraftText = e => {
						this.updateTextButtonHoverState({
							text: e.currentTarget.value
						})
					}, this.updateHoverDraftFillColor = e => {
						this.updateTextButtonHoverState({
							fillColor: e
						})
					}, this.updateHoverDraftColor = e => {
						this.updateTextButtonHoverState({
							color: e
						})
					}, this.updateHoverDraftTextColor = e => {
						this.updateTextButtonHoverState({
							textColor: e
						})
					}, this.setButtonImage = e => {
						const {
							url: t,
							height: n,
							width: a
						} = e, r = {
							kind: xe.f.Image,
							url: t,
							height: n,
							width: a,
							linkUrl: Object(xe.n)(this.props.buttonDraft),
							text: this.props.buttonDraft.text,
							hoverState: this.props.buttonDraft.hoverState
						};
						this.updateButtonDraft(r)
					}, this.setHoverImage = e => {
						const {
							url: t,
							height: n,
							width: a
						} = e, r = {
							kind: xe.f.Image,
							url: t,
							height: n,
							width: a
						}, s = Object.assign(Object.assign({}, this.props.buttonDraft), {
							hoverState: r
						});
						this.updateButtonDraft(s)
					}, this.addImage = async (e, t) => {
						const n = Array.isArray(e) ? e[0] : e,
							a = await Object(yt.e)(n);
						this.props.uploadImage({
							imageData: a
						}), this.setState(e => ({
							localData: Object.assign(Object.assign({}, e.localData), {
								[t]: a
							})
						}))
					}, this.handleButtonImageInput = e => this.addImage(e, Ca.Button), this.handleHoverImageInput = e => this.addImage(e, Ca.Hover), this.removeImage = e => {
						const t = Object.assign({}, this.state.localData),
							n = t[e];
						n && (delete t[e], this.props.cancelUpload(n), this.setState(e => ({
							localData: t
						})))
					}, this.handleRemoveButtonImage = () => this.removeImage(Ca.Button), this.handleRemoveHoverImage = () => this.removeImage(Ca.Hover), this.onSelectButtonKind = e => {
						if (e !== this.state.buttonKind) {
							if (e === xe.f.Text) {
								const e = Object.assign(Object.assign({}, this.state.cachedTextButton), {
									hoverState: this.props.buttonDraft.hoverState
								});
								this.updateButtonDraft(e)
							} else {
								const e = this.state.localData[Ca.Button];
								e && Object(yt.h)(e) && this.setButtonImage(e)
							}
							this.setState({
								buttonKind: e
							})
						}
					}, this.removeHoverState = () => {
						this.updateButtonDraft(Object.assign(Object.assign({}, this.props.buttonDraft), {
							hoverState: void 0
						}))
					}, this.setHoverState = e => {
						const t = Object.assign({}, this.props.buttonDraft);
						if (e === xe.f.Text) t.hoverState = Object.assign({}, this.state.hoverButtonDraft), this.updateButtonDraft(t);
						else if (e === xe.f.Image) {
							const e = this.state.localData[Ca.Hover];
							e && Object(yt.h)(e) ? this.setHoverImage(e) : this.removeHoverState()
						}
					}, this.onSelectHoverKind = e => {
						e !== this.state.hoverKind && (this.setHoverState(e), this.setState({
							hoverKind: e
						}))
					}, this.toggleHover = () => {
						this.state.isHoverEnabled ? this.removeHoverState() : this.setHoverState(this.state.hoverKind), this.setState({
							isHoverEnabled: !this.state.isHoverEnabled
						})
					}, this.isValidUrl = e => {
						const t = Object(xe.n)(e);
						return ua(t) === ca.Valid
					}, this.isInvalidButton = () => {
						const e = this.props.buttonDraft;
						if (this.state.buttonKind !== e.kind) return !0;
						if (!e.text.length || e.text.length > xa) return !0;
						if (this.state.buttonKind === xe.f.Image) {
							const e = this.state.localData[Ca.Button];
							if (!e || !Object(yt.h)(e)) return !0
						}
						return e.kind === xe.f.Text && !e.color || (!(!this.state.isHoverEnabled || e.hoverState && !this.isInvalidHoverState(e.hoverState)) || !this.isValidUrl(e))
					}, this.onCancel = () => {
						for (const e in this.state.localData) {
							const t = this.state.localData[e];
							this.props.cancelUpload(t)
						}
						this.props.onCancel()
					};
					const t = {};
					e.buttonDraft.kind === xe.f.Image && (t[Ca.Button] = Ia(e.buttonDraft));
					const n = e.buttonDraft.hoverState;
					n && n.kind === xe.f.Image && (t[Ca.Hover] = Object(yt.g)(n));
					const a = e.buttonDraft.kind === xe.f.Text ? Object.assign({}, e.buttonDraft) : Object.assign(Object.assign({}, Object(xe.s)()), {
						url: e.buttonDraft.linkUrl,
						text: e.buttonDraft.text
					});
					this.state = {
						buttonKind: e.buttonDraft.kind,
						cachedTextButton: a,
						hoverButtonDraft: Sa(e.buttonDraft),
						hoverKind: n ? n.kind : xe.f.Text,
						isHoverEnabled: !!n,
						localData: t
					}
				}
				componentWillUnmount() {
					for (const e in this.state.localData) {
						const t = this.state.localData[e];
						this.props.cancelUpload(t)
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = [],
						n = {};
					for (const s in this.state.localData) t.push(this.state.localData[s]), n[this.state.localData[s].id] = s;
					const a = e.getImageUploadsIfModified(t);
					if (!a) return;
					const r = {};
					for (const s of a) {
						const e = n[s.id];
						r[e] = s, Object(yt.h)(s) && (e === Ca.Button && this.state.buttonKind === xe.f.Image ? this.setButtonImage(s) : e === Ca.Hover && this.state.hoverKind === xe.f.Image && this.setHoverImage(s))
					}
					this.setState(e => ({
						localData: r
					}))
				}
				isInvalidHoverState(e) {
					if (e.kind === xe.f.Image) {
						const e = this.state.localData[Ca.Hover];
						if (!e || !Object(yt.h)(e)) return !0
					} else if (e.kind === xe.f.Text) {
						if (!e.color) return !0;
						if (!e.text.length || e.text.length > xa) return !0
					}
					return !1
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, e.isAdding ? l.fbt._("New Button", null, {
						hk: "24luGD"
					}) : l.fbt._("Edit Button", null, {
						hk: "7JtMi"
					})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						placeholder: l.fbt._("Button Text", null, {
							hk: "3kjUQ1"
						}),
						value: e.buttonDraft.text || "",
						onChange: this.updateButtonText
					}), r.a.createElement(Sn.a, {
						maxChars: xa,
						text: e.buttonDraft.text
					})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						placeholder: l.fbt._("Link URL", null, {
							hk: "4kbheN"
						}),
						value: Object(xe.n)(e.buttonDraft),
						onChange: this.updateButtonLink
					}), !this.isValidUrl(e.buttonDraft) && r.a.createElement(ue.c, null, l.fbt._("The link provided is invalid", null, {
						hk: "2OGHRG"
					}))), r.a.createElement(ue.i, null, r.a.createElement(fa, {
						onClick: this.onSelectButtonKind,
						value: t.buttonKind
					})), t.buttonKind === xe.f.Image ? r.a.createElement(va, {
						localImage: t.localData[Ca.Button] || void 0,
						onRemoveImage: this.handleRemoveButtonImage,
						onUploadImage: this.handleButtonImageInput
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.i, null, r.a.createElement(Kn, {
						label: l.fbt._("Fill color", null, {
							hk: "Z9Mpb"
						}),
						name: De.a.ButtonWidgetFillColor,
						onChange: this.updateTextButtonFillColor,
						value: t.cachedTextButton.fillColor,
						includeTransparent: !0
					})), r.a.createElement(ue.i, null, r.a.createElement(Kn, {
						label: l.fbt._("Stroke color", null, {
							hk: "3NkZYM"
						}),
						name: De.a.ButtonWidgetButtonColor,
						onChange: this.updateTextButtonColor,
						value: t.cachedTextButton.color
					})), r.a.createElement(ue.i, null, r.a.createElement(Kn, {
						label: l.fbt._("Text color", null, {
							hk: "2Lc7J4"
						}),
						name: De.a.ButtonWidgetTextColor,
						onChange: this.updateTextButtonTextColor,
						value: t.cachedTextButton.textColor || t.cachedTextButton.color
					}))), r.a.createElement(ue.i, null, r.a.createElement(oa, {
						name: "widgetButtonHoverToggle",
						value: t.isHoverEnabled ? ea.On : ea.Off,
						onChange: this.toggleHover,
						onValue: ea.On,
						offValue: ea.Off,
						label: l.fbt._("Hover treatment", null, {
							hk: "1to7PM"
						})
					})), t.isHoverEnabled && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.i, null, r.a.createElement(fa, {
						onClick: this.onSelectHoverKind,
						value: t.hoverKind
					})), t.hoverKind === xe.f.Image ? r.a.createElement(va, {
						localImage: t.localData[Ca.Hover] || void 0,
						onRemoveImage: this.handleRemoveHoverImage,
						onUploadImage: this.handleHoverImageInput
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						placeholder: l.fbt._("Button Text", null, {
							hk: "3kjUQ1"
						}),
						value: t.hoverButtonDraft.text || "",
						onChange: this.updateHoverDraftText
					}), r.a.createElement(Sn.a, {
						maxChars: xa,
						text: t.hoverButtonDraft.text || ""
					})), r.a.createElement(ue.i, null, r.a.createElement(Kn, {
						label: l.fbt._("Fill color", null, {
							hk: "Z9Mpb"
						}),
						name: De.a.ButtonWidgetHoverFillColor,
						onChange: this.updateHoverDraftFillColor,
						value: t.hoverButtonDraft.fillColor,
						includeTransparent: !0
					})), r.a.createElement(ue.i, null, r.a.createElement(Kn, {
						label: l.fbt._("Stroke color", null, {
							hk: "3NkZYM"
						}),
						name: De.a.ButtonWidgetHoverColor,
						onChange: this.updateHoverDraftColor,
						value: t.hoverButtonDraft.color
					})), r.a.createElement(ue.i, null, r.a.createElement(Kn, {
						label: l.fbt._("Text color", null, {
							hk: "2Lc7J4"
						}),
						name: De.a.ButtonWidgetHoverTextColor,
						onChange: this.updateHoverDraftTextColor,
						value: t.hoverButtonDraft.textColor || t.cachedTextButton.textColor || t.cachedTextButton.color
					})))), r.a.createElement(jn, {
						applyText: l.fbt._("Save", null, {
							hk: "1qAtYt"
						}),
						cancelText: l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						invalid: this.isInvalidButton(),
						onApply: e.onApply,
						onCancel: this.onCancel,
						onDelete: e.onDelete
					}))
				}
			}
			var ka = Object(Ea.a)(ya, xn.a),
				wa = n("./node_modules/lodash/isEqual.js"),
				_a = n.n(wa);
			class Oa extends r.a.Component {
				constructor(e) {
					super(e), this.state = this.getInitialState(e.widget), this.getInitialState = this.getInitialState.bind(this), this.getWidgetFromState = this.getWidgetFromState.bind(this), this.getUpdatedWidget = this.getUpdatedWidget.bind(this), this.setWidgetState = this.setWidgetState.bind(this), this.isValidWidget = this.isValidWidget.bind(this), this.getApiRequestFromProps = this.getApiRequestFromProps.bind(this), this.afterApiRequestCompleted = this.afterApiRequestCompleted.bind(this), this.isRequestInProgress = this.isRequestInProgress.bind(this), this.hasApiErrors = this.hasApiErrors.bind(this), this.handleCancelEditing = this.handleCancelEditing.bind(this), this.startApiRequestThen = this.startApiRequestThen.bind(this), this.handleDeleteWidget = this.handleDeleteWidget.bind(this), this.handleSaveWidget = this.handleSaveWidget.bind(this)
				}
				getInitialState(e) {
					throw new Error("Not Implemented")
				}
				getWidgetFromState() {
					return this.state.widget
				}
				getUpdatedWidget(e) {
					return Object.assign(Object.assign({}, this.state.widget), e)
				}
				setWidgetState(e) {
					this.setState({
						widget: this.getUpdatedWidget(e)
					})
				}
				isValidWidget() {
					throw new Error("Not Implemented")
				}
				getApiRequestFromProps(e) {
					if ("string" == typeof this.state.apiRequestId) return e.apiRequestStates[this.state.apiRequestId]
				}
				componentWillReceiveProps(e) {
					const t = this.getApiRequestFromProps(e);
					t && t.apiRequestStatus === zt.a.Complete && (this.afterApiRequestCompleted(), this.setState(this.getInitialState(e.widget))), this.props.widget !== e.widget && this.setState({
						widget: e.widget
					})
				}
				componentWillUnmount() {
					"string" == typeof this.state.apiRequestId && this.props.releaseRequest(this.state.apiRequestId)
				}
				afterApiRequestCompleted() {
					this.props.stopEditing()
				}
				componentDidUpdate(e, t) {
					if (this.props.isDirty) return;
					const n = this.getWidgetFromState();
					_a()(this.props.widget, n) || this.props.dirtyEditor()
				}
				isRequestInProgress() {
					const e = this.getApiRequestFromProps(this.props);
					return !(!e || e.apiRequestStatus === zt.a.Failed)
				}
				hasApiErrors() {
					const e = this.getApiRequestFromProps(this.props);
					return !!e && e.apiRequestStatus === zt.a.Failed
				}
				handleCancelEditing() {
					this.props.stopEditing()
				}
				startApiRequestThen(e) {
					if (this.isRequestInProgress()) return;
					const t = Object(zt.b)();
					this.setState({
						apiRequestId: t
					}, () => e(t))
				}
				handleDeleteWidget() {
					const e = this.props.widget;
					this.startApiRequestThen(t => {
						this.props.deleteWidget(e, t)
					})
				}
				handleSaveWidget() {
					if (!this.isValidWidget()) return;
					const e = this.getWidgetFromState();
					this.startApiRequestThen(t => {
						this.props.saveChanges(e, t)
					})
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement("div", null, "This widget is not implemented"))
				}
			}
			var Da = Oa;
			var Ta = class extends Da {},
				ja = n("./src/reddit/components/StructuredStyles/Forms/ButtonWidgetEditor/index.m.less"),
				Pa = n.n(ja);
			const Ra = 10,
				Na = 250,
				Aa = 30,
				Wa = s.a.wrapped(w, "TertiaryButton", Pa.a);
			var Fa;
			! function(e) {
				e[e.None = 0] = "None", e[e.Add = 1] = "Add", e[e.Edit = 2] = "Edit", e[e.Sort = 3] = "Sort"
			}(Fa || (Fa = {}));
			var Ba = class extends Ta {
					constructor() {
						super(...arguments), this.handleApplyUpdates = () => {
							this.endUpdate(this.state.widget.buttons)
						}, this.handleCancelUpdates = () => {
							this.endUpdate()
						}, this.handleDeleteButton = () => {
							if (this.state.editMode !== Fa.Edit) return;
							const e = [...this.state.widget.buttons];
							e.splice(this.state.editIndex, 1), this.endUpdate(e)
						}, this.handleAddButton = () => {
							const {
								widget: e
							} = this.state, t = Object(xe.s)(), n = e.buttons.slice();
							n.push(t), this.setState({
								widget: Object.assign(Object.assign({}, e), {
									buttons: n
								}),
								cachedButtons: e.buttons,
								editIndex: n.length - 1,
								editMode: Fa.Add
							})
						}, this.handleEditButton = e => {
							this.setState({
								cachedButtons: this.state.widget.buttons,
								editIndex: e,
								editMode: Fa.Edit
							})
						}, this.handleStartSorting = () => {
							this.setState({
								cachedButtons: this.state.widget.buttons,
								editIndex: -1,
								editMode: Fa.Sort
							})
						}, this.handleUpdateSort = e => {
							this.setWidgetState({
								buttons: e
							})
						}, this.handleUpdateButton = e => {
							const t = this.state.widget.buttons.slice();
							t[this.state.editIndex] = e, this.setWidgetState({
								buttons: t
							})
						}, this.handleTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.handleTextChange = e => {
							this.setWidgetState({
								description: e.currentTarget.value
							})
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					getInitialState(e) {
						return {
							widget: e,
							editIndex: -1,
							editMode: Fa.None
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !(!e.shortName.trim().length || e.shortName.length > Aa) && (!(e.description && e.description.length > Na) && !!e.buttons.length)
					}
					endUpdate(e) {
						const {
							widget: t
						} = this.state;
						this.setState({
							widget: this.getUpdatedWidget({
								buttons: e || this.state.cachedButtons || t.buttons
							}),
							cachedButtons: void 0,
							editIndex: -1,
							editMode: Fa.None
						})
					}
					renderEditableButtonList() {
						return this.state.widget.buttons.map((e, t) => this.state.editMode === Fa.Edit && t === this.state.editIndex ? r.a.createElement(ue.f, null, r.a.createElement(ka, {
							buttonDraft: e,
							isAdding: !1,
							onApply: this.handleApplyUpdates,
							onCancel: this.handleCancelUpdates,
							onDelete: this.handleDeleteButton,
							updateButtonDraft: this.handleUpdateButton
						})) : this.state.editMode !== Fa.Add || this.state.editIndex !== t ? r.a.createElement(Fn, {
							onClick: () => this.handleEditButton(t),
							disabled: this.state.editMode === Fa.Edit || this.state.editMode === Fa.Add
						}, e.text) : void 0)
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t, a = t.editMode !== Fa.None;
						return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(ue.f, null, r.a.createElement(ue.l, null, r.a.createElement(ue.i, null, r.a.createElement(ue.h, null, l.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(hn.c, {
							placeholder: l.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(Sn.a, {
							maxChars: Aa,
							text: n.shortName
						})), r.a.createElement(Zn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: n.styles
						})), r.a.createElement(ue.l, null, r.a.createElement(ue.m, null, l.fbt._("Button widget content", null, {
							hk: "2JiORB"
						})), r.a.createElement(ue.i, null, r.a.createElement(ue.h, null, l.fbt._("Description text", null, {
							hk: "uVkda"
						})), r.a.createElement(hn.i, {
							value: n.description || "",
							onChange: this.handleTextChange
						}), r.a.createElement(Sn.a, {
							maxChars: Na,
							text: n.description || ""
						}))), r.a.createElement(ue.m, null, l.fbt._("Buttons", null, {
							hk: "3ChEwG"
						}), r.a.createElement(ue.b, null, l.fbt._("Remaining buttons: {numRemaining}", [l.fbt._param("numRemaining", (Ra - n.buttons.length).toLocaleString())], {
							hk: "1vDj6p"
						}))), r.a.createElement(ue.f, null, r.a.createElement(Wa, {
							disabled: a || n.buttons.length >= Ra,
							onClick: this.handleAddButton,
							"data-redditstyle": !0
						}, l.fbt._("Add Button", null, {
							hk: "3I4Pk3"
						})), r.a.createElement(Wa, {
							disabled: a || n.buttons.length < 2,
							onClick: this.handleStartSorting,
							"data-redditstyle": !0
						}, l.fbt._("Reorder", null, {
							hk: "2RHv35"
						}))), t.editMode === Fa.Sort && r.a.createElement(na.a, {
							values: n.buttons,
							render: (e, t, n, a, s) => r.a.createElement(Pn.a, {
								isDragging: n,
								isOver: a,
								canDrop: s
							}, e.text),
							onDrop: (e, t, n) => this.handleUpdateSort(n)
						}) || this.renderEditableButtonList()), t.editMode === Fa.Add && r.a.createElement(ka, {
							isAdding: !0,
							buttonDraft: n.buttons[t.editIndex],
							onApply: this.handleApplyUpdates,
							onCancel: this.handleCancelUpdates,
							updateButtonDraft: this.handleUpdateButton
						}), t.editMode === Fa.Sort && r.a.createElement(ue.i, null, r.a.createElement(jn, {
							applyText: l.fbt._("Apply", null, {
								hk: "3mAjVQ"
							}),
							cancelText: l.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							onApply: this.handleApplyUpdates,
							onCancel: this.handleCancelUpdates
						})), this.hasApiErrors() && r.a.createElement(ue.f, null, r.a.createElement(ue.c, null, l.fbt._("Something went wrong", null, {
							hk: "2vkqN5"
						}))), r.a.createElement(ue.f, null, r.a.createElement(k, {
							disabled: a || !this.isValidWidget() || this.isRequestInProgress(),
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, l.fbt._("Save", null, {
							hk: "1qAtYt"
						})), r.a.createElement(O, {
							disabled: a,
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(D, {
							disabled: a || this.isRequestInProgress(),
							onClick: this.handleDeleteWidget,
							"data-redditstyle": !0
						}, l.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						})))
					}
				},
				La = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/eventDataToggle.m.less")),
				Ua = n.n(La);
			const Ma = s.a.input("Input", Ua.a),
				qa = s.a.wrapped(yn.a, "ExpandRight", Ua.a);
			var Va = e => r.a.createElement(hn.h, null, r.a.createElement(qa, null, e.selected ? r.a.createElement(hn.b, null) : r.a.createElement(hn.a, null), r.a.createElement("div", null, r.a.createElement(Ma, {
				name: e.name,
				onClick: t => e.onChange(e.name),
				readOnly: !0
			}), r.a.createElement(ve.a, {
				label: e.label
			}))));
			var Ka = class extends Da {
					getInitialState(e) {
						return {
							widget: e
						}
					}
				},
				Ha = n("./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/index.m.less"),
				Ga = n.n(Ha);
			const za = 30,
				Qa = 6,
				Ya = 50,
				Za = s.a.wrapped(ue.c, "FormElementError", Ga.a),
				Ja = s.a.wrapped(hn.c, "NumEventsInput", Ga.a),
				Xa = s.a.div("InputLabel", Ga.a);
			var $a = class extends Ka {
					constructor() {
						super(...arguments), this.isValidGoogleCalendarId = () => this.state.widget.googleCalendarId.match(".+@.{2,}") && this.state.widget.googleCalendarId.length >= Qa, this.onTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.onGoogleCalendarIdChange = e => {
							this.setWidgetState({
								googleCalendarId: e.currentTarget.value
							})
						}, this.onChangeNumEvents = e => {
							const t = parseInt(e.currentTarget.value, 10);
							t > Ya || this.setWidgetState({
								configuration: Object.assign(Object.assign({}, this.state.widget.configuration), {
									numEvents: t
								})
							})
						}, this.onToggleConfiguration = e => {
							const t = Object.assign({}, this.state.widget.configuration);
							t[e] = !t[e], this.setWidgetState({
								configuration: t
							})
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					getInitialState(e) {
						return {
							widget: Object.assign(Object.assign({}, e), {
								configuration: Object.assign(Object.assign({}, e.configuration), {
									numEvents: e.configuration.numEvents || 10
								})
							})
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state, t = e.shortName;
						return !(!t || !this.isValidGoogleCalendarId()) && (!(!e.configuration.numEvents || e.configuration.numEvents < 1 || e.configuration.numEvents > Ya) && (t.trim().length > 0 && t.length <= za))
					}
					handleSaveWidget() {
						if (!this.isValidWidget()) return;
						const e = Object.assign(Object.assign({}, this.state.widget), {
							requiresSync: !0
						});
						this.startApiRequestThen(t => {
							this.props.saveChanges(e, t)
						})
					}
					render() {
						const {
							props: e
						} = this, {
							widget: t
						} = this.state;
						return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(ue.l, null, r.a.createElement(ue.h, null, l.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(hn.c, {
							placeholder: l.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: t.shortName,
							onChange: this.onTitleChange
						}), r.a.createElement(Sn.a, {
							maxChars: za,
							text: t.shortName
						}), r.a.createElement(Zn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: t.styles
						})), r.a.createElement(ue.f, null, r.a.createElement(ue.m, null, l.fbt._("Calendar widget content", null, {
							hk: "MnblC"
						})), r.a.createElement(ue.l, null, r.a.createElement(ue.h, null, l.fbt._("Google Calendar ID", null, {
							hk: "22Qunx"
						})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
							placeholder: l.fbt._("Google Calendar ID", null, {
								hk: "2OHkdZ"
							}),
							value: t.googleCalendarId,
							onChange: this.onGoogleCalendarIdChange
						}), !this.isValidGoogleCalendarId() && t.googleCalendarId.length > 1 && r.a.createElement(Za, null, l.fbt._("Invalid Google Calendar ID", null, {
							hk: "175iVQ"
						}))), r.a.createElement(ue.h, null, l.fbt._("Number of events displayed", null, {
							hk: "2Xb0e8"
						})), r.a.createElement(ue.i, null, r.a.createElement(Ja, {
							value: t.configuration.numEvents ? t.configuration.numEvents.toString() : "",
							onChange: this.onChangeNumEvents
						}), r.a.createElement(Xa, null, l.fbt._("Events", null, {
							hk: "1abn4d"
						})), r.a.createElement(ue.b, null, l.fbt._("Max {number} events", [l.fbt._param("number", Ya.toLocaleString())], {
							hk: "3Kn7Wm"
						})))), r.a.createElement(ue.m, null, l.fbt._("Event data included", null, {
							hk: "2FkLQR"
						})), r.a.createElement(ue.i, null, r.a.createElement(Va, {
							name: "showDate",
							label: l.fbt._("Date", null, {
								hk: "1RScWn"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showDate
						})), r.a.createElement(ue.i, null, r.a.createElement(Va, {
							name: "showTime",
							label: l.fbt._("Time", null, {
								hk: "1Nay4c"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showTime
						})), r.a.createElement(ue.i, null, r.a.createElement(Va, {
							name: "showLocation",
							label: l.fbt._("Location", null, {
								hk: "2tmlcT"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showLocation
						})), r.a.createElement(ue.i, null, r.a.createElement(Va, {
							name: "showDescription",
							label: l.fbt._("Description", null, {
								hk: "X3d2w"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showDescription
						}))), this.hasApiErrors() && r.a.createElement(ue.f, null, r.a.createElement(Za, null, l.fbt._("Something went wrong", null, {
							hk: "2xn6Fx"
						}))), r.a.createElement(ue.f, null, r.a.createElement(k, {
							onClick: this.handleSaveWidget,
							disabled: !this.isValidWidget(),
							"data-redditstyle": !0
						}, l.fbt._("Save", null, {
							hk: "1qAtYt"
						})), e.widget.id && r.a.createElement(O, {
							onClick: this.handleSaveWidget,
							disabled: !this.isValidWidget() || this.isRequestInProgress(),
							"data-redditstyle": !0
						}, l.fbt._("Synchronize Now", null, {
							hk: "47n9IW"
						})), r.a.createElement(O, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(ue.f, null, r.a.createElement(D, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, l.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				},
				er = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				tr = n("./src/reddit/layout/row/Inline/index.tsx"),
				nr = n("./src/reddit/components/StructuredStyles/Forms/CommunityListEditor/index.m.less"),
				ar = n.n(nr);
			const rr = 30,
				sr = 10;
			var lr;
			! function(e) {
				e[e.None = 0] = "None", e[e.Add = 1] = "Add", e[e.Sort = 2] = "Sort"
			}(lr || (lr = {}));
			var ir = class extends Ta {
					constructor() {
						super(...arguments), this.handleCancelUpdates = () => {
							this.endUpdate()
						}, this.handleApplyNewCommunity = () => {
							const e = this.getNewCommunityName();
							this.state.editMode === lr.Add && e && this.endUpdate(this.state.widget.data)
						}, this.handleApplySort = () => {
							this.state.editMode === lr.Sort && this.endUpdate(this.state.widget.data)
						}, this.handleDeleteCommunity = e => {
							const t = [...this.state.widget.data];
							t.splice(e, 1), this.endUpdate(t)
						}, this.handleStartSorting = () => {
							this.setState({
								cachedData: this.state.widget.data,
								editMode: lr.Sort
							})
						}, this.handleUpdateSort = e => {
							this.setWidgetState({
								data: e
							})
						}, this.handlePickCommunity = e => {
							const t = {
								name: e.record ? e.record.name : e.rawString,
								type: "subreddit",
								isNSFW: !1
							};
							if (!t.name) return;
							const n = this.state.widget.data.slice();
							n.push(t), this.setState({
								cachedData: this.state.widget.data,
								editMode: lr.Add,
								widget: this.getUpdatedWidget({
									data: n
								})
							})
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}, this.handleTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}
					}
					getInitialState(e) {
						return {
							editMode: lr.None,
							widget: e
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !(!e.shortName.trim().length || e.shortName.length > rr) && !!e.data.length
					}
					getNewCommunityName() {
						const {
							widget: e
						} = this.state;
						return this.state.editMode !== lr.Add ? "" : e.data[e.data.length - 1].name || ""
					}
					endUpdate(e) {
						this.setState({
							cachedData: void 0,
							editMode: lr.None,
							widget: this.getUpdatedWidget({
								data: e || this.state.cachedData || this.state.widget.data
							})
						})
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t, a = this.getNewCommunityName();
						return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
							placeholder: l.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(Sn.a, {
							maxChars: rr,
							text: n.shortName
						})), r.a.createElement(ue.i, null, r.a.createElement(Zn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: n.styles
						})), r.a.createElement(ue.m, null, l.fbt._("Communities", null, {
							hk: "1PIYRk"
						}), r.a.createElement(ue.b, null, l.fbt._("Remaining communities: {numRemaining}", [l.fbt._param("numRemaining", (sr - n.data.length).toLocaleString())], {
							hk: "2i6FQz"
						}))), t.editMode === lr.Sort ? r.a.createElement("div", null, r.a.createElement(na.a, {
							values: n.data,
							render: (e, t, n, a, s) => r.a.createElement(Pn.a, {
								isDragging: n,
								isOver: a,
								canDrop: s
							}, e.name),
							onDrop: (e, t, n) => this.handleUpdateSort(n)
						}), r.a.createElement(jn, {
							applyText: l.fbt._("Apply", null, {
								hk: "3mAjVQ"
							}),
							cancelText: l.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							onApply: this.handleApplySort,
							onCancel: this.handleCancelUpdates
						})) : n.data.map((e, t) => r.a.createElement(j.b, {
							key: e.id
						}, e.name, r.a.createElement(ee.a, {
							className: ar.a.textButton,
							onClick: e => this.handleDeleteCommunity(t)
						}, r.a.createElement(In.a, {
							className: ar.a.trashIcon
						}))))), n.data.length < sr && t.editMode !== lr.Sort && r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Add New Community", null, {
							hk: "1tXrnU"
						})), r.a.createElement(tr.a, {
							className: ar.a.controlRow
						}, r.a.createElement(er.a, {
							className: ar.a.subredditPicker,
							onSelect: this.handlePickCommunity,
							value: {
								rawString: a,
								record: null
							}
						})), r.a.createElement(jn, {
							applyText: l.fbt._("Apply", null, {
								hk: "3mAjVQ"
							}),
							cancelText: l.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							invalid: !a,
							onApply: this.handleApplyNewCommunity,
							onCancel: this.handleCancelUpdates
						})), r.a.createElement(ue.f, null, r.a.createElement(w, {
							disabled: t.editMode === lr.Sort || n.data.length < 2,
							onClick: this.handleStartSorting,
							"data-redditstyle": !0
						}, l.fbt._("Reorder Communities", null, {
							hk: "3q63NN"
						}))), this.hasApiErrors() && r.a.createElement(ue.f, null, r.a.createElement(ue.c, null, l.fbt._("Something went wrong", null, {
							hk: "1h26Ih"
						}))), r.a.createElement(ue.f, null, r.a.createElement(k, {
							disabled: t.editMode === lr.Sort || !this.isValidWidget() || this.isRequestInProgress(),
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, l.fbt._("Save", null, {
							hk: "1qAtYt"
						})), r.a.createElement(O, {
							disabled: t.editMode === lr.Sort,
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(ue.i, null, r.a.createElement(D, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, l.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				},
				or = n("./src/lib/copyToClipboard/index.ts"),
				dr = n("./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/ExperimentalFeatureNotice.m.less"),
				cr = n.n(dr);
			const {
				fbt: ur
			} = n("./node_modules/fbt/lib/FbtPublic.js"), mr = s.a.wrapped(rt.a, "Info", cr.a), hr = s.a.wrapped(ue.f, "FormGroup", cr.a), pr = s.a.wrapped(ue.h, "FormGroupTitle", cr.a), gr = s.a.wrapped(ue.g, "FormGroupDescription", cr.a);
			var br = () => r.a.createElement(hr, null, r.a.createElement(yn.a, null, r.a.createElement(mr, null), r.a.createElement("div", null, r.a.createElement(pr, null, ur._("This is an experimental feature", null, {
				hk: "4pZ6q0"
			})), r.a.createElement(gr, null, ur._("Custom widgets don't display on mobile devices. Customizations can break at any time", null, {
				hk: "2rzQms"
			})))));
			var Er = class extends Da {},
				fr = n("./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/index.m.less"),
				vr = n.n(fr);
			const xr = 30,
				Cr = 1e4,
				Sr = 1e5,
				Ir = 50,
				yr = 500,
				kr = 5,
				wr = 20,
				_r = /^[a-z0-9\-]+$/i,
				Or = s.a.wrapped(hn.i, "Textarea", vr.a),
				Dr = s.a.wrapped(ue.f, "FormGroup", vr.a),
				Tr = s.a.wrapped(ue.f, "UnsavedImageFormContainer", vr.a),
				jr = s.a.wrapped(ue.b, "FormElementDescription", vr.a),
				Pr = s.a.wrapped(ue.c, "FormElementError", vr.a),
				Rr = s.a.a("CopyLink", vr.a);
			var Nr = Object(Ea.a)(class extends Er {
					constructor() {
						super(...arguments), this.addImage = async e => {
							if (null !== this.state.unsavedImage || this.state.localData.length >= kr) return;
							const t = await Object(yt.e)(e);
							this.props.uploadImage({
								imageData: t
							}), this.setState({
								unsavedImage: t
							})
						}, this.removeImage = e => {
							let t;
							if (null == e) {
								if (null == this.state.unsavedImage) return;
								t = this.state.unsavedImage, this.setState(e => ({
									unsavedImage: null
								}))
							} else {
								const n = [...this.state.localData];
								t = n.splice(e, 1)[0], this.setState(e => ({
									localData: n,
									copiedImageIndex: null
								}))
							}
							this.props.cancelUpload(t)
						}, this.copyImageNameToClipboard = e => {
							const t = this.getImageTagByIndex(e);
							t && (Object(or.a)("url(".concat(t, ")")) ? this.setState({
								copiedImageIndex: e
							}) : this.setState({
								copiedImageIndex: null
							}))
						}, this.handleTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.handleTextChange = e => {
							this.setWidgetState({
								text: e.currentTarget.value
							})
						}, this.handleCssChange = e => {
							this.setWidgetState({
								css: e.currentTarget.value
							})
						}, this.handleHeightChange = e => {
							this.setWidgetState({
								height: parseInt(e.currentTarget.value, 10)
							})
						}, this.handleImageInput = e => {
							Array.isArray(e) ? this.addImage(e[0]) : this.addImage(e)
						}, this.handleAddUnsavedImageData = () => {
							null != this.state.unsavedName && null != this.state.unsavedImage && this.isUnsavedImageNameValid() && this.setState({
								unsavedName: null,
								unsavedImage: null,
								localData: [...this.state.localData, this.state.unsavedImage],
								imageNamesById: Object.assign(Object.assign({}, this.state.imageNamesById), {
									[this.state.unsavedImage.id]: this.state.unsavedName
								})
							})
						}, this.handleClearUnsavedImageData = () => {
							null != this.state.unsavedImage && this.props.cancelUpload(this.state.unsavedImage), this.setState({
								unsavedName: null,
								unsavedImage: null
							})
						}, this.handleUnsavedNameChange = e => {
							this.setState({
								unsavedName: e.currentTarget.value
							})
						}
					}
					componentWillUnmount() {
						super.componentWillUnmount();
						for (const e of this.state.localData) this.props.cancelUpload(e);
						this.state.unsavedImage && this.props.cancelUpload(this.state.unsavedImage)
					}
					componentWillReceiveProps(e) {
						super.componentWillReceiveProps(e);
						const t = this.getApiRequestFromProps(e);
						if (t && t.apiRequestStatus === zt.a.Failed) {
							if (this.errors = {}, t.apiError.fields && t.apiError.fields.length)
								for (const o of t.apiError.fields) this.errors[o.field] = o.msg
						} else this.errors = null;
						const {
							state: n
						} = this;
						let {
							imageNamesById: a,
							imageIdsByName: r,
							unsavedImage: s,
							localData: l
						} = n;
						const i = e.getImageUploadsIfModified(n.localData);
						if (i) {
							l = i, a = {}, r = {};
							for (const e of i) {
								const t = n.imageNamesById[e.id];
								a[e.id] = t, r[t] = e.id
							}
						}
						if (s) {
							const t = e.getImageUploadsIfModified([s]);
							t && (s = t[0] || null)
						}
						this.setState(e => ({
							localData: l,
							imageNamesById: a,
							imageIdsByName: r,
							unsavedImage: s
						}))
					}
					getInitialState(e) {
						const t = [],
							n = {},
							a = {};
						for (const r of e.imageData) {
							const e = Object(yt.g)(r);
							t.push(e), n[e.id] = r.name, a[r.name] = e.id
						}
						return {
							widget: e,
							localData: t,
							imageNamesById: n,
							imageIdsByName: a,
							unsavedImage: null,
							unsavedName: null,
							copiedImageIndex: null
						}
					}
					getWidgetFromState() {
						const {
							id: e,
							shortName: t,
							kind: n,
							text: a,
							css: r,
							height: s
						} = this.state.widget, l = [];
						for (const i of this.state.localData) Object(yt.h)(i) && l.push({
							url: i.url,
							height: i.height,
							width: i.width,
							name: this.state.imageNamesById[i.id]
						});
						return {
							id: e,
							shortName: t,
							kind: n,
							text: a,
							css: r,
							height: s,
							imageData: l
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !(!e.shortName.trim().length || e.shortName.length > xr) && (!(!e.text || e.text.length > Cr) && (!(!e.css || e.css.length > Sr) && (!!this.isHeightValid() && !this.state.localData.some(e => !Object(yt.h)(e)))))
					}
					isHeightValid() {
						const {
							widget: e
						} = this.state;
						return !(!e.height || e.height < Ir || e.height > yr)
					}
					isUnsavedImageNameValid() {
						return null != this.state.unsavedName && this.state.unsavedName.length > 0 && this.state.unsavedName.length <= wr && !(this.state.unsavedName in this.state.imageIdsByName) && _r.test(this.state.unsavedName)
					}
					isUnsavedImageValid() {
						return null != this.state.unsavedImage && this.isUnsavedImageNameValid()
					}
					getImageTagByIndex(e) {
						const t = this.state.localData[e];
						if (!t) return "";
						const n = this.state.imageNamesById[t.id];
						return n ? "%%".concat(n, "%%") : ""
					}
					renderError(e) {
						return this.errors && this.errors[e] ? r.a.createElement(Pr, null, this.errors[e]) : null
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t;
						return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(br, null), r.a.createElement(Dr, null, r.a.createElement(ue.h, null, l.fbt._("Widget title", null, {
							hk: "48e5IQ"
						})), r.a.createElement(hn.c, {
							placeholder: l.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(Sn.a, {
							maxChars: xr,
							text: n.shortName
						}), this.renderError("short_name")), r.a.createElement(Dr, null, r.a.createElement(ue.h, null, l.fbt._("Markdown", null, {
							hk: "rWPwa"
						})), r.a.createElement(Or, {
							value: n.text,
							onChange: this.handleTextChange,
							placeholder: l.fbt._("Markdown Content", null, {
								hk: "1dNGSZ"
							})
						}), r.a.createElement(Sn.a, {
							maxChars: Cr,
							text: n.text
						}), this.renderError("text")), r.a.createElement(Dr, null, r.a.createElement(ue.h, null, l.fbt._("CSS", null, {
							hk: "3U4QvJ"
						})), r.a.createElement(Or, {
							value: n.css,
							onChange: this.handleCssChange,
							placeholder: l.fbt._("Css Styling", null, {
								hk: "hwb5A"
							}),
							autoCapitalize: "off",
							autoComplete: "off",
							autoCorrect: "off",
							spellCheck: !1
						}), r.a.createElement(Sn.a, {
							maxChars: Sr,
							text: n.css
						}), this.renderError("css")), r.a.createElement(Dr, null, r.a.createElement(ue.h, null, l.fbt._("Height", null, {
							hk: "1DvI33"
						})), r.a.createElement(hn.c, {
							placeholder: l.fbt._("PIXELS", null, {
								hk: "8zaKk"
							}),
							onChange: this.handleHeightChange,
							value: n.height ? n.height.toString() : ""
						}), n.height && !this.isHeightValid() ? r.a.createElement(Pr, null, l.fbt._("Height must be between {min} and {max} pixels", [l.fbt._param("min", Ir.toLocaleString()), l.fbt._param("max", yr.toLocaleString())], {
							hk: "4lHZCj"
						})) : r.a.createElement(jr, null, l.fbt._("Between {min} and {max} pixels", [l.fbt._param("min", Ir.toLocaleString()), l.fbt._param("max", yr.toLocaleString())], {
							hk: "4FcOt1"
						})), this.renderError("height")), r.a.createElement(Dr, null, r.a.createElement(ue.h, null, l.fbt._("Image", null, {
							hk: "QVluN"
						})), r.a.createElement(ue.g, null, "".concat(t.localData.length, "/").concat(kr, " ").concat(l.fbt._("Images", null, {
							hk: "3Mu4Pg"
						}))), t.localData.map((e, n) => r.a.createElement(ue.a, {
							key: e.id
						}, r.a.createElement(It.e, {
							imageData: e,
							onRemove: () => this.removeImage(n)
						}), r.a.createElement(jr, null, this.getImageTagByIndex(n), r.a.createElement(Rr, {
							onClick: () => this.copyImageNameToClipboard(n)
						}, t.copiedImageIndex === n ? l.fbt._("copied!", null, {
							hk: "482rGm"
						}) : l.fbt._("copy", null, {
							hk: "CiHen"
						})))))), t.localData.length < kr && r.a.createElement(Tr, null, r.a.createElement(Dr, null, r.a.createElement(ue.a, null, null == t.unsavedImage ? r.a.createElement(ft.b, {
							label: l.fbt._("Drag and Drop or Upload Image", null, {
								hk: "3VsEoT"
							}),
							onChange: this.handleImageInput
						}) : r.a.createElement(It.e, {
							imageData: t.unsavedImage,
							onRemove: () => this.removeImage(null)
						}), r.a.createElement(jr, null, l.fbt._(".jpeg or .png files up to 10 MB", null, {
							hk: "3JJDCb"
						})))), r.a.createElement(Dr, null, r.a.createElement(ue.h, null, l.fbt._("Name of image", null, {
							hk: "QZ7Le"
						})), r.a.createElement(ue.a, null, r.a.createElement(hn.c, {
							placeholder: l.fbt._("Required", null, {
								hk: "1PL06Q"
							}),
							value: t.unsavedName || "",
							onChange: this.handleUnsavedNameChange,
							maxLength: wr
						}), r.a.createElement(jr, null, l.fbt._("Names should be unique consisting of alphanumeric and ‘-’ only", null, {
							hk: "TV1Ev"
						})))), r.a.createElement(Dr, null, r.a.createElement(jn, {
							applyText: l.fbt._("Add", null, {
								hk: "2wi3d4"
							}),
							cancelText: l.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							invalid: !this.isUnsavedImageValid(),
							onApply: this.handleAddUnsavedImageData,
							onCancel: this.handleClearUnsavedImageData
						}))), this.hasApiErrors() && r.a.createElement(Dr, null, r.a.createElement(Pr, null, l.fbt._("Something went wrong", null, {
							hk: "3OW5jo"
						}))), r.a.createElement(Dr, null, r.a.createElement(k, {
							onClick: this.handleSaveWidget,
							disabled: !this.isValidWidget() || this.isRequestInProgress(),
							"data-redditstyle": !0
						}, l.fbt._("Save", null, {
							hk: "aY29q"
						})), r.a.createElement(O, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(Dr, null, r.a.createElement(D, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, l.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				}, xn.a),
				Ar = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Wr = n("./src/reddit/icons/svgs/OutboundLink/index.tsx");
			var Fr = class extends Da {
					getInitialState(e) {
						return {
							widget: e
						}
					}
				},
				Br = n("./src/reddit/components/IdCard/index.m.less"),
				Lr = n.n(Br),
				Ur = n("./src/reddit/components/StructuredStyles/Forms/IdCardWidgetEditor/index.m.less"),
				Mr = n.n(Ur);
			const qr = 30,
				Vr = e => r.a.createElement(j.b, {
					className: Object(h.a)(Mr.a.NavLink, e.className)
				}, r.a.createElement("a", {
					href: e.url,
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.a.createElement(F.a, null, e.title, r.a.createElement(Wr.a, {
					className: Object(h.a)(Mr.a.OutboundLinkIcon, e.className)
				}))));
			var Kr = Object(Ar.t)()(Object(o.b)(() => Object(c.c)({
				subreddit: Ar.q
			}))(class extends Fr {
				constructor() {
					super(...arguments), this.handleSubscribersTextChange = e => {
						const t = e.currentTarget.value;
						this.setWidgetState({
							subscribersText: t
						})
					}, this.handleCurrentlyViewingTextChange = e => {
						const t = e.currentTarget.value;
						this.setWidgetState({
							currentlyViewingText: t
						})
					}
				}
				isValidWidget() {
					const {
						widget: e
					} = this.state;
					return !(e.currentlyViewingText.length > qr) && !(e.subscribersText.length > qr)
				}
				render() {
					const {
						props: e
					} = this, {
						widget: t
					} = this.state;
					return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Joined community", null, {
						hk: "3fEZvt"
					})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						placeholder: l.fbt._("Members", null, {
							hk: "dKX5k"
						}),
						onChange: this.handleSubscribersTextChange,
						value: t.subscribersText
					}), r.a.createElement(Sn.a, {
						text: t.subscribersText,
						maxChars: qr
					})), r.a.createElement(ue.h, null, l.fbt._("Currently viewing community", null, {
						hk: "4hOBbP"
					})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						placeholder: l.fbt._("Online", null, {
							hk: "3rgbxH"
						}),
						onChange: this.handleCurrentlyViewingTextChange,
						value: t.currentlyViewingText
					}), r.a.createElement(Sn.a, {
						text: t.currentlyViewingText,
						maxChars: qr
					}))), r.a.createElement(ue.h, null, l.fbt._("Community Description", null, {
						hk: "30o9mQ"
					})), r.a.createElement("div", {
						className: Object(h.a)(Mr.a.Description, Lr.a.Description)
					}, t.description), r.a.createElement(ue.h, null, r.a.createElement(Vr, {
						title: l.fbt._("Edit Community Description", null, {
							hk: "2XvsrF"
						}),
						url: e.subreddit ? "https://reddit.com/r/".concat(e.subreddit.name, "/about/edit/") : "",
						"data-redditstyle": !0
					})), this.hasApiErrors() && r.a.createElement(ue.f, null, r.a.createElement(ue.c, null, l.fbt._("Something went wrong", null, {
						hk: "3OW5jo"
					}))), r.a.createElement(ue.f, null, r.a.createElement(k, {
						disabled: !this.isValidWidget() || this.isRequestInProgress(),
						onClick: this.handleSaveWidget,
						"data-redditstyle": !0
					}, l.fbt._("Save", null, {
						hk: "O0HcL"
					})), r.a.createElement(O, {
						onClick: this.handleCancelEditing,
						"data-redditstyle": !0
					}, l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}
			}));
			class Hr extends r.a.Component {
				constructor(e) {
					super(e), this.handleLinkChange = e => {
						const t = e.currentTarget.value;
						this.setState(e => ({
							linkUrl: t
						})), this.validate(t), this.props.onHandleLinkChange(this.props.imageIndex, t, this.urlValidation)
					}, this.state = {
						linkUrl: e.linkUrl || ""
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.linkUrl !== this.props.linkUrl && this.setState({
						linkUrl: e.linkUrl || ""
					})
				}
				validate(e) {
					this.urlValidation = e ? ua(e) : null
				}
				render() {
					const {
						state: e
					} = this;
					return r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						onChange: this.handleLinkChange,
						placeholder: l.fbt._("Link URL", null, {
							hk: "3GuyMx"
						}),
						value: e.linkUrl
					}), this.urlValidation === ca.Invalid && r.a.createElement(ue.c, null, l.fbt._("The link provided is invalid", null, {
						hk: "2g9TvW"
					})), this.urlValidation === ca.TooShort && r.a.createElement(ue.c, null, l.fbt._("The link provided is too short", null, {
						hk: "2fEWI1"
					})))
				}
			}
			var Gr = Hr,
				zr = n("./src/reddit/components/StructuredStyles/Forms/ImageWidgetEditor/ImagesList.m.less"),
				Qr = n.n(zr);
			const Yr = s.a.wrapped(It.e, "UploadedImage", Qr.a);
			var Zr = e => r.a.createElement("div", null, e.imageData.map((t, n) => r.a.createElement(r.a.Fragment, {
				key: t.id
			}, r.a.createElement(Yr, {
				imageData: t,
				isRequestInProgress: e.isRequestInProgress,
				onRemove: () => e.onRemove(n)
			}), r.a.createElement(Gr, {
				imageIndex: n,
				onHandleLinkChange: e.onHandleLinkChange,
				linkUrl: e.imageLinkUrls[t.id]
			}))));
			const Jr = 10,
				Xr = 30;
			var $r = Object(Ea.a)(class extends Er {
					constructor() {
						super(...arguments), this.handleTitleChange = e => {
							const t = e.currentTarget.value;
							this.setWidgetState({
								shortName: t
							})
						}, this.handleSingleImageInput = async e => {
							if (this.state.localData.length >= Jr) return;
							const t = await Object(yt.e)(e);
							this.props.uploadImage({
								imageData: t
							}), this.setState(e => ({
								localData: [...e.localData, t]
							}))
						}, this.handleMultiImageInput = e => {
							let t = e;
							e.length + this.state.localData.length > Jr && (t = e.slice(0, Jr - this.state.localData.length));
							for (const n of t) this.handleSingleImageInput(n)
						}, this.removeImage = e => {
							const t = [...this.state.localData],
								n = t.splice(e, 1)[0];
							this.props.cancelUpload(n), this.setState(e => ({
								localData: t
							}))
						}, this.handleLinkChange = (e, t, n) => {
							const a = this.state.localData[e],
								r = Object.assign(Object.assign({}, this.state.localImageLinkUrls), {
									[a.id]: t
								});
							this.setState(e => ({
								localImageLinkUrls: r,
								urlValidationError: n
							}))
						}
					}
					componentWillUnmount() {
						super.componentWillUnmount(), this.state.localData.forEach(this.props.cancelUpload)
					}
					componentWillReceiveProps(e) {
						super.componentWillReceiveProps(e);
						const t = e.getImageUploadsIfModified(this.state.localData);
						t && this.setState(e => ({
							localData: t
						}))
					}
					getInitialState(e) {
						const t = {
							urlValidationError: null,
							localData: [],
							localImageLinkUrls: {}
						};
						for (const n of e.data) {
							const e = Object(yt.g)(n);
							t.localData.push(e), t.localImageLinkUrls[e.id] = n.linkUrl
						}
						return Object.assign({
							widget: e
						}, t)
					}
					getWidgetFromState() {
						const {
							id: e,
							shortName: t,
							kind: n
						} = this.state.widget;
						return {
							id: e,
							shortName: t,
							data: this.state.localData.filter(yt.h).map(e => {
								let t = this.state.localImageLinkUrls[e.id];
								return t && !t.includes(":") && (t = "http://".concat(t)), {
									url: e.url,
									height: e.height,
									width: e.width,
									linkUrl: t
								}
							}),
							kind: n
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !!e.shortName.trim().length && (!(e.shortName.length > Xr) && (!!this.state.localData.length && (!this.state.localData.some(e => !Object(yt.h)(e)) && !this.state.urlValidationError)))
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t;
						return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(ue.f, null, r.a.createElement(ue.a, null, r.a.createElement(ue.g, null, l.fbt._("Uploading multiple images to this widget will load a random image on each page refresh.", null, {
							hk: "157MBS"
						}))), r.a.createElement(ue.h, null, l.fbt._("Widget title", null, {
							hk: "3Ka9sg"
						})), r.a.createElement(ue.g, null, l.fbt._("The title of your widget and background styles will not appear in the sidebar.", null, {
							hk: "1wSGS2"
						})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
							placeholder: l.fbt._("WIDGET TITLE", null, {
								hk: "3EvX03"
							}),
							onChange: this.handleTitleChange,
							value: n.shortName
						}), r.a.createElement(Sn.a, {
							text: n.shortName,
							maxChars: Xr
						}))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Image", null, {
							hk: "3mDsg3"
						})), r.a.createElement(ue.g, null, "".concat(t.localData.length, "/").concat(Jr, " ").concat(l.fbt._("Images", null, {
							hk: "3Mu4Pg"
						}))), r.a.createElement(Zr, {
							isRequestInProgress: this.isRequestInProgress(),
							imageData: t.localData,
							imageLinkUrls: t.localImageLinkUrls,
							onHandleLinkChange: this.handleLinkChange,
							onRemove: this.removeImage
						}), t.localData.length < Jr && r.a.createElement(ft.b, {
							label: l.fbt._("Drag and Drop or Upload Image", null, {
								hk: "Ru1kh"
							}),
							onChange: this.handleMultiImageInput,
							multiple: !0
						})), this.hasApiErrors() && r.a.createElement(ue.f, null, r.a.createElement(ue.c, null, l.fbt._("Something went wrong", null, {
							hk: "3OW5jo"
						}))), r.a.createElement(ue.f, null, r.a.createElement(k, {
							disabled: !this.isValidWidget() || this.isRequestInProgress(),
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, l.fbt._("Save", null, {
							hk: "O0HcL"
						})), r.a.createElement(O, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(ue.f, null, r.a.createElement(D, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, l.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				}, xn.a),
				es = n("./node_modules/lodash/noop.js"),
				ts = n.n(es),
				ns = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemLabel.m.less"),
				as = n.n(ns);
			const rs = s.a.wrapped(ue.e, "TextDisplay", as.a),
				ss = s.a.div("UrlDisplay", as.a);
			var ls = e => r.a.createElement("div", null, r.a.createElement(rs, null, e.text), r.a.createElement(ss, null, e.url)),
				is = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemList.m.less"),
				os = n.n(is);
			const ds = s.a.div("Container", os.a),
				cs = s.a.wrapped(ue.i, "FormItem", os.a);
			var us = e => r.a.createElement(ds, null, e.menuItems.map((e, t) => r.a.createElement(cs, {
					key: t
				}, r.a.createElement(ls, {
					text: e.text,
					url: e.url
				})))),
				ms = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MainMenuContent.m.less"),
				hs = n.n(ms);
			const ps = "wikiMenuItemToggle",
				gs = "/wiki/index",
				bs = s.a.wrapped(T, "ToggleInput", hs.a),
				Es = s.a.wrapped(j.b, "ToggleRow", hs.a),
				fs = 5;
			class vs extends r.a.Component {
				constructor(e) {
					super(e), this.handleAdd = e => this.props.onAdd(), this.handleStartReorder = e => this.setState(e => ({
						reordering: !0,
						draftSort: [...this.props.widget.data]
					})), this.applyReorder = () => {
						this.props.onSave(Object.assign(Object.assign({}, this.props.widget), {
							data: this.state.draftSort
						})), this.setState(e => ({
							reordering: !1
						}))
					}, this.cancelReorder = () => this.setState(e => ({
						reordering: !1
					})), this.editMenuItem = e => this.props.onEdit(e), this.reorderDraft = (e, t, n) => this.setState(e => ({
						draftSort: n
					})), this.toggleWiki = () => {
						const e = !this.props.widget.showWiki;
						this.props.onSave(Object.assign(Object.assign({}, this.props.widget), {
							showWiki: e
						})), this.props.sendEvent(Object(W.k)(e))
					}, this.state = {
						reordering: !1,
						draftSort: []
					}
				}
				render() {
					const {
						state: e
					} = this;
					return e.reordering ? this.renderReorderingContent() : this.renderDefaultContent()
				}
				renderDefaultContent() {
					const {
						props: e
					} = this;
					return r.a.createElement(ue.k, {
						key: "default-content"
					}, r.a.createElement(ta, e), r.a.createElement(fn.c, null, l.fbt._("These community styling options will also display in Reddit apps.", null, {
						hk: "2gl4Jd"
					})), r.a.createElement(ue.f, null, r.a.createElement(j.b, {
						disabled: !0
					}, l.fbt._("Posts", null, {
						hk: "rLU2h"
					})), r.a.createElement(Es, {
						onClick: this.toggleWiki
					}, r.a.createElement(F.a, null, r.a.createElement(tr.a, null, r.a.createElement(ls, {
						text: l.fbt._("Wiki", null, {
							hk: "2s4Mqc"
						}),
						url: gs
					})), r.a.createElement(tr.a, null, r.a.createElement(bs, {
						name: ps,
						offValue: "false",
						onChange: ts.a,
						onValue: "true",
						redditStyle: !0,
						selected: e.widget.showWiki
					})))), e.widget.data.map((e, t) => r.a.createElement(Fn, {
						key: e.text,
						onClick: () => this.editMenuItem(t)
					}, r.a.createElement(ls, {
						text: e.text,
						url: e.url
					}), e.children && r.a.createElement(us, {
						menuItems: e.children
					})))), r.a.createElement(ue.f, null, r.a.createElement(w, {
						"data-redditstyle": !0,
						onClick: this.handleAdd,
						disabled: e.widget.data.length >= fs
					}, l.fbt._("Create New Tab", null, {
						hk: "3niCXS"
					})), r.a.createElement(w, {
						"data-redditstyle": !0,
						onClick: this.handleStartReorder,
						disabled: e.widget.data.length < 2
					}, l.fbt._("Reorder Links", null, {
						hk: "3DHcK2"
					}))))
				}
				renderReorderingContent() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(ue.k, {
						key: "reorder-form"
					}, r.a.createElement(ta, e), r.a.createElement(j.b, {
						disabled: !0
					}, l.fbt._("Posts", null, {
						hk: "rLU2h"
					})), r.a.createElement(na.a, {
						values: t.draftSort,
						render: (e, t, n, a, s) => r.a.createElement(Pn.a, {
							isDragging: n,
							isOver: a,
							canDrop: s
						}, e.text),
						onDrop: this.reorderDraft
					}), r.a.createElement(ue.f, null, r.a.createElement(jn, {
						applyText: l.fbt._("Apply", null, {
							hk: "3YBqpU"
						}),
						cancelText: l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						onApply: this.applyReorder,
						onCancel: this.cancelReorder
					})))
				}
			}
			var xs = vs;
			class Cs extends r.a.Component {
				constructor(e) {
					super(e), this.handleMenuItemTextChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange(t, this.state.menuItemUrl), this.setState({
							menuItemText: t
						})
					}, this.handleMenuItemUrlChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange(this.state.menuItemText, t), this.setState({
							menuItemUrl: t
						})
					}, this.clearState = () => this.setState({
						menuItemText: "",
						menuItemUrl: ""
					}), this.handleApply = () => {
						const {
							state: e
						} = this;
						this.props.onApply(e.menuItemText, e.menuItemUrl), this.clearState()
					}, this.handleCancel = () => {
						this.props.onCancel(), this.clearState()
					}, this.handleDelete = () => {
						this.props.onDelete(), this.clearState()
					}, this.state = {
						menuItemText: e.text || "",
						menuItemUrl: e.url || ""
					}, this.validate(this.state)
				}
				validate(e) {
					this.isALinkForm ? (this.urlValidation = ua(e.menuItemUrl), this.textValidation = pa(e.menuItemText.trim())) : this.textValidation = pa(e.menuItemText.trim())
				}
				get hasAnyButtons() {
					const {
						props: e
					} = this;
					return !!(e.onApply || e.onCancel || e.onDelete)
				}
				get isALinkForm() {
					return !!this.props.showUrlField
				}
				get isValid() {
					return this.isALinkForm ? this.textValidation === ha.Valid && this.urlValidation === ca.Valid : this.textValidation === ha.Valid
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return this.validate(t), r.a.createElement("div", null, r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						disabled: e.disabled,
						value: t.menuItemText,
						onChange: this.handleMenuItemTextChange,
						placeholder: l.fbt._("Tab Title", null, {
							hk: "15DNN5"
						})
					}), r.a.createElement(Sn.a, {
						text: t.menuItemText.trim(),
						maxChars: ma
					})), this.isALinkForm && r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						disabled: e.disabled,
						value: t.menuItemUrl,
						onChange: this.handleMenuItemUrlChange,
						placeholder: l.fbt._("URL", null, {
							hk: "4laiIR"
						})
					}), this.urlValidation === ca.Invalid && r.a.createElement(ue.c, null, l.fbt._("The link provided is invalid", null, {
						hk: "2PaAmp"
					}))), this.hasAnyButtons && r.a.createElement(ue.i, null, r.a.createElement(jn, {
						applyText: l.fbt._("Apply", null, {
							hk: "3mAjVQ"
						}),
						cancelText: l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						disabled: e.disabled,
						invalid: !this.isValid,
						onApply: e.onApply && this.handleApply,
						onCancel: e.onCancel && this.handleCancel,
						onDelete: e.onDelete && this.handleDelete
					})))
				}
			}
			var Ss = Cs,
				Is = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/ContentTypeOption.m.less"),
				ys = n.n(Is);
			const ks = s.a.wrapped(tr.a, "Inline", ys.a);
			var ws = e => r.a.createElement(ue.a, null, r.a.createElement(ks, {
				className: Object(h.a)({
					[ys.a.disabled]: e.disabled
				}),
				onClick: e.disabled ? void 0 : e.onClick
			}, e.selected ? r.a.createElement(hn.f, null) : r.a.createElement(hn.e, null), r.a.createElement(ue.e, null, e.children)));
			const _s = 10;
			var Os;
			! function(e) {
				e[e.None = 0] = "None", e[e.Link = 1] = "Link", e[e.Submenu = 2] = "Submenu"
			}(Os || (Os = {}));
			const Ds = e => "url" in e ? Os.Link : Os.Submenu;
			class Ts extends r.a.Component {
				constructor(e) {
					super(e), this.setFormSelectionToLink = () => this.setState({
						formSelection: Os.Link
					}), this.setFormSelectionToTab = () => this.setState({
						formSelection: Os.Submenu
					}), this.updateContent = (e, t) => {
						this.setState({
							menuItemText: e,
							menuItemUrl: t
						}), this.isALinkForm ? this.props.onUpdate({
							text: e,
							url: t
						}) : this.props.onUpdate({
							text: e,
							children: this.state.menuItemChildren
						})
					}, this.addNewMenuItem = (e, t) => {
						const n = {
								text: e,
								url: t
							},
							a = [...this.state.menuItemChildren, n];
						this.setState({
							menuItemChildren: a
						}), this.isASubmenuForm && this.props.onUpdate({
							text: this.state.menuItemText,
							children: a
						})
					}, this.openNewSubmenuLinkEditor = () => this.setState({
						isNewSubmenuEditorOpen: !0,
						isEditSubmenuEditorOpen: !1
					}), this.closeNewSubmenuLinkEditor = () => this.setState({
						isNewSubmenuEditorOpen: !1
					}), this.openEditSubmenuEditorAtIndex = e => () => this.setState({
						editingIndex: e,
						isNewSubmenuEditorOpen: !1,
						isEditSubmenuEditorOpen: !0
					}), this.applyChildEditAtIndex = e => (t, n) => {
						this.setState(a => {
							const r = [...a.menuItemChildren];
							return r[e] = {
								text: t,
								url: n
							}, this.props.onUpdate({
								text: a.menuItemText,
								children: r
							}), {
								menuItemChildren: r,
								isEditSubmenuEditorOpen: !1
							}
						})
					}, this.closeEditSubmenuEditor = () => this.setState({
						isEditSubmenuEditorOpen: !1
					}), this.deleteChildContentAtIndex = e => () => {
						this.setState(t => {
							const n = [...t.menuItemChildren];
							return n.splice(e, 1), this.props.onUpdate({
								text: t.menuItemText,
								children: n
							}), {
								menuItemChildren: n,
								isEditSubmenuEditorOpen: !1
							}
						})
					}, this.handleSave = () => {
						const {
							props: e,
							state: t
						} = this;
						switch (t.formSelection) {
							case Os.Link:
								return e.sendEvent(Object(W.f)("menu_links_top_save")), e.onSave({
									text: t.menuItemText,
									url: t.menuItemUrl
								});
							case Os.Submenu:
								return e.sendEvent(Object(W.f)("menu_links_sub_save")), e.onSave({
									text: t.menuItemText,
									children: t.menuItemChildren
								})
						}
					}, this.handleCancel = () => this.props.stopEditing(), this.handleDelete = e => this.props.onDelete && this.props.onDelete(), this.startReorderingChildren = () => this.setState(e => ({
						draftChildren: [...e.menuItemChildren],
						reordering: !0
					})), this.applyReorder = () => this.setState(e => ({
						menuItemChildren: e.draftChildren,
						reordering: !1
					})), this.cancelReorder = () => this.setState({
						reordering: !1
					}), this.reorderDraft = (e, t, n) => this.setState({
						draftChildren: n
					}), this.state = {
						draftChildren: [],
						editingIndex: 0,
						formSelection: this.isANewMenuItemForm ? Os.None : Ds(e.editingItem),
						menuItemText: e.editingItem ? e.editingItem.text : "",
						menuItemUrl: e.editingItem ? e.editingItem.url : "",
						menuItemChildren: e.editingItem && e.editingItem.children || [],
						isNewSubmenuEditorOpen: this.isANewMenuItemForm,
						isEditSubmenuEditorOpen: !1,
						reordering: !1
					}, this.validate(this.state)
				}
				validate(e) {
					this.isALinkForm ? (this.urlValidation = ua(e.menuItemUrl), this.textValidation = pa(e.menuItemText)) : this.isASubmenuForm && (this.textValidation = pa(e.menuItemText), this.childrenValidation = ba(e.menuItemChildren))
				}
				get isANewMenuItemForm() {
					return !this.props.editingItem
				}
				get isALinkForm() {
					return this.state.formSelection === Os.Link
				}
				get isASubmenuForm() {
					return this.state.formSelection === Os.Submenu
				}
				get isEditing() {
					return this.state.reordering || this.state.isEditSubmenuEditorOpen
				}
				get isValid() {
					return this.isALinkForm ? this.textValidation === ha.Valid && this.urlValidation === ca.Valid : !!this.isASubmenuForm && (this.childrenValidation === ga.Valid && this.textValidation === ha.Valid)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return this.validate(t), r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, this.isANewMenuItemForm ? l.fbt._("Tab type", null, {
						hk: "274wIj"
					}) : this.isALinkForm ? l.fbt._("Link Tab", null, {
						hk: "19Feoy"
					}) : l.fbt._("Submenu Tab", null, {
						hk: "2kX9s8"
					})), "numRemaining" in e && r.a.createElement(ue.g, null, l.fbt._("Remaining Tabs: {numRemainig}", [l.fbt._param("numRemainig", (e.numRemaining || 0).toLocaleString())], {
						hk: "3hiwvD"
					})), this.isANewMenuItemForm && r.a.createElement(ws, {
						disabled: this.isEditing,
						selected: t.formSelection === Os.Link,
						onClick: this.setFormSelectionToLink
					}, l.fbt._("Create link tab", null, {
						hk: "30Id6K"
					})), this.isALinkForm && r.a.createElement(Ss, {
						disabled: this.isEditing,
						onChange: this.updateContent,
						text: t.menuItemText,
						url: t.menuItemUrl,
						showUrlField: !0
					}), this.isANewMenuItemForm && r.a.createElement(ws, {
						disabled: this.isEditing,
						selected: t.formSelection === Os.Submenu,
						onClick: this.setFormSelectionToTab
					}, l.fbt._("Create submenu tab", null, {
						hk: "2daEB9"
					})), this.isASubmenuForm && r.a.createElement(Ss, {
						disabled: this.isEditing,
						text: t.menuItemText,
						onChange: this.updateContent
					})), this.isASubmenuForm && r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Submenu Links", null, {
						hk: "4o5RVv"
					})), r.a.createElement(ue.g, null, l.fbt._("Remaining Links : {numLinks}", [l.fbt._param("numLinks", (_s - t.menuItemChildren.length).toLocaleString())], {
						hk: "3uF6sz"
					})), t.reordering ? this.renderSortableChildren() : this.renderEditableChildren(), this.renderNewSubmenuLinkEditor(), !this.isANewMenuItemForm && t.menuItemChildren.length > 1 && r.a.createElement(w, {
						"data-redditstyle": !0,
						disabled: this.isEditing,
						onClick: this.startReorderingChildren
					}, l.fbt._("Reorder Submenu Links", null, {
						hk: "3lTd5l"
					}))), this.renderErrors(), r.a.createElement(ue.f, null, r.a.createElement(jn, {
						applyText: l.fbt._("Save", null, {
							hk: "O0HcL"
						}),
						cancelText: l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						disabled: this.isEditing,
						invalid: !this.isValid,
						onApply: this.handleSave,
						onCancel: this.handleCancel
					}), !this.isANewMenuItemForm && e.onDelete && r.a.createElement(D, {
						"data-redditstyle": !0,
						disabled: this.isEditing,
						onClick: this.handleDelete
					}, l.fbt._("Delete Tab", null, {
						hk: "VhZUI"
					}))))
				}
				renderErrors() {
					const {
						apiState: e
					} = this.props;
					if (!e || e.apiRequestStatus !== zt.a.Failed) return;
					const {
						apiError: t
					} = e;
					return t.fields && t.fields.length ? r.a.createElement(a.Fragment, null, t.fields.map(e => r.a.createElement(ue.c, {
						key: e.field
					}, e.msg))) : r.a.createElement(ue.c, null, t.type)
				}
				renderEditableChildren() {
					const {
						state: e
					} = this;
					return e.menuItemChildren.map((t, n) => e.isEditSubmenuEditorOpen && e.editingIndex === n ? r.a.createElement(ue.i, null, r.a.createElement(_, null, l.fbt._("Edit Submenu Link", null, {
						hk: "2fjDOP"
					})), r.a.createElement(Ss, {
						onApply: this.applyChildEditAtIndex(n),
						onCancel: this.closeEditSubmenuEditor,
						onDelete: this.deleteChildContentAtIndex(n),
						showUrlField: !0,
						text: t.text,
						url: t.url
					})) : r.a.createElement(Fn, {
						onClick: this.openEditSubmenuEditorAtIndex(n),
						disabled: e.isEditSubmenuEditorOpen
					}, r.a.createElement(ls, {
						text: t.text,
						url: t.url
					})))
				}
				renderSortableChildren() {
					const {
						state: e
					} = this;
					return r.a.createElement("div", null, r.a.createElement(na.a, {
						values: e.draftChildren,
						render: (e, t, n, a, s) => r.a.createElement(Pn.a, {
							isDragging: n,
							isOver: a,
							canDrop: s
						}, e.text),
						onDrop: this.reorderDraft
					}), r.a.createElement(ue.f, null, r.a.createElement(jn, {
						applyText: l.fbt._("Apply", null, {
							hk: "2UugCc"
						}),
						cancelText: l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						onApply: this.applyReorder,
						onCancel: this.cancelReorder
					})))
				}
				renderNewSubmenuLinkEditor() {
					const {
						state: e
					} = this;
					if (!(e.menuItemChildren.length >= _s || this.isEditing)) return 0 === e.menuItemChildren.length ? r.a.createElement(ue.i, null, r.a.createElement(Ss, {
						disabled: this.isEditing,
						onApply: this.addNewMenuItem,
						showUrlField: !0
					})) : e.isNewSubmenuEditorOpen ? r.a.createElement(ue.i, null, r.a.createElement(_, null, l.fbt._("Add Submenu Link", null, {
						hk: "2np0tD"
					})), r.a.createElement(Ss, {
						disabled: this.isEditing,
						onApply: this.addNewMenuItem,
						onCancel: this.closeNewSubmenuLinkEditor,
						showUrlField: !0
					})) : r.a.createElement(ue.i, null, r.a.createElement(w, {
						"data-redditstyle": !0,
						disabled: this.isEditing,
						onClick: this.openNewSubmenuLinkEditor
					}, l.fbt._("Add Submenu Link", null, {
						hk: "1WNaBy"
					})))
				}
			}
			var js = Object(P.c)(Ts);

			function Ps() {
				return (Ps = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Rs = 5;
			var Ns;
			! function(e) {
				e[e.None = 0] = "None", e[e.Edit = 1] = "Edit", e[e.Add = 2] = "Add"
			}(Ns || (Ns = {}));
			const As = e => ({
				relativePosition: 0,
				title: e
			});
			var Ws = Object(P.c)(class extends Er {
				constructor() {
					super(...arguments), this.goToAddMenuContent = () => this.setState(e => ({
						editMode: Ns.Add
					})), this.goToEditMenuContent = e => this.setState(t => ({
						editMode: Ns.Edit,
						editIndex: e
					})), this.returnToMainMenu = () => {
						this.setState(e => ({
							editMode: Ns.None,
							editIndex: -1
						})), _a()(this.props.widget, this.state.widget) || this.setWidgetState(Object.assign({}, this.props.widget)), this.props.undirtyEditor(), this.props.closeModal()
					}, this.saveMenuWidget = e => {
						this.startApiRequestThen(t => {
							!e.id || e.data.length || e.showWiki ? this.props.saveChanges(e, t) : this.props.deleteWidget(e, t), this.setWidgetState(e)
						})
					}, this.saveUpdatedMenuWidget = () => {
						const e = [...this.state.widget.data];
						this.saveMenuWidget(this.getUpdatedWidget({
							data: e
						}))
					}, this.editMenuItemAtCurrentIndex = e => {
						if (this.state.editIndex < 0) return;
						const t = [...this.state.widget.data];
						t[this.state.editIndex] = e, this.saveMenuWidget(this.getUpdatedWidget({
							data: t
						}))
					}, this.deleteMenuItemAtCurrentIndex = () => {
						if (this.state.editIndex < 0) return;
						const e = [...this.state.widget.data];
						e.splice(this.state.editIndex, 1), this.saveMenuWidget(this.getUpdatedWidget({
							data: e
						}))
					}, this.handleUpdate = e => {
						const t = this.state.editIndex >= 0 ? this.state.editIndex : this.props.widget.data.length,
							n = [...this.state.widget.data];
						n[t] = e, this.setWidgetState({
							data: n
						})
					}
				}
				afterApiRequestCompleted() {
					this.state.apiRequestId && this.props.releaseRequest(this.state.apiRequestId), this.returnToMainMenu()
				}
				getInitialState(e) {
					return {
						widget: e,
						editMode: Ns.None,
						editIndex: -1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.getApiRequestFromProps(e);
					switch (t.editMode) {
						case Ns.None:
							return r.a.createElement(xs, Ps({}, e, {
								onAdd: this.goToAddMenuContent,
								onEdit: this.goToEditMenuContent,
								onSave: this.saveMenuWidget,
								onUpdate: this.handleUpdate
							}));
						case Ns.Edit:
							return r.a.createElement(js, Ps({}, e, {
								apiState: n,
								breadcrumbs: [As(e.title)],
								editingItem: e.widget.data[t.editIndex],
								onDelete: this.deleteMenuItemAtCurrentIndex,
								onSave: this.editMenuItemAtCurrentIndex,
								onUpdate: this.handleUpdate,
								stopEditing: this.returnToMainMenu,
								title: l.fbt._("Edit Tab", null, {
									hk: "41sQC6"
								})
							}));
						case Ns.Add:
							return r.a.createElement(js, Ps({}, e, {
								apiState: n,
								breadcrumbs: [As(e.title)],
								numRemaining: Rs - e.widget.data.length,
								onSave: this.saveUpdatedMenuWidget,
								onUpdate: this.handleUpdate,
								stopEditing: this.returnToMainMenu,
								title: l.fbt._("Create New Tab", null, {
									hk: "1uVGNP"
								})
							}))
					}
				}
			});
			var Fs = class extends Ka {
					constructor() {
						super(...arguments), this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					isValidWidget() {
						return !0
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t;
						return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(Zn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: n.styles
						}), this.hasApiErrors() && r.a.createElement(ue.f, null, r.a.createElement(ue.c, null, l.fbt._("Something went wrong", null, {
							hk: "3OW5jo"
						}))), r.a.createElement(ue.f, null, r.a.createElement(k, {
							onClick: this.handleSaveWidget,
							disabled: !this.isValidWidget() || this.isRequestInProgress(),
							"data-redditstyle": !0
						}, l.fbt._("Save", null, {
							hk: "O0HcL"
						})), r.a.createElement(O, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))))
					}
				},
				Bs = n("./src/reddit/selectors/postFlair.ts"),
				Ls = (n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./src/higherOrderComponents/asTooltip.tsx")),
				Us = n("./src/reddit/components/Flair/index.tsx"),
				Ms = n("./src/reddit/helpers/flair.ts"),
				qs = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/FlairTemplateItem.m.less"),
				Vs = n.n(qs);
			const Ks = s.a.wrapped(Us.b, "FlairComponent", Vs.a);
			var Hs = e => {
					const t = Object(Ms.c)(e.flairTemplate);
					return r.a.createElement(tr.a, null, r.a.createElement(Ks, {
						flair: t,
						forceSmallEmojis: !0
					}))
				},
				Gs = n("./src/reddit/constants/keycodes.ts"),
				zs = n("./src/reddit/controls/Dropdown/index.tsx"),
				Qs = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ys = n("./src/reddit/controls/SearchBar/index.tsx"),
				Zs = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Js = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Xs = n("./src/reddit/models/Flair/index.ts"),
				$s = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairPickerDropdown.m.less"),
				el = n.n($s);
			const tl = "PostFlairWidget--FlairPicker",
				nl = Object(c.c)({
					isOpen: Object(At.b)(tl)
				}),
				al = Object(o.b)(nl, e => ({
					onOpenDropdown: () => {
						e(Object(Ot.h)({
							tooltipId: tl
						}))
					}
				})),
				rl = s.a.wrapped(zs.a, "StyledDropdown", el.a),
				sl = s.a.wrapped(Zs.b, "DropdownTriangle", el.a),
				ll = Object(Ls.a)(rl),
				il = s.a.wrapped(Js.a, "InlineButton", el.a),
				ol = s.a.div("DropdownContainer", el.a),
				dl = s.a.div("SearchBarContainer", el.a),
				cl = s.a.wrapped(Qs.b, "Row", el.a),
				ul = s.a.wrapped(Hs, "FlairTemplateItem", el.a);
			class ml extends r.a.Component {
				constructor(e) {
					super(e), this.searchRef = null, this.handleFlairSelection = (e, t, n) => {
						e || (this.setState({
							selectedFlairText: n,
							search: ""
						}), this.props.handleSelectFlair(t))
					}, this.handleKeyDown = e => {
						e.stopPropagation(), e.which === Gs.a.Escape && e.preventDefault()
					}, this.onTextChange = e => {
						!this.props.isOpen && this.props.onOpenDropdown();
						const t = e.currentTarget.value;
						"" !== t && this.flairTexts.includes(t.toLowerCase()) ? this.setState({
							search: t
						}) : (this.setState({
							selectedFlairText: "",
							search: t
						}), this.props.handleSelectFlair(""))
					}, this.onOpenDropdown = e => {
						this.props.onOpenDropdown(), this.searchRef && this.searchRef.focus()
					}, this.setSearchRef = e => this.searchRef = e, this.filteredPostFlair = {}, this.flairTexts = Object.keys(e.postFlairData.templates).map(t => e.postFlairData.templates[t].text.toLowerCase()), this.state = {
						search: "",
						selectedFlairText: ""
					}, this.updateFilteredPostFlair(this.state)
				}
				componentWillUpdate(e, t) {
					t.search !== this.state.search && this.updateFilteredPostFlair(t)
				}
				updateFilteredPostFlair(e) {
					e.search || (this.filteredPostFlair = this.props.postFlairData.templates);
					const t = e.search.toLowerCase();
					let n;
					n = this.filteredPostFlair, this.filteredPostFlair = Object.keys(n).filter(e => -1 !== n[e].text.toLowerCase().indexOf(t)).reduce((e, t) => Object.assign(Object.assign({}, e), {
						[t]: n[t]
					}), {})
				}
				render() {
					const {
						state: e
					} = this, {
						className: t,
						isOpen: n,
						widget: a
					} = this.props, s = document.getElementById(Dt.a);
					return r.a.createElement(ol, {
						className: t,
						id: tl,
						onKeyDown: this.handleKeyDown
					}, r.a.createElement(il, {
						"aria-expanded": n,
						"aria-haspopup": !0,
						className: Object(h.a)(t, {
							"dropdown-open": n
						}),
						onClick: this.onOpenDropdown
					}, r.a.createElement(dl, null, r.a.createElement(Ys.a, {
						autoFocus: !0,
						onTextChange: this.onTextChange,
						placeholder: l.fbt._("Search flair", null, {
							hk: "2Y1dbr"
						}),
						innerRef: this.setSearchRef,
						value: e.search || e.selectedFlairText
					})), r.a.createElement(sl, null)), r.a.createElement(ll, {
						isOpen: n,
						tooltipId: tl,
						noFocus: !0,
						container: s
					}, Object.keys(this.filteredPostFlair).map(e => {
						const t = a.order.includes(e);
						return r.a.createElement(cl, {
							className: Object(h.a)({
								[el.a.disabled]: t
							}),
							key: this.filteredPostFlair[e].id,
							noIcon: !0,
							onClick: () => this.handleFlairSelection(t, this.filteredPostFlair[e].id, this.filteredPostFlair[e].text),
							"data-redditstyle": !0
						}, r.a.createElement(ul, {
							flairTemplate: this.filteredPostFlair[e],
							flairTemplateType: Xs.d.LinkFlair
						}))
					})))
				}
			}
			var hl = al(ml),
				pl = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/AddFlair.m.less"),
				gl = n.n(pl);
			const bl = s.a.wrapped(tr.a, "ControlRow", gl.a);
			class El extends r.a.Component {
				constructor(e) {
					super(e), this.isValidForm = () => !!this.state.selectedFlair, this.handleSelectFlair = e => this.setState({
						selectedFlair: e
					}), this.handleSaveFlair = () => this.props.handleSaveFlair(this.state.selectedFlair), this.state = {
						selectedFlair: ""
					}
				}
				render() {
					const {
						handleCancelFromSubMenu: e,
						postFlairData: t,
						widget: n
					} = this.props;
					return r.a.createElement(ue.k, null, r.a.createElement(ta, this.props), r.a.createElement(bl, null, r.a.createElement(hl, {
						handleSelectFlair: this.handleSelectFlair,
						postFlairData: t,
						widget: n
					})), r.a.createElement(ue.f, null, r.a.createElement(k, {
						disabled: !this.isValidForm(),
						onClick: this.handleSaveFlair,
						"data-redditstyle": !0
					}, l.fbt._("Add flair", null, {
						hk: "4oqbLK"
					})), r.a.createElement(O, {
						onClick: e,
						"data-redditstyle": !0
					}, l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}
			}
			var fl = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairList.m.less"),
				vl = n.n(fl);
			const xl = s.a.div("FlairContainer", vl.a),
				Cl = s.a.wrapped(Js.a, "InlineButton", vl.a),
				Sl = s.a.wrapped(In.a, "TrashIcon", vl.a),
				Il = s.a.div("FlairWrapper", vl.a);
			var yl = e => {
					const {
						flairTemplates: t,
						handleRemoveFlair: n,
						order: a
					} = e;
					return r.a.createElement(xl, null, a.map(e => r.a.createElement(Il, null, r.a.createElement(Hs, {
						flairTemplate: t[e],
						flairTemplateType: Xs.d.LinkFlair
					}), r.a.createElement(Cl, {
						onClick: () => n(e)
					}, r.a.createElement(Sl, null)))))
				},
				kl = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/ReorderFlairList.m.less"),
				wl = n.n(kl);
			const _l = s.a.wrapped(k, "Button", wl.a),
				Ol = s.a.wrapped(O, "SecondaryButton", wl.a),
				Dl = s.a.div("ButtonContainer", wl.a),
				Tl = e => e;
			var jl = e => {
					const {
						flairTemplates: t,
						handleCancelOrderEditing: n,
						handleSaveOrder: a,
						handleUpdateSort: s,
						order: i
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Dl, null, r.a.createElement(Ol, {
						onClick: n,
						"data-redditstyle": !0
					}, l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(_l, {
						onClick: a,
						"data-redditstyle": !0
					}, l.fbt._("Save", null, {
						hk: "3gwTS0"
					}))), r.a.createElement(na.a, {
						values: i,
						getReactKey: Tl,
						render: (e, n, a, s, l) => r.a.createElement(Pn.a, {
							key: e,
							isDragging: a,
							isOver: s,
							canDrop: l
						}, r.a.createElement(Hs, {
							flairTemplate: t[e],
							flairTemplateType: Xs.d.LinkFlair
						})),
						onDrop: (e, t, n) => s(n)
					}))
				},
				Pl = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/MainWidgetContent.m.less"),
				Rl = n.n(Pl);
			const Nl = 30,
				Al = 50,
				Wl = s.a.wrapped(ue.f, "FlairPaneGroup", Rl.a),
				Fl = s.a.wrapped(w, "TertiaryButton", Rl.a),
				Bl = s.a.wrapped(ue.b, "FormElementDescription", Rl.a);
			class Ll extends r.a.Component {
				constructor(e) {
					super(e), this.handleUpdateSort = e => {
						this.setState({
							order: e
						})
					}, this.handleCancelOrderEditing = () => {
						this.setState({
							order: this.props.widget.order
						}), this.props.handleCancelFromSubMenu()
					}, this.handleSaveOrder = () => {
						this.props.handleSaveOrder(this.state.order)
					}, this.state = {
						order: e.widget.order
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState({
						order: e.widget.order
					})
				}
				render() {
					const {
						editMode: e,
						handleCancelEditing: t,
						handleDeleteWidget: n,
						handleDisplayChange: a,
						handleRemoveFlair: s,
						handleSaveWidget: i,
						handleTitleChange: o,
						isRequestInProgress: d,
						isValidWidget: c,
						onAdd: u,
						onChangeWidgetStyles: m,
						onReorder: h,
						postFlairData: p,
						subredditId: g,
						widget: b
					} = this.props, E = p.templates;
					return r.a.createElement(ue.k, null, r.a.createElement(ta, this.props), r.a.createElement(ue.h, null, l.fbt._("Widget title", null, {
						hk: "25M9MA"
					})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						placeholder: l.fbt._("Title text", null, {
							hk: "14qr0C"
						}),
						onChange: o,
						value: b.shortName
					}), r.a.createElement(Sn.a, {
						text: b.shortName,
						maxChars: Nl
					})), r.a.createElement(Zn, {
						onChangeWidgetStyles: m,
						subredditId: g,
						widgetStyles: b.styles
					}), r.a.createElement(ue.h, null, l.fbt._("Layout", null, {
						hk: "26WqfC"
					})), r.a.createElement(Oe.a, {
						value: xe.d.List,
						label: l.fbt._("Single column", null, {
							hk: "usClX"
						}),
						selected: b.display === xe.d.List,
						onClick: () => a(xe.d.List)
					}), r.a.createElement(Oe.a, {
						value: xe.d.Cloud,
						label: l.fbt._("Word cloud", null, {
							hk: "6Iqk1"
						}),
						selected: b.display === xe.d.Cloud,
						onClick: () => a(xe.d.Cloud)
					}), r.a.createElement(Wl, null, r.a.createElement(Fl, {
						"data-redditstyle": !0,
						disabled: b.order.length >= Al,
						onClick: u
					}, l.fbt._("Add flair", null, {
						hk: "4oqbLK"
					})), r.a.createElement(Fl, {
						"data-redditstyle": !0,
						disabled: b.order.length <= 1,
						onClick: h
					}, l.fbt._("Reorder", null, {
						hk: "1tQe48"
					}))), r.a.createElement(Bl, null, l.fbt._("Remaining flairs: {count}", [l.fbt._param("count", Al - b.order.length)], {
						hk: "3HYvA5"
					})), e === Ml.Reorder && r.a.createElement(jl, {
						flairTemplates: E,
						handleCancelOrderEditing: this.handleCancelOrderEditing,
						handleSaveOrder: this.handleSaveOrder,
						handleUpdateSort: this.handleUpdateSort,
						order: this.state.order
					}), e === Ml.None && r.a.createElement(r.a.Fragment, null, r.a.createElement(yl, {
						flairTemplates: E,
						handleRemoveFlair: s,
						order: b.order
					}), r.a.createElement(ue.f, null, r.a.createElement(k, {
						disabled: !c() || d(),
						onClick: i,
						"data-redditstyle": !0
					}, l.fbt._("Save", null, {
						hk: "1qAtYt"
					})), r.a.createElement(O, {
						onClick: t,
						"data-redditstyle": !0
					}, l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))), b.id && r.a.createElement(ue.f, null, r.a.createElement(D, {
						onClick: n,
						disabled: d(),
						"data-redditstyle": !0
					}, l.fbt._("Delete Widget", null, {
						hk: "14cOwx"
					})))))
				}
			}

			function Ul() {
				return (Ul = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ml;
			! function(e) {
				e.Add = "Add", e.None = "None", e.Reorder = "Reorder"
			}(Ml || (Ml = {}));
			const ql = Object(o.b)(() => Object(c.c)({
					postFlairData: Bs.d,
					subredditName: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(ge.R)(e, {
							subredditId: n
						}).name
					}
				})),
				Vl = e => ({
					relativePosition: 0,
					title: e
				});
			var Kl = ql(class extends Er {
					constructor() {
						super(...arguments), this.returnToMainMenu = () => this.setState(e => ({
							editMode: Ml.None,
							editIndex: -1
						})), this.goToAddFlair = () => this.setState(e => ({
							editMode: Ml.Add
						})), this.goToReorderFlair = () => this.setState(e => ({
							editMode: Ml.Reorder
						})), this.handleTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.handleDisplayChange = e => {
							this.setWidgetState({
								display: e
							})
						}, this.handleSaveFlair = e => {
							this.setWidgetState({
								order: [...this.state.widget.order, e]
							}), this.returnToMainMenu()
						}, this.handleRemoveFlair = e => {
							const t = this.state.widget.order.filter(t => t !== e);
							this.setWidgetState({
								order: t
							})
						}, this.handleSaveOrder = e => {
							this.setWidgetState({
								order: e
							}), this.returnToMainMenu()
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					getInitialState(e) {
						return {
							widget: e,
							editMode: Ml.None,
							editIndex: -1
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !!e.display && !!e.shortName.trim().length
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							editMode: n,
							widget: a
						} = t;
						switch (n) {
							case Ml.None:
							case Ml.Reorder:
								return r.a.createElement(Ll, Ul({}, e, {
									editMode: n,
									handleCancelEditing: this.handleCancelEditing,
									handleCancelFromSubMenu: this.returnToMainMenu,
									handleDeleteWidget: this.handleDeleteWidget,
									handleDisplayChange: this.handleDisplayChange,
									handleRemoveFlair: this.handleRemoveFlair,
									handleSaveOrder: this.handleSaveOrder,
									handleSaveWidget: this.handleSaveWidget,
									handleTitleChange: this.handleTitleChange,
									isRequestInProgress: this.isRequestInProgress,
									isValidWidget: this.isValidWidget,
									onAdd: this.goToAddFlair,
									onChangeWidgetStyles: this.onChangeWidgetStyles,
									onReorder: this.goToReorderFlair,
									widget: a
								}));
							case Ml.Add:
								return r.a.createElement(El, Ul({}, e, {
									afterApiRequestCompleted: this.afterApiRequestCompleted,
									breadcrumbs: [Vl(e.title)],
									handleCancelFromSubMenu: this.returnToMainMenu,
									handleSaveFlair: this.handleSaveFlair,
									stopEditing: this.returnToMainMenu,
									title: l.fbt._("Add flair", null, {
										hk: "2HFPE"
									}),
									widget: a
								}))
						}
					}
				}),
				Hl = n("./src/reddit/components/StructuredStyles/Forms/SubredditRulesEditor/index.m.less"),
				Gl = n.n(Hl);
			const zl = s.a.wrapped(ue.b, "FormElementDescription", Gl.a),
				Ql = Object(c.c)({
					rulesWidget: Ce.h,
					subreddit: ge.R
				});
			var Yl = Object(o.b)(Ql, e => ({
					refreshRulesWidget: (t, n) => e(Object(xn.f)(t, n))
				}))(class extends Fr {
					constructor() {
						super(...arguments), this.handleChangeDisplay = e => {
							this.setWidgetState({
								display: e
							})
						}, this.handleRefreshWidget = e => {
							if (this.state.apiRequestId) return;
							const t = this.props.subreddit.id,
								n = Object(zt.b)();
							this.setState({
								apiRequestId: n
							}, () => {
								this.props.refreshRulesWidget(t, n)
							})
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					isValidWidget() {
						return !0
					}
					componentWillReceiveProps(e) {
						if (super.componentWillReceiveProps(e), !this.props.widget.id && this.state.apiRequestId) {
							const t = e.apiRequestStates[this.state.apiRequestId];
							t && t.apiRequestStatus !== zt.a.Pending && (e.rulesWidget && e.onReloadWithWidget ? e.onReloadWithWidget(e.rulesWidget) : this.props.releaseRequest(this.state.apiRequestId))
						}!this.props.widget.id && e.widget.id && this.setWidgetState(e.widget)
					}
					hasRules() {
						return this.state.widget.data && !!this.state.widget.data.length
					}
					render() {
						const {
							props: e
						} = this, {
							widget: t
						} = this.state;
						return r.a.createElement(ue.k, null, r.a.createElement(ta, e), this.hasRules() && r.a.createElement("div", null, r.a.createElement(ue.f, null, r.a.createElement(ue.l, null, r.a.createElement(Zn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: t.styles
						})), r.a.createElement(ue.m, null, l.fbt._("Subreddit rules widget content", null, {
							hk: "3Z2vrU"
						})), r.a.createElement(ue.h, null, l.fbt._("Layout", null, {
							hk: "1NEyoR"
						})), r.a.createElement(ue.a, null, r.a.createElement(je.a, {
							name: "rulesEditor",
							onChange: this.handleChangeDisplay,
							value: t.display
						}, r.a.createElement(Oe.a, {
							value: "full",
							label: l.fbt._("Fully display rules and description", null, {
								hk: "1kdHUJ"
							})
						}), r.a.createElement(Oe.a, {
							value: "compact",
							label: l.fbt._("Display rules, collapse description", null, {
								hk: "2SvOfW"
							})
						}))), r.a.createElement("a", {
							href: "https://www.reddit.com/r/".concat(e.subreddit.name, "/about/rules"),
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.a.createElement(w, {
							"data-redditstyle": !0
						}, l.fbt._("Edit Community Rules", null, {
							hk: "m3RfW"
						})))), r.a.createElement(ue.f, null, r.a.createElement(k, {
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, l.fbt._("Save", null, {
							hk: "1qAtYt"
						})), r.a.createElement(O, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})))), !this.hasRules() && r.a.createElement("div", null, r.a.createElement(ue.f, null, r.a.createElement(zl, null, l.fbt._("Before you can display your community's rules, you'll have to create them", null, {
							hk: "4utUwD"
						})), r.a.createElement("a", {
							href: "https://www.reddit.com/r/".concat(e.subreddit.name, "/about/rules"),
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.a.createElement(k, {
							"data-redditstyle": !0
						}, l.fbt._("Create Community Rules", null, {
							hk: "4hQc8y"
						})))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Added your rules?", null, {
							hk: "1iWFd4"
						})), r.a.createElement(zl, null, l.fbt._("Refresh this pane to customize how your rules will be displayed in this widget", null, {
							hk: "44eH6"
						})), r.a.createElement(O, {
							onClick: this.handleRefreshWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, l.fbt._("Refresh Rules Widget", null, {
							hk: "z0wVG"
						})))))
					}
				}),
				Zl = n("./src/reddit/components/StructuredStyles/Forms/TextAreaEditor/index.m.less"),
				Jl = n.n(Zl);
			const Xl = 30,
				$l = 1e4,
				ei = s.a.wrapped(hn.i, "Textarea", Jl.a);
			var ti = class extends Ka {
				constructor() {
					super(...arguments), this.onTitleChange = e => {
						this.setWidgetState({
							shortName: e.currentTarget.value
						})
					}, this.onTextChange = e => {
						this.setWidgetState({
							text: e.currentTarget.value
						})
					}, this.onChangeWidgetStyles = e => {
						this.setWidgetState({
							styles: e
						})
					}
				}
				isValidWidget() {
					const e = this.state.widget.shortName,
						t = this.state.widget.text;
					return !(!e || !t) && (e.trim().length > 0 && e.length <= Xl && t.trim().length > 0 && t.length <= $l)
				}
				render() {
					const {
						props: e
					} = this, {
						widget: t
					} = this.state;
					return r.a.createElement(ue.k, null, r.a.createElement(ta, e), r.a.createElement(ue.h, null, l.fbt._("Widget title", null, {
						hk: "3Ka9sg"
					})), r.a.createElement(ue.i, null, r.a.createElement(hn.c, {
						placeholder: l.fbt._("Widget title", null, {
							hk: "Dk5mv"
						}),
						value: t.shortName,
						onChange: this.onTitleChange
					}), r.a.createElement(Sn.a, {
						maxChars: Xl,
						text: t.shortName
					})), r.a.createElement(ue.i, null, r.a.createElement(Zn, {
						onChangeWidgetStyles: this.onChangeWidgetStyles,
						subredditId: e.subredditId,
						widgetStyles: t.styles
					})), r.a.createElement(ue.m, null, l.fbt._("Textarea widget content", null, {
						hk: "3p83zo"
					})), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Text", null, {
						hk: "1qBGzd"
					})), r.a.createElement(ei, {
						value: t.text,
						onChange: this.onTextChange
					}), r.a.createElement(Sn.a, {
						maxChars: $l,
						text: t.text
					})), this.hasApiErrors() && r.a.createElement(ue.f, null, r.a.createElement(ue.c, null, l.fbt._("Something went wrong", null, {
						hk: "44ALrV"
					}))), r.a.createElement(ue.f, null, r.a.createElement(k, {
						onClick: this.handleSaveWidget,
						disabled: !this.isValidWidget() || this.isRequestInProgress(),
						"data-redditstyle": !0
					}, l.fbt._("Save", null, {
						hk: "3j4GMz"
					})), r.a.createElement(O, {
						onClick: this.handleCancelEditing,
						"data-redditstyle": !0
					}, l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))), e.widget.id && r.a.createElement(ue.f, null, r.a.createElement(D, {
						onClick: this.handleDeleteWidget,
						disabled: this.isRequestInProgress(),
						"data-redditstyle": !0
					}, l.fbt._("Delete Widget", null, {
						hk: "GmyXE"
					}))))
				}
			};
			const ni = e => r.a.createElement("div", null, 'Unknown widget kind "'.concat(e.widget.kind, '"')),
				ai = e => {
					switch (e.kind) {
						case "textarea":
							return ti;
						case "button":
							return Ba;
						case "subreddit-rules":
							return Yl;
						case "image":
							return $r;
						case "community-list":
							return ir;
						case "calendar":
							return $a;
						case "id-card":
							return Kr;
						case "menu":
							return Ws;
						case "custom":
							return Nr;
						case "moderators":
							return Fs;
						case "post-flair":
							return Kl;
						default:
							return ni
					}
				};
			class ri extends r.a.Component {
				componentWillMount() {
					this.props.startEditing(this.props.widget)
				}
				render() {
					const {
						props: e
					} = this, t = ai(e.widget);
					return r.a.createElement(t, e)
				}
			}
			var si = function(e) {
				const t = Object(c.c)({
					apiRequestStates: Qt.a,
					isDirty: pe.i,
					isUnsavedChangesModalOpen: Object(re.b)(Cn),
					widget: (e, t) => Object(Ce.k)(e, t)
				});
				return Object(o.b)(t, (e, t) => ({
					saveChanges: (n, a) => {
						if (t.sendEventWithName) {
							const e = {
								widgetKind: n.kind
							};
							if ("post-flair" === n.kind) {
								const t = n;
								e.count = t.order.length
							}
							n.id || t.sendEventWithName("create_widget", e), t.sendEventWithName("save_widget", e)
						}
						const r = n.id ? xn.e : xn.c;
						e(r(t.subredditId, n, a))
					},
					closeModal: () => {
						e(Object(Z.g)(Cn))
					},
					deleteWidget: (n, a) => {
						n.id && (e(xn.d(t.subredditId, n, a)), t.sendEventWithName && t.sendEventWithName("delete_widget", {
							widgetKind: n.kind
						}))
					},
					releaseRequest: t => {
						e(Object(Gt.g)(t))
					},
					stopEditing: () => {
						e(J.m()), t.stopEditing(), e(Object(Z.g)(Cn))
					},
					startEditing: t => {
						e(xn.b({
							widgetId: t.id
						}))
					},
					toggleLeaveMenuUnsavedModal: () => {
						e(Object(Z.i)(Cn))
					},
					dirtyEditor: () => {
						e(J.b())
					},
					undirtyEditor: () => {
						e(J.m())
					}
				}), (e, t, n) => Object.assign(Object.assign(Object.assign({}, e), t), {
					onReloadWithWidget: n.onReloadWithWidget,
					subredditId: n.subredditId,
					title: n.title,
					breadcrumbs: n.breadcrumbs,
					sendEventWithName: n.sendEventWithName,
					helpCenterLink: n.helpCenterLink
				}))(e)
			}(ri);
			const li = Object(c.c)({
				widgetId: Ce.e
			});
			var ii = Object(o.b)(li)(e => e.widgetId ? r.a.createElement(si, {
					subredditId: e.subredditId,
					title: e.title,
					breadcrumbs: e.breadcrumbs,
					stopEditing: e.stopEditing,
					widgetId: e.widgetId,
					helpCenterLink: e.helpCenterLink
				}) : r.a.createElement(si, {
					subredditId: e.subredditId,
					title: e.title,
					breadcrumbs: e.breadcrumbs,
					stopEditing: e.stopEditing,
					widgetKind: "menu",
					helpCenterLink: e.helpCenterLink
				})),
				oi = n("./src/reddit/components/StructuredStyles/LabeledMenuPositionInput/index.m.less"),
				di = n.n(oi);
			const ci = s.a.wrapped(yn.a, "ExpandRight", di.a);
			var ui = Te(e => r.a.createElement(hn.h, null, r.a.createElement(ci, null, e.value === e.onValue ? r.a.createElement(hn.b, null) : r.a.createElement(hn.a, null), r.a.createElement("div", null, r.a.createElement(E, {
					redditStyle: !0,
					name: e.name,
					offValue: e.offValue,
					onChange: e.onChange,
					onValue: e.onValue,
					selected: e.value === e.onValue
				}), r.a.createElement(ve.a, {
					label: e.label,
					description: e.description
				}))))),
				mi = n("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				hi = n("./src/reddit/components/StructuredStyles/LabeledRangeInput/index.m.less"),
				pi = n.n(hi);
			const gi = Te(e => r.a.createElement("input", {
				type: "range",
				min: "0",
				max: "100",
				value: e.value,
				name: e.name,
				onChange: t => e.onChange(t.currentTarget.value),
				className: pi.a.StyledRangeInput
			}));
			var bi = e => r.a.createElement(hn.h, null, r.a.createElement(mi.a, null, r.a.createElement(ve.a, {
				label: e.label,
				description: e.description
			}), r.a.createElement(gi, {
				name: e.name
			})));
			var Ei = an(e => r.a.createElement(ue.k, null, r.a.createElement(mt, e), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Link Colors", null, {
					hk: "10kWUC"
				})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Active Page", null, {
						hk: "4pWBSv"
					}),
					name: "menuLinkColorActive"
				})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Inactive Page", null, {
						hk: "YmHYW"
					}),
					name: "menuLinkColorInactive"
				})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Hover", null, {
						hk: "1HGJFG"
					}),
					name: "menuLinkColorHover"
				}))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Main Menu Background", null, {
					hk: "5scHN"
				})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Color", null, {
						hk: "24I04u"
					}),
					name: "menuBackgroundColor"
				})), r.a.createElement(ue.a, null, r.a.createElement(ue.e, null, l.fbt._("Image", null, {
					hk: "3UvZWg"
				})), r.a.createElement(ht, {
					name: "menuBackgroundImage",
					render: t => t ? r.a.createElement(_t, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "menuBackgroundImage"
					}) : r.a.createElement(vt, {
						label: l.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "menuBackgroundImage"
					})
				})), r.a.createElement(ue.a, null, r.a.createElement(ui, {
					name: "menuPosition",
					offValue: "default",
					onValue: "overlay",
					label: l.fbt._("Overlay", null, {
						hk: "31BQUZ"
					})
				}), r.a.createElement(bt, {
					name: "menuPosition",
					render: e => "overlay" === e && r.a.createElement(ue.d, null, r.a.createElement(ue.i, null, r.a.createElement(qt, {
						label: l.fbt._("Overlay Color", null, {
							hk: "1pWV3C"
						}),
						name: "bannerOverlayColor"
					})), r.a.createElement(ue.i, null, r.a.createElement(bi, {
						label: l.fbt._("Opacity", null, {
							hk: "1cTODF"
						}),
						name: "menuBackgroundOpacity"
					})))
				}))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Submenu Background", null, {
					hk: "2o6qwW"
				})), r.a.createElement(ue.a, null, r.a.createElement(Be, {
					name: "submenuBackgroundStyle"
				}, r.a.createElement(Le, {
					value: "default",
					label: l.fbt._("Match Main Menu Background", null, {
						hk: "3LPJz0"
					})
				}), r.a.createElement(Le, {
					value: "custom",
					label: l.fbt._("Solid Color", null, {
						hk: "DnvyW"
					})
				}, r.a.createElement(Et, {
					name: "submenuBackgroundStyle",
					render: e => "custom" === e && r.a.createElement(ue.d, null, r.a.createElement(ue.i, null, r.a.createElement(qt, {
						name: "submenuBackgroundColor",
						label: l.fbt._("Color", null, {
							hk: "3V0Im3"
						})
					})))
				}))))), r.a.createElement(at, e)), ["bannerOverlayColor", "menuBackgroundColor", "menuBackgroundImage", "menuBackgroundOpacity", "menuLinkColorActive", "menuLinkColorHover", "menuLinkColorInactive", "menuPosition", "submenuBackgroundColor", "submenuBackgroundStyle"]),
				fi = n("./src/reddit/components/StructuredStyles/LabeledVisibilityInput/index.m.less"),
				vi = n.n(fi);
			const xi = s.a.wrapped(ue.b, "FormElementDescription", vi.a),
				Ci = s.a.wrapped(hn.h, "StyledLabel", vi.a);
			var Si = Te(e => r.a.createElement(Ci, null, r.a.createElement(yn.a, null, r.a.createElement(T, {
				redditStyle: !0,
				name: e.name,
				offValue: e.offValue,
				onChange: e.onChange,
				onValue: e.onValue,
				selected: e.value === e.onValue
			}), r.a.createElement("div", null, r.a.createElement(ue.e, null, e.label), e.description && r.a.createElement(xi, null, e.description)))));
			var Ii = an(e => r.a.createElement(ue.k, null, r.a.createElement(mt, e), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Community Name Format", null, {
				hk: "tP16c"
			})), r.a.createElement(ue.a, null, r.a.createElement(We, {
				name: "bannerCommunityNameFormat"
			}, r.a.createElement(Fe, {
				value: "slashtag",
				label: "".concat(e.subreddit.displayText)
			}), r.a.createElement(Fe, {
				value: "pretty",
				label: "".concat(e.subreddit.name)
			}), r.a.createElement(Fe, {
				value: "hide",
				label: l.fbt._("Hide", null, {
					hk: "3LxoFk"
				})
			})))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Community Icon", null, {
				hk: "1AxBpT"
			})), r.a.createElement(ue.a, null, r.a.createElement(ue.e, null, l.fbt._("Custom Image", null, {
				hk: "185kJR"
			})), r.a.createElement(ht, {
				name: "communityIcon",
				render: t => t ? r.a.createElement(_t, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "communityIcon"
				}) : r.a.createElement(vt, {
					label: l.fbt._("Drag and Drop or Upload Image", null, {
						hk: "Ru1kh"
					}),
					name: "communityIcon"
				})
			}), r.a.createElement(ue.b, null, l.fbt._("Required Size: 256x256px", null, {
				hk: "3czxcI"
			})))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Community Icon", null, {
				hk: "1AxBpT"
			})), r.a.createElement(Si, {
				description: l.fbt._("Your Community Icon will still display in other areas of Reddit", null, {
					hk: "3Ypgnp"
				}),
				label: l.fbt._("Hide Community Icon in Banner", null, {
					hk: "33E6fk"
				}),
				name: "bannerShowCommunityIcon",
				onValue: "hide",
				offValue: "show"
			})), r.a.createElement(at, e)), ["bannerShowCommunityIcon", "bannerCommunityNameFormat", "communityIcon"]);
			var yi = an(e => r.a.createElement(ue.k, null, r.a.createElement(mt, e), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Title Color", null, {
				hk: "1UCY4u"
			})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
				name: "postTitleColor",
				label: l.fbt._("Color", null, {
					hk: "3V0Im3"
				})
			}))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Up + Down Vote Icons", null, {
				hk: "4dc1gB"
			})), r.a.createElement(ue.g, null, l.fbt._("If you want to upload your own vote icons, you'll need to upload an image for each of the indicated icon states.", null, {
				hk: "4a8IbW"
			})), r.a.createElement(ue.a, null, r.a.createElement(Be, {
				name: "postVoteIcons"
			}, r.a.createElement(Le, {
				label: l.fbt._("Standard Reddit", null, {
					hk: "3GMuNx"
				}),
				value: "default"
			}), r.a.createElement(Le, {
				label: l.fbt._("Custom", null, {
					hk: "1QKc56"
				}),
				value: "custom"
			}, r.a.createElement(Et, {
				name: "postVoteIcons",
				render: t => "custom" === t && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.d, null, r.a.createElement(ue.i, null, r.a.createElement(ue.e, null, l.fbt._("Inactive upvote", null, {
					hk: "3JGpmU"
				})), r.a.createElement(ht, {
					name: "postUpvoteIconInactive",
					render: t => t ? r.a.createElement(_t, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postUpvoteIconInactive"
					}) : r.a.createElement(vt, {
						label: l.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postUpvoteIconInactive"
					})
				})), r.a.createElement(ue.i, null, r.a.createElement(ue.e, null, l.fbt._("Active upvote", null, {
					hk: "kymn4"
				})), r.a.createElement(ht, {
					name: "postUpvoteIconActive",
					render: t => t ? r.a.createElement(_t, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postUpvoteIconActive"
					}) : r.a.createElement(vt, {
						label: l.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postUpvoteIconActive"
					})
				})), r.a.createElement(ue.i, null, r.a.createElement(qt, {
					label: l.fbt._("Upvote count color", null, {
						hk: "WY0NE"
					}),
					name: "postUpvoteCountColor"
				}))), r.a.createElement(ue.d, null, r.a.createElement(ue.i, null, r.a.createElement(ue.e, null, l.fbt._("Inactive downvote", null, {
					hk: "1NZ0ba"
				})), r.a.createElement(ht, {
					name: "postDownvoteIconInactive",
					render: t => t ? r.a.createElement(_t, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postDownvoteIconInactive"
					}) : r.a.createElement(vt, {
						label: l.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postDownvoteIconInactive"
					})
				})), r.a.createElement(ue.i, null, r.a.createElement(ue.e, null, l.fbt._("Active downvote", null, {
					hk: "vqYFP"
				})), r.a.createElement(ht, {
					name: "postDownvoteIconActive",
					render: t => t ? r.a.createElement(_t, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postDownvoteIconActive"
					}) : r.a.createElement(vt, {
						label: l.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postDownvoteIconActive"
					})
				})), r.a.createElement(ue.i, null, r.a.createElement(qt, {
					label: l.fbt._("Downvote count color", null, {
						hk: "1ftOyw"
					}),
					name: "postDownvoteCountColor"
				}))))
			}))))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Post Background", null, {
				hk: "3K8hGI"
			})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
				label: l.fbt._("Color", null, {
					hk: "3V0Im3"
				}),
				name: "postBackgroundColor"
			})), r.a.createElement(ue.a, null, r.a.createElement(ue.e, null, l.fbt._("Image", null, {
				hk: "3o4qa8"
			})), r.a.createElement(ht, {
				name: "postBackgroundImage",
				render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(_t, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "postBackgroundImage"
				}), r.a.createElement(ue.d, null, r.a.createElement(nt, {
					name: "postBackgroundImagePosition",
					values: ["cover", "tiled"]
				}))) : r.a.createElement(vt, {
					label: l.fbt._("Drag and Drop or Upload Image", null, {
						hk: "Ru1kh"
					}),
					name: "postBackgroundImage"
				})
			}))), r.a.createElement(ue.f, null, r.a.createElement(ue.h, null, l.fbt._("Link Preview Placeholder Image", null, {
				hk: "2A0gCp"
			})), r.a.createElement(ue.g, null, l.fbt._("Most of the time, link posts automatically generate a placeholder image; sometimes they don't. Use the Standard Reddit placeholder, or create your own!", null, {
				hk: "4shqld"
			})), r.a.createElement(ue.a, null, r.a.createElement(ue.e, null, l.fbt._("Image", null, {
				hk: "JhfPF"
			})), r.a.createElement(ht, {
				name: "postPlaceholderImage",
				render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(_t, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "postPlaceholderImage"
				}), r.a.createElement(ue.d, null, r.a.createElement(nt, {
					name: "postPlaceholderImagePosition",
					values: ["cover", "tiled"]
				}))) : r.a.createElement(vt, {
					label: l.fbt._("Drag and Drop or Upload Image", null, {
						hk: "Ru1kh"
					}),
					name: "postPlaceholderImage"
				})
			}))), r.a.createElement(at, e)), ["postBackgroundColor", "postBackgroundImage", "postBackgroundImagePosition", "postDownvoteCountColor", "postDownvoteIconActive", "postDownvoteIconInactive", "postPlaceholderImage", "postPlaceholderImagePosition", "postTitleColor", "postUpvoteCountColor", "postUpvoteIconActive", "postUpvoteIconInactive", "postVoteIcons"]);
			var ki = an(e => r.a.createElement(ue.o, null, r.a.createElement(mt, e), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Title background color", null, {
						hk: "2omOuw"
					}),
					name: "sidebarWidgetHeaderColor"
				})), r.a.createElement(ue.a, null, r.a.createElement(qt, {
					label: l.fbt._("Widget background color", null, {
						hk: "2iB8pL"
					}),
					name: "sidebarWidgetBackgroundColor"
				})), e.hasUnsavedChanges && r.a.createElement(at, e)), ["sidebarWidgetBackgroundColor", "sidebarWidgetHeaderColor"]),
				wi = n("./src/reddit/components/StructuredStyles/NavItem/index.m.less"),
				_i = n.n(wi);
			const Oi = s.a.wrapped(F.a, "ExpandLeft", _i.a);
			var Di = e => r.a.createElement(j.b, {
					onClick: e.onClick
				}, r.a.createElement(Oi, null, e.children, r.a.createElement(y, null))),
				Ti = n("./src/reddit/components/StructuredStyles/Forms/WidgetManager/WidgetLabel.m.less"),
				ji = n.n(Ti);
			const Pi = s.a.div("WidgetType", ji.a),
				Ri = s.a.div("WidgetTitle", ji.a);
			var Ni = e => e.widget ? r.a.createElement("div", null, r.a.createElement(Pi, null, Object(xe.p)(e.widget.kind)), r.a.createElement(Ri, null, Object(xe.q)(e.widget))) : null;
			const Ai = Object(c.c)({
				idCardWidget: (e, t) => Object(Ce.d)(e, {
					subredditId: t.subredditId
				}),
				sidebar: Ce.i,
				widgets: Ce.a
			});
			var Wi = Object(o.b)(Ai)(e => r.a.createElement("div", null, r.a.createElement(ue.f, null, r.a.createElement(ue.b, null, l.fbt._("Remaining Widgets:", null, {
					hk: "1XFj7r"
				}), (20 - e.sidebar.length).toLocaleString()), r.a.createElement(Di, {
					onClick: () => e.idCardWidget && e.onClick(e.idCardWidget)
				}, r.a.createElement(Ni, {
					widget: e.idCardWidget
				})), e.sidebar.map(t => r.a.createElement(Di, {
					key: t,
					onClick: () => e.onClick(e.widgets[t])
				}, r.a.createElement(Ni, {
					widget: e.widgets[t]
				})))), r.a.createElement(ue.f, null, r.a.createElement(w, {
					onClick: e.onAdd,
					disabled: e.sidebar.length >= 20,
					"data-redditstyle": !0
				}, l.fbt._("Add Widget", null, {
					hk: "1yMj6p"
				})), e.sidebar.length > 1 && r.a.createElement(w, {
					onClick: e.startSorting,
					"data-redditstyle": !0
				}, l.fbt._("Reorder Widgets", null, {
					hk: "4dfSWN"
				}))))),
				Fi = n("./src/reddit/components/StructuredStyles/Forms/WidgetManager/SortWidgets.m.less"),
				Bi = n.n(Fi);
			const Li = s.a.wrapped(na.a, "Sortable", Bi.a);
			class Ui extends r.a.Component {
				constructor(e) {
					super(e), this.handleDrop = (e, t, n) => {
						this.setState({
							items: n
						})
					}, this.handleSave = () => {
						this.props.saveChanges(this.state.items), this.props.stopSorting()
					}, this.handleCancel = () => {
						this.props.stopSorting()
					}, this.getReactKey = e => e, this.state = {
						items: e.sidebar || []
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", null, r.a.createElement(ue.f, null, r.a.createElement(Pn.a, {
						disabled: !0
					}, r.a.createElement(Ni, {
						widget: e.idCardWidget
					})), r.a.createElement(Li, {
						values: t.items,
						getReactKey: this.getReactKey,
						render: (t, n, a, s, l) => r.a.createElement(Pn.a, {
							isDragging: a,
							isOver: s,
							canDrop: l
						}, r.a.createElement(Ni, {
							widget: e.widgets[t]
						})),
						onDrop: this.handleDrop
					})), r.a.createElement(ue.f, null, r.a.createElement(jn, {
						applyText: l.fbt._("Save", null, {
							hk: "1qAtYt"
						}),
						cancelText: l.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						onApply: this.handleSave,
						onCancel: this.handleCancel
					})))
				}
			}
			var Mi = Object(o.b)(() => Object(c.c)({
				sidebar: Ce.i,
				widgets: Ce.a,
				idCardWidget: (e, t) => Object(Ce.d)(e, {
					subredditId: t.subredditId
				})
			}), (e, t) => ({
				saveChanges: n => {
					e(xn.h(t.subredditId, n))
				}
			}))(Ui);
			class qi extends r.a.Component {
				constructor(e) {
					super(e), this.disableSecondState = () => this.setState({
						isInSecondState: !1
					}), this.enableSecondState = () => this.setState({
						isInSecondState: !0
					}), this.state = {
						isInSecondState: !1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(ue.k, null, r.a.createElement(ki, {
						subredditId: e.subredditId,
						title: l.fbt._("Sidebar widget appearance", null, {
							hk: "2h8P8Z"
						}),
						paneName: "widgets",
						breadcrumbs: e.breadcrumbs,
						stopEditing: e.stopEditing,
						helpCenterLink: e.helpCenterLink
					}), r.a.createElement(ue.m, null, e.title), r.a.createElement(fn.c, null, l.fbt._("These community styling options will also display in Reddit apps.", null, {
						hk: "1Cl8Yk"
					})), t.isInSecondState ? r.a.createElement(Mi, {
						subredditId: e.subredditId,
						stopSorting: this.disableSecondState
					}) : r.a.createElement(Wi, {
						onClick: t => e.onEdit(t.id, t.kind),
						onAdd: e.onAdd,
						startSorting: () => {
							e.onSort(), this.enableSecondState()
						},
						subredditId: e.subredditId
					}))
				}
			}
			var Vi = qi;
			const Ki = (e, t) => {
				const n = t ? Math.max(0, e.index - t) : 0;
				return e.entries.slice(n, e.index).map((t, a) => ({
					relativePosition: a + n - e.index,
					title: t.state ? t.state.title : null
				}))
			};
			var Hi = n("./src/reddit/selectors/telemetry.ts");
			const Gi = Object(Ar.t)({
					queryParams: Ar.S
				}),
				zi = e => t => t ? e.go(t.relativePosition) : e.goBack();
			var Qi = Gi(Object(P.c)(e => {
					const t = (t => (n, a) => e.sendEvent(r => ({
						source: t,
						action: "click",
						noun: n,
						actionInfo: Object(Hi.actionInfo)(r, {
							paneName: a ? a.paneName : void 0,
							count: a ? a.count : void 0
						}),
						screen: Object(Hi.screen)(r),
						subreddit: Object(Hi.subreddit)(r),
						widget: a && a.widgetKind && Object(Hi.widget)(r, {
							subredditId: e.subredditId,
							widgetKind: a.widgetKind
						})
					})))(R.d.Widgets);
					return r.a.createElement(i.a, {
						initialEntries: [N("main")],
						initialIndex: 0
					}, r.a.createElement("div", null, r.a.createElement(i.d, {
						exact: !0,
						path: "main",
						render: t => {
							let {
								history: n
							} = t;
							const a = 1 === n.length && e.queryParams.route;
							return a && n.push(N(a)), r.a.createElement(fe, {
								subredditId: e.subredditId,
								title: l.fbt._("Back to mod tools", null, {
									hk: "1YCI0W"
								})
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "global",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(vn, {
								breadcrumbs: Ki(n, 1),
								paneName: R.b.global,
								stopEditing: zi(n),
								subredditId: e.subredditId,
								title: l.fbt._("Color theme", null, {
									hk: "2v9vTZ"
								}),
								helpCenterLink: R.e.global
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "nameAndIcon",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(Ii, {
								breadcrumbs: Ki(n, 1),
								paneName: R.b.nameAndIcon,
								stopEditing: zi(n),
								subredditId: e.subredditId,
								title: l.fbt._("Name & icon", null, {
									hk: "3Ooszv"
								}),
								helpCenterLink: R.e.nameAndIcon
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "banner",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(cn, {
								breadcrumbs: Ki(n, 1),
								paneName: R.b.banner,
								stopEditing: zi(n),
								subredditId: e.subredditId,
								title: l.fbt._("Banner", null, {
									hk: "34vhtK"
								}),
								helpCenterLink: R.e.banner
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "menu",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(Ei, {
								breadcrumbs: Ki(n, 1),
								paneName: R.b.menu,
								stopEditing: zi(n),
								subredditId: e.subredditId,
								title: l.fbt._("Menu", null, {
									hk: "2i934f"
								}),
								helpCenterLink: R.e.menu
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "post",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(yi, {
								breadcrumbs: Ki(n, 1),
								paneName: R.b.post,
								stopEditing: zi(n),
								subredditId: e.subredditId,
								title: l.fbt._("Posts", null, {
									hk: "IRzss"
								}),
								helpCenterLink: R.e.post
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "exportImport",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(En, {
								breadcrumbs: Ki(n, 1),
								paneName: R.b.exportImport,
								stopEditing: zi(n),
								subredditId: e.subredditId,
								title: l.fbt._("Manage themes", null, {
									hk: "4u4bJB"
								}),
								helpCenterLink: R.e.exportImport
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "menuLinks",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(ii, {
								breadcrumbs: Ki(n, 1),
								stopEditing: zi(n),
								subredditId: e.subredditId,
								title: l.fbt._("Menu links", null, {
									hk: "1fH1RT"
								}),
								helpCenterLink: R.e.menuLinks
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "widgets",
						render: n => {
							let {
								history: a
							} = n;
							return r.a.createElement(Vi, {
								breadcrumbs: Ki(a, 1),
								onAdd: () => {
									a.push(N("addWidget"))
								},
								onEdit: (e, n) => {
									t(R.b.editWidget, {
										widgetKind: n
									}), a.push(N("editWidget", {
										widgetId: e,
										widgetKind: n
									}))
								},
								onSort: () => t(R.b.reorderWidgets, {
									paneName: R.b.widgets
								}),
								stopEditing: zi(a),
								subredditId: e.subredditId,
								title: l.fbt._("Sidebar widgets", null, {
									hk: "4aVxeZ"
								}),
								helpCenterLink: R.e.widgets
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "addWidget",
						render: n => {
							let {
								history: a
							} = n;
							return r.a.createElement(_e, {
								breadcrumbs: Ki(a, 1),
								onAdd: e => {
									t(R.b.addWidget, {
										widgetKind: e
									}), a.push(N("newWidget", {
										widgetKind: e
									}))
								},
								stopEditing: zi(a),
								subredditId: e.subredditId,
								title: l.fbt._("Add Widget", null, {
									hk: "mlWwj"
								}),
								helpCenterLink: R.e.widgets
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "newWidget",
						render: n => {
							let {
								history: a,
								location: s
							} = n;
							return r.a.createElement(si, {
								breadcrumbs: Ki(a, 1),
								onReloadWithWidget: e => {
									a.replace(N("editWidget", {
										widgetId: e.id
									}))
								},
								sendEventWithName: t,
								stopEditing: e => e ? a.go(e.relativePosition) : a.go(-2),
								subredditId: e.subredditId,
								title: s.state.widgetKind ? A(s.state.widgetKind) : l.fbt._("New Widget", null, {
									hk: "BJxc8"
								}),
								widgetKind: s.state.widgetKind,
								helpCenterLink: R.e.widgets
							})
						}
					}), r.a.createElement(i.d, {
						exact: !0,
						path: "editWidget",
						render: n => {
							let {
								history: a,
								location: s
							} = n;
							return r.a.createElement(si, {
								breadcrumbs: Ki(a, 1),
								sendEventWithName: t,
								stopEditing: zi(a),
								subredditId: e.subredditId,
								title: s.state.widgetKind ? A(s.state.widgetKind) : l.fbt._("Edit Widget", null, {
									hk: "1mXs71"
								}),
								widgetId: s.state.widgetId,
								helpCenterLink: R.e.widgets
							})
						}
					})))
				})),
				Yi = n("./src/reddit/connectors/connectClickToToggleEditor.ts"),
				Zi = Object(Yi.a)(e => r.a.createElement("button", {
					className: e.className,
					onClick: e.requestCloseBlade,
					children: e.children
				})),
				Ji = n("./src/reddit/components/BlockNavigation/index.tsx"),
				Xi = n("./src/reddit/constants/modals.ts");
			var $i = Object(Yi.a)(e => r.a.createElement(Ji.a, {
					blockOnBeforeUnload: !0,
					dialogId: Xi.a.BLADE_UNSAVED_CHANGES,
					enabled: e.bladeHasUnsavedChanges
				})),
				eo = n("./src/reddit/components/StructuredStyles/BladeDrawer/index.m.less"),
				to = n.n(eo);
			const no = s.a.div("BladeContainer", to.a),
				ao = s.a.wrapped(Zi, "BladeCloseButton", to.a);
			t.default = e => r.a.createElement("div", null, r.a.createElement(no, {
				id: Dt.a
			}, r.a.createElement(ao, {
				subredditId: e.subredditId
			}, r.a.createElement(I, null)), r.a.createElement(Qi, {
				subredditId: e.subredditId
			})), r.a.createElement($i, e))
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, n) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/helpers/trackers/blade.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				c = n.n(d);
			const u = s.a.wrapped(o.a, "StyledChevron", c.a),
				m = s.a.div("BreadcrumbElement", c.a),
				h = s.a.div("BreadcrumbContainer", c.a);
			t.b = Object(l.c)(e => r.a.createElement(h, null, e.breadcrumbs.map(t => r.a.createElement(m, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(i.a)()), e.onNavigate(t)
				}
			}, r.a.createElement(u, null), t.title))))
		},
		"./src/reddit/components/StructuredStyles/CancelApplyButtons/index.m.less": function(e, t, n) {
			e.exports = {
				TrashIcon: "d-YBxGHNeDTVbfGK5P22Q",
				trashIcon: "d-YBxGHNeDTVbfGK5P22Q",
				PrimaryButton: "oADNCdkpVJG0ib9UqOv9W",
				primaryButton: "oADNCdkpVJG0ib9UqOv9W",
				SecondaryButton: "_1z2Uqp8WmC6Uzd7SAppyjc",
				secondaryButton: "_1z2Uqp8WmC6Uzd7SAppyjc",
				ButtonRow: "_2lh8o0sAjKyUpHE2q-5MEp",
				buttonRow: "_2lh8o0sAjKyUpHE2q-5MEp"
			}
		},
		"./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = n("./src/reddit/helpers/isValidHexColor/index.ts"),
				d = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/components/StructuredStyles/ColorPicker/index.m.less"),
				p = n.n(h),
				g = n("./src/higherOrderComponents/makeAsync.tsx"),
				b = n("./src/lib/loadWithRetries/index.ts");
			const E = () => null;
			var f = Object(g.a)({
				ErrorComponent: E,
				getComponent: () => Object(b.a)(() => n.e("ColorPickerDropdown").then(n.bind(null, "./src/reddit/components/StructuredStyles/ColorPicker/_ColorPickerDropdown.tsx"))).then(e => e.default),
				LoadingComponent: E
			});
			const v = e => "#" === e[0] ? e : "#".concat(e),
				x = Object(i.a)(e => s.a.createElement("div", {
					className: Object(l.a)(p.a.DropdownColorSwatch, e.isTransparent && p.a.isTransparent),
					style: {
						backgroundColor: e.isTransparent ? Object(m.a)(e).body : e.color,
						fill: Object(a.f)(e.color)
					}
				}, e.isDropdownOpen ? s.a.createElement(c.a, {
					className: p.a.ChevronUp
				}) : s.a.createElement(d.a, {
					className: p.a.ChevronDown
				})));
			class C extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeProp = e => {
						this.setState({
							value: e,
							inputValue: e
						}), this.props.onChange(e, !0)
					}, this.onChangeHexColor = e => {
						const {
							value: t
						} = e.currentTarget;
						if (this.setState({
								inputValue: t
							}), Object(o.b)(t, !0)) {
							const e = v(t);
							this.setState({
								value: e
							}), this.props.onChange(e, !1)
						}
					}, this.handleUseSystemColorPickerClicked = () => {
						this.props.onSystemInputOpened && this.props.onSystemInputOpened()
					};
					const {
						value: t
					} = e;
					this.state = {
						inputValue: t,
						value: t
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value,
						inputValue: e.value
					})), !this.props.isDropdownOpen && e.isDropdownOpen && this.props.onColorPickerOpened && this.props.onColorPickerOpened()
				}
				componentWillUnmount() {
					this.props.isDropdownOpen && this.props.onToggleDropdown()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = e.containerId ? document.getElementById(e.containerId) : void 0;
					return s.a.createElement("div", {
						onClick: e.onToggleDropdown
					}, s.a.createElement(x, {
						color: e.value || u.d,
						isDropdownOpen: e.isDropdownOpen,
						isTransparent: e.includeTransparent && !e.value
					}), s.a.createElement(f, {
						container: n,
						inputValue: t.inputValue,
						includeTransparent: e.includeTransparent,
						isOpen: e.isDropdownOpen,
						onChangeHexColor: this.onChangeHexColor,
						onSelectColor: this.onChangeProp,
						onToggleDropdown: e.onToggleDropdown,
						onClickUseSystemColorPicker: this.handleUseSystemColorPickerClicked,
						tooltipId: e.tooltipId,
						tooltipPosition: e.dropdownPosition,
						value: t.value
					}))
				}
			}
			t.a = C
		},
		"./src/reddit/components/StructuredStyles/ColorPicker/index.m.less": function(e, t, n) {
			e.exports = {
				Inline: "C1u8RDjnECGK1LWfSsACT",
				inline: "C1u8RDjnECGK1LWfSsACT",
				ColorInput: "_11x--06UcYLDYS16wXb8-q",
				colorInput: "_11x--06UcYLDYS16wXb8-q",
				ColorSwatchContainer: "_1oW-7sYYlQS4GeHmj1ubBp",
				colorSwatchContainer: "_1oW-7sYYlQS4GeHmj1ubBp",
				ColorSwatchOption: "_35Suh6FFPv_wB32f8XV32",
				colorSwatchOption: "_35Suh6FFPv_wB32f8XV32",
				isTransparent: "WD7seokSY2Kgg9EUdkfox",
				isSelected: "Awb-CJoYiNZr5FUKWbmCQ",
				ColorSwatchPreview: "_2U2EDHI9LC1nsjVIA7rIV7",
				colorSwatchPreview: "_2U2EDHI9LC1nsjVIA7rIV7",
				HexColorInput: "_2J9PudeZtimxGXSP0A_G-l",
				hexColorInput: "_2J9PudeZtimxGXSP0A_G-l",
				isInvalid: "_1AtMqIr_4QichwnCYnGiCf",
				ErrorMarker: "_1niA4R0pkgQEg3RkfWiORi",
				errorMarker: "_1niA4R0pkgQEg3RkfWiORi",
				SectionTitle: "_2fiXR9OAoHzIVFLLcS7W8u",
				sectionTitle: "_2fiXR9OAoHzIVFLLcS7W8u",
				StyledLabel: "_3tm-97fb8noV8kwxNOON_9",
				styledLabel: "_3tm-97fb8noV8kwxNOON_9",
				ColorPickerDropdown: "_1i-ndNsTQtNr82sMJ0renj",
				colorPickerDropdown: "_1i-ndNsTQtNr82sMJ0renj",
				DropdownColorSwatch: "_2uwkPlP_LglpLTAm6dfFmd",
				dropdownColorSwatch: "_2uwkPlP_LglpLTAm6dfFmd",
				ChevronDown: "V07CUWayujZ6pmjzCKitD",
				chevronDown: "V07CUWayujZ6pmjzCKitD",
				ChevronUp: "_1PTgp4tTpJn4UDPY-Uo-e4",
				chevronUp: "_1PTgp4tTpJn4UDPY-Uo-e4"
			}
		},
		"./src/reddit/components/StructuredStyles/DragItem/index.m.less": function(e, t, n) {
			e.exports = {
				Grapple: "_1RWZwK3K1uM6lSH8uK5DdB",
				grapple: "_1RWZwK3K1uM6lSH8uK5DdB",
				LockIcon: "_1vzrWUGrBGAJS_EeyJ4Ct0",
				lockIcon: "_1vzrWUGrBGAJS_EeyJ4Ct0",
				ExpandLeft: "_10Jk0eCPxa9SanBQsJlfGa",
				expandLeft: "_10Jk0eCPxa9SanBQsJlfGa"
			}
		},
		"./src/reddit/components/StructuredStyles/DragItem/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				i = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				o = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/DragItem/index.m.less"),
				u = n.n(c);
			const m = s.a.wrapped(i.a, "Grapple", u.a),
				h = s.a.wrapped(o.a, "LockIcon", u.a),
				p = s.a.wrapped(d.a, "ExpandLeft", u.a);
			t.a = e => r.a.createElement(l.a, {
				className: e.className,
				isDragging: e.isDragging,
				isOver: e.isOver,
				canDrop: e.canDrop,
				disabled: e.disabled
			}, r.a.createElement(p, null, e.children, e.disabled ? r.a.createElement(h, {
				className: e.iconClassName
			}) : r.a.createElement(m, {
				className: e.iconClassName
			})))
		},
		"./src/reddit/components/StructuredStyles/EditItem/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "L7BJoh0EK7ZnUHrXglD0P",
				pencilIcon: "L7BJoh0EK7ZnUHrXglD0P",
				disabled: "knBhCerNksV38iwaIKtdW"
			}
		},
		"./src/reddit/components/StructuredStyles/FeatureToggle/index.m.less": function(e, t, n) {
			e.exports = {
				StyledLabel: "_3u-9eu0u-RQXA-Gf7VGRYH",
				styledLabel: "_3u-9eu0u-RQXA-Gf7VGRYH",
				ToggleInput: "UCECMAIX7NuenLiQQRp6S",
				toggleInput: "UCECMAIX7NuenLiQQRp6S",
				FormElementTitle: "Op4q7USt0KQsr6PPrf838",
				formElementTitle: "Op4q7USt0KQsr6PPrf838"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "K64tMxMUJmCTojzEY7drh",
				formElementTitle: "K64tMxMUJmCTojzEY7drh",
				fake: "_3IIxv6iQHvjnKniUvSf8Oc",
				altColor: "_1Asmc3slr39Cm0G09a9de8",
				FormElementDescription: "_3jjsYZKgetVdF2QX1ekvEM",
				formElementDescription: "_3jjsYZKgetVdF2QX1ekvEM"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				o = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				d = n.n(o);
			const c = l.a.wrapped(i.e, "FormElementTitle", d.a),
				u = l.a.wrapped(i.b, "FormElementDescription", d.a);
			t.a = e => r.a.createElement("div", null, r.a.createElement(c, {
				className: Object(s.a)({
					[d.a.fake]: e.fake,
					[d.a.altColor]: e.altColor
				})
			}, e.label), e.description && r.a.createElement(u, {
				className: Object(s.a)({
					[d.a.fake]: e.fake
				})
			}, e.description))
		},
		"./src/reddit/components/StructuredStyles/Forms/ButtonWidgetEditor/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "dCaZPVsWElAph6iuAVvPb",
				tertiaryButton: "dCaZPVsWElAph6iuAVvPb"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/eventDataToggle.m.less": function(e, t, n) {
			e.exports = {
				Input: "_29BTkbiKm4x7ygrjYNL8KG",
				input: "_29BTkbiKm4x7ygrjYNL8KG",
				ExpandRight: "_1RcIUwMvdNVUqlsegHhBEB",
				expandRight: "_1RcIUwMvdNVUqlsegHhBEB"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementError: "_1tdZC49t5gX7cQAoKMW9nP",
				formElementError: "_1tdZC49t5gX7cQAoKMW9nP",
				NumEventsInput: "O3rfqq3IpeVq0L6mEBZIN",
				numEventsInput: "O3rfqq3IpeVq0L6mEBZIN",
				InputLabel: "_3npXwkCEzPlIWlVZaF5ZIt",
				inputLabel: "_3npXwkCEzPlIWlVZaF5ZIt"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CommunityListEditor/index.m.less": function(e, t, n) {
			e.exports = {
				controlRow: "_4-615bilTLIwPCCjuLFjo",
				subredditPicker: "X36JU7OMwzhNF6QAoMMqi",
				textArea: "_2zzz_klRsMB8_jcHkCmdyQ",
				textButton: "_1Y-e809DQ-DHr9EQdIyxTS",
				trashIcon: "GL2UJeLoQDgwDBRBT61qK"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/ExperimentalFeatureNotice.m.less": function(e, t, n) {
			e.exports = {
				Info: "_1KvED3SeNlyFK7NUcNAK4q",
				info: "_1KvED3SeNlyFK7NUcNAK4q",
				FormGroup: "_3PlorItamfIkXJ0Jc1JoX8",
				formGroup: "_3PlorItamfIkXJ0Jc1JoX8",
				FormGroupTitle: "_1A5_9gglZ45Sd8_T8XQA0m",
				formGroupTitle: "_1A5_9gglZ45Sd8_T8XQA0m",
				FormGroupDescription: "ZIIzeIWxa1S2GIITHOt42",
				formGroupDescription: "ZIIzeIWxa1S2GIITHOt42"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/index.m.less": function(e, t, n) {
			e.exports = {
				Textarea: "_1xA9XHPDdpGSNw5kC_YQ0m",
				textarea: "_1xA9XHPDdpGSNw5kC_YQ0m",
				FormGroup: "_10DaZGn-4UslKEOnt_sTb4",
				formGroup: "_10DaZGn-4UslKEOnt_sTb4",
				UnsavedImageFormContainer: "_3PZaUzwh1dN2f4O8oYNV6d",
				unsavedImageFormContainer: "_3PZaUzwh1dN2f4O8oYNV6d",
				FormElementDescription: "_2ZLLw0J-Cb8urFPK3ld5WT",
				formElementDescription: "_2ZLLw0J-Cb8urFPK3ld5WT",
				FormElementError: "_1VDoOK-UKS2fHgOAyiw2nR",
				formElementError: "_1VDoOK-UKS2fHgOAyiw2nR",
				CopyLink: "_27sulKJmrq6oaWuFe3lKEa",
				copyLink: "_27sulKJmrq6oaWuFe3lKEa"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/IdCardWidgetEditor/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_1UQLgzlKMHz0UH8gorG2zA",
				outboundLinkIcon: "_1UQLgzlKMHz0UH8gorG2zA",
				NavLink: "_3wRHUwbRrIQGfqwFI-gjju",
				navLink: "_3wRHUwbRrIQGfqwFI-gjju",
				Description: "_291Xfa3HQnqqHivTrNh2jg",
				description: "_291Xfa3HQnqqHivTrNh2jg"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/ImageWidgetEditor/ImagesList.m.less": function(e, t, n) {
			e.exports = {
				UploadedImage: "PZwy12QbggBxQOEIw4VP-",
				uploadedImage: "PZwy12QbggBxQOEIw4VP-"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/ContentTypeOption.m.less": function(e, t, n) {
			e.exports = {
				Inline: "pG_7SkvYcgmE4uIxtCHze",
				inline: "pG_7SkvYcgmE4uIxtCHze",
				disabled: "_1jyGDI9hXEuJXsWBIwsjPb"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MainMenuContent.m.less": function(e, t, n) {
			e.exports = {
				ToggleInput: "K3-dsBHW-Y5YKFuGibBk_",
				toggleInput: "K3-dsBHW-Y5YKFuGibBk_",
				ToggleRow: "_3Zbpohx03TWEyEYgTab29u",
				toggleRow: "_3Zbpohx03TWEyEYgTab29u"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemLabel.m.less": function(e, t, n) {
			e.exports = {
				TextDisplay: "_3x9H29oWjDVDp67gcYkt9Z",
				textDisplay: "_3x9H29oWjDVDp67gcYkt9Z",
				UrlDisplay: "_3FWvpVaCK9HwMyOmTt63KV",
				urlDisplay: "_3FWvpVaCK9HwMyOmTt63KV"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemList.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2wvJHUQuN4PtvvT5YCwzi0",
				container: "_2wvJHUQuN4PtvvT5YCwzi0",
				FormItem: "_1MRvLEaDAu5MfUAqrmi-qx",
				formItem: "_1MRvLEaDAu5MfUAqrmi-qx"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/AddFlair.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "_28qE1F6IGY_q7pWAz5wvix",
				controlRow: "_28qE1F6IGY_q7pWAz5wvix"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/FlairTemplateItem.m.less": function(e, t, n) {
			e.exports = {
				FlairComponent: "_3qrCCutgsaGkQH_WSIAgo_",
				flairComponent: "_3qrCCutgsaGkQH_WSIAgo_"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/MainWidgetContent.m.less": function(e, t, n) {
			e.exports = {
				FlairPaneGroup: "_1b2okMJFkxytxSd_TWVceg",
				flairPaneGroup: "_1b2okMJFkxytxSd_TWVceg",
				TertiaryButton: "_3n7giQ17WuViAcxkBNLnjE",
				tertiaryButton: "_3n7giQ17WuViAcxkBNLnjE",
				FormElementDescription: "_1hL1UA2UJUKP1vz0kVfE3c",
				formElementDescription: "_1hL1UA2UJUKP1vz0kVfE3c"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairList.m.less": function(e, t, n) {
			e.exports = {
				FlairContainer: "a45F1CPqy7mS2-xUjtMb3",
				flairContainer: "a45F1CPqy7mS2-xUjtMb3",
				InlineButton: "_3_4pdHL6NKaQw3M2M-HskE",
				inlineButton: "_3_4pdHL6NKaQw3M2M-HskE",
				TrashIcon: "_38jt9KTYDeD7_toqMrKb4Q",
				trashIcon: "_38jt9KTYDeD7_toqMrKb4Q",
				FlairWrapper: "_2seoPJGdEOYI5gO1qZejt5",
				flairWrapper: "_2seoPJGdEOYI5gO1qZejt5"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairPickerDropdown.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_1B28YmpYrLKOFyiaXkroNJ",
				styledDropdown: "_1B28YmpYrLKOFyiaXkroNJ",
				DropdownTriangle: "z4IaiO5xhg8sArrPB0rh2",
				dropdownTriangle: "z4IaiO5xhg8sArrPB0rh2",
				InlineButton: "_1zjORxCWvDnkbfapgSC78n",
				inlineButton: "_1zjORxCWvDnkbfapgSC78n",
				"dropdown-open": "_2_KvhXE0vG2HvERWc0rONT",
				dropdownOpen: "_2_KvhXE0vG2HvERWc0rONT",
				DropdownContainer: "_1jGzoWFIYenwHj_vN6IjS",
				dropdownContainer: "_1jGzoWFIYenwHj_vN6IjS",
				SearchBarContainer: "_2KQzELFg9DLSnlhxcqmX86",
				searchBarContainer: "_2KQzELFg9DLSnlhxcqmX86",
				Row: "_2mWHbqvLTcf5OuPIAJfKYp",
				row: "_2mWHbqvLTcf5OuPIAJfKYp",
				disabled: "zk-Rt-m1F-f8ivbgDUXlq",
				disbaled: "_3wtM66WcUKcsBEOeqE-u1f",
				FlairTemplateItem: "dwfzZl3ND5Ze-8f-SPjX4",
				flairTemplateItem: "dwfzZl3ND5Ze-8f-SPjX4"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/ReorderFlairList.m.less": function(e, t, n) {
			e.exports = {
				Button: "_20cB9_LDYcwxw95Ot30FZV",
				button: "_20cB9_LDYcwxw95Ot30FZV",
				SecondaryButton: "_3ApBvITk8-l_3U0_2bRlLb",
				secondaryButton: "_3ApBvITk8-l_3U0_2bRlLb",
				ButtonContainer: "_2oolZlnGxG_lr54QyVdFv0",
				buttonContainer: "_2oolZlnGxG_lr54QyVdFv0"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/SubredditRulesEditor/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementDescription: "_3bJLhWXF9kMhAmjsjBsinx",
				formElementDescription: "_3bJLhWXF9kMhAmjsjBsinx"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/TextAreaEditor/index.m.less": function(e, t, n) {
			e.exports = {
				Textarea: "_38iRZrBmGW-5D-XBxtxbez",
				textarea: "_38iRZrBmGW-5D-XBxtxbez"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/WidgetColorPicker/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "_2QWNTzVWq3sPqrtKMNZkIK",
				tertiaryButton: "_2QWNTzVWq3sPqrtKMNZkIK"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/WidgetManager/SortWidgets.m.less": function(e, t, n) {
			e.exports = {
				Sortable: "p48n-9EReSpiZx7b-CTNR",
				sortable: "p48n-9EReSpiZx7b-CTNR"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/WidgetManager/WidgetLabel.m.less": function(e, t, n) {
			e.exports = {
				WidgetType: "_3p7huyDH-9CXIoKvG1Gvyq",
				widgetType: "_3p7huyDH-9CXIoKvG1Gvyq",
				WidgetTitle: "_1kJLjl0LTjW1fEhJton2Rf",
				widgetTitle: "_1kJLjl0LTjW1fEhJton2Rf"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = l.a.wrapped(c.a, "ImageUploadIcon", m.a), g = l.a.div("ImageIconRow", m.a), b = l.a.div("ImageUploadText", m.a), E = l.a.wrapped(i.a, "FileDrop", m.a), f = l.a.div("ContainerUploading", m.a), v = e => r.a.createElement(f, {
				className: e.className
			}, r.a.createElement(g, null, r.a.createElement(d.a, {
				sizePx: 40,
				center: !0
			})), r.a.createElement(b, null, h._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), x = l.a.label("Label", m.a);
			t.b = e => r.a.createElement(E, {
				className: e.className,
				onDrop: e.onChange,
				render: t => r.a.createElement(x, {
					className: Object(s.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, r.a.createElement(g, null, e.icon || r.a.createElement(p, null)), r.a.createElement(b, null, e.label), r.a.createElement(o.a, {
					className: m.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/StructuredStyles/LabeledColorInput/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "_2bH6BjnwnMrVElgqYuqWds",
				formElementTitle: "_2bH6BjnwnMrVElgqYuqWds",
				ExpandLeft: "_28JVLYm2KT9m55NbUehrew",
				expandLeft: "_28JVLYm2KT9m55NbUehrew"
			}
		},
		"./src/reddit/components/StructuredStyles/LabeledColorPicker/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "_1GWvDAQEolGXiuDIc4kt4T",
				formElementTitle: "_1GWvDAQEolGXiuDIc4kt4T",
				ExpandLeft: "WkxmhYGAkRvkMDamSIr6j",
				expandLeft: "WkxmhYGAkRvkMDamSIr6j"
			}
		},
		"./src/reddit/components/StructuredStyles/LabeledMenuPositionInput/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandRight: "_2umD8je1qWP7OjoECS5WuQ",
				expandRight: "_2umD8je1qWP7OjoECS5WuQ"
			}
		},
		"./src/reddit/components/StructuredStyles/LabeledRangeInput/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRangeInput: "_175DmwC59q2x4aIZ2-pznl",
				styledRangeInput: "_175DmwC59q2x4aIZ2-pznl"
			}
		},
		"./src/reddit/components/StructuredStyles/LabeledVisibilityInput/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementDescription: "_3iXPYDRvLHVYv1SzA9Z3mq",
				formElementDescription: "_3iXPYDRvLHVYv1SzA9Z3mq",
				StyledLabel: "_1gpo_1VQ6ocKc79DArKexN",
				styledLabel: "_1gpo_1VQ6ocKc79DArKexN"
			}
		},
		"./src/reddit/components/StructuredStyles/NavItem/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandLeft: "_1EDg7wOGia2sgB0Tu3mQ4o",
				expandLeft: "_1EDg7wOGia2sgB0Tu3mQ4o"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less": function(e, t, n) {
			e.exports = {
				RadioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				radioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				ExpandRight: "_1fG2Q7CG6Ngau3siKKxZYP",
				expandRight: "_1fG2Q7CG6Ngau3siKKxZYP"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				o = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = n.n(c);
			const m = s.a.wrapped(o.a, "RadioOption", u.a),
				h = s.a.wrapped(d.a, "ExpandRight", u.a);
			t.a = e => r.a.createElement(m, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, r.a.createElement(h, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? r.a.createElement(i.f, null) : r.a.createElement(i.e, null), r.a.createElement(l.a, {
				altColor: e.altColor,
				label: e.label,
				description: e.description
			})), e.children)
		},
		"./src/reddit/components/StructuredStyles/ResetAllStylesButton/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "_1dqCfqswm2xQ_HY1XOmdCj",
				tertiaryButton: "_1dqCfqswm2xQ_HY1XOmdCj"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3RAaeGnzROhVYLF2fmshH",
				closeIcon: "_3RAaeGnzROhVYLF2fmshH",
				ThemedChevron: "_2M_5xv3fWesOuUt2gytq6R",
				themedChevron: "_2M_5xv3fWesOuUt2gytq6R",
				Button: "_3Rt3ZY4ojMg7wfI9k69nvr",
				button: "_3Rt3ZY4ojMg7wfI9k69nvr",
				TertiaryButton: "_1K4F8XF0kX4Wn5JczKdGNw",
				tertiaryButton: "_1K4F8XF0kX4Wn5JczKdGNw",
				SubFormTitle: "_2Mcs0_1b4khVpvd3VoPwgO",
				subFormTitle: "_2Mcs0_1b4khVpvd3VoPwgO",
				SecondaryButton: "_3eCD81J-e6itJCgpouLk7F",
				secondaryButton: "_3eCD81J-e6itJCgpouLk7F",
				DeleteButton: "_3qK8hxcissqDUqh0hdhKpA",
				deleteButton: "_3qK8hxcissqDUqh0hdhKpA",
				ModalBody: "NI1TKCw2eJdZ2OUDbjnH7",
				modalBody: "NI1TKCw2eJdZ2OUDbjnH7",
				ModalHeader: "bLHAeXh7YjdFXThswBfW4",
				modalHeader: "bLHAeXh7YjdFXThswBfW4",
				ModalTitle: "_2JAYII4pHjv6tUdk_Nw86K",
				modalTitle: "_2JAYII4pHjv6tUdk_Nw86K",
				ModalMain: "_3sUbdYy2TxbnpDYjBKbQXg",
				modalMain: "_3sUbdYy2TxbnpDYjBKbQXg",
				ModalText: "_11keK7OntunlhHWXBYXlpv",
				modalText: "_11keK7OntunlhHWXBYXlpv",
				ModalFooter: "_20VE_S1Gf-ls6PlYBoW-gD",
				modalFooter: "_20VE_S1Gf-ls6PlYBoW-gD",
				DisabledOverlay: "_14F_la6Xncrsnpa6o4LPO",
				disabledOverlay: "_14F_la6Xncrsnpa6o4LPO",
				ToggleInput: "_12tgaX8PtYIF1972W0C17O",
				toggleInput: "_12tgaX8PtYIF1972W0C17O",
				selected: "_3jtpy3ShATQhbYUePIhv4C"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				l = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				o = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const u = a.a.wrapped(r.a, "ModalInput", c.a),
				m = a.a.input("Input", c.a),
				h = a.a.wrapped(o.a, "RadioOn", c.a),
				p = a.a.wrapped(i.a, "RadioOff", c.a),
				g = a.a.wrapped(s.a, "Checkbox", c.a),
				b = a.a.wrapped(l.a, "CheckboxSelected", c.a),
				E = a.a.textarea("Textarea", c.a),
				f = a.a.label("StyledLabel", c.a),
				v = a.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, n) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				i = n.n(l);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			const c = e => {
					var {
						disabled: t
					} = e, n = d(e, ["disabled"]);
					return r.a.createElement("div", o({}, n, {
						className: Object(s.a)(i.a.FormNavElement, {
							[i.a.disabled]: t
						})
					}), n.children)
				},
				u = e => {
					var {
						canDrop: t,
						className: n,
						isDragging: a,
						isOver: l,
						disabled: c
					} = e, u = d(e, ["canDrop", "className", "isDragging", "isOver", "disabled"]);
					return r.a.createElement("div", o({}, u, {
						className: Object(s.a)(i.a.DragCard, {
							[i.a.disabled]: c,
							[i.a.isDraffing]: a,
							[i.a.isOverAndCanDrop]: l && t
						}, n)
					}))
				}
		},
		"./src/reddit/components/StructuredStyles/UploadedImage/index.m.less": function(e, t, n) {
			e.exports = {
				TrashIcon: "_369jaOfOFcc4zl3BotOKV0",
				trashIcon: "_369jaOfOFcc4zl3BotOKV0",
				BottomRow: "_3wDzoF7M_TFAMlJ37cLSkW",
				bottomRow: "_3wDzoF7M_TFAMlJ37cLSkW",
				isHiding: "_3IxVc-07C4GUtQhhxc8MI0",
				imageDisplay: "_6FUPzkTsqrEot5SsYJeha",
				ErrorText: "_3ctJAQq7nR8klJsurOmHQg",
				errorText: "_3ctJAQq7nR8klJsurOmHQg"
			}
		},
		"./src/reddit/components/StructuredStyles/UploadedImage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = n("./src/reddit/controls/ImageDisplay/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/icons/svgs/Trash/index.tsx"),
				m = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/components/StructuredStyles/UploadedImage/index.m.less"),
				p = n.n(h),
				g = n("./src/lib/lessComponent.tsx");
			const b = i.a,
				E = g.a.wrapped(u.a, "TrashIcon", p.a),
				f = e => s.a.createElement("div", {
					className: Object(l.a)(p.a.BottomRow, {
						[p.a.isHiding]: e.isHiding
					})
				}, e.children),
				v = g.a.wrapped(o.c, "ErrorText", p.a);
			t.e = e => {
				const t = e.imageData && e.imageData.kind === m.b.FailedToUpload ? e.imageData.error : "",
					n = !t && e.imageData.kind === m.b.NotUploaded,
					r = e.isRequestInProgress && e.imageData.kind === m.b.TempUploaded,
					i = n || r;
				return s.a.createElement(d.a, {
					backgroundImage: e.imageData.url,
					className: Object(l.a)(e.className, p.a.imageDisplay)
				}, i && s.a.createElement(b, null), s.a.createElement(f, {
					isHiding: !!i
				}, t && s.a.createElement(v, null, a.fbt._("Something went wrong", null, {
					hk: "2xn6Fx"
				})), s.a.createElement(c.a, {
					onClick: e.onRemove
				}, s.a.createElement(E, null))))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/lodash/throttle.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				l = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				h = n.n(m),
				p = n("./src/reddit/controls/Dropdown/row.m.less"),
				g = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			class f extends l.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(g.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? l.a.createElement(o.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && l.a.createElement("span", {
						className: n
					}, e.children), l.a.createElement("span", {
						className: Object(i.a)(g.a.text, e.textClassName)
					}, e.displayText)) : l.a.createElement(u.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? l.a.createElement("div", null, e.children) : l.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && l.a.createElement("span", {
						className: Object(i.a)(g.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && l.a.createElement(c.a, {
						className: g.a.checkmark
					}), e.showDropdownTriangle && l.a.createElement(d.a, {
						className: h.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, n = E(e, ["className"]);
				const a = Object(i.a)(g.a.row, t, {
					[g.a.mIsInteractive]: !n.noHover,
					[g.a.mIsSelected]: n.isSelected,
					[g.a.topics]: n.isTopicsStyle
				});
				return l.a.createElement(f, b({
					className: a
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/flow.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				l = n.n(s),
				i = n("./node_modules/react-dnd/lib/index.js"),
				o = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				d = n("./src/reddit/helpers/dragDropContext/index.ts");
			const c = o.NativeTypes.FILE,
				u = r()(Object(i.DropTarget)(c, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), d.a);
			class m extends l.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(l.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
		},
		"./src/reddit/controls/ImageDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				imageDisplay: "_1OSym2TYADlQNpSDWNxtjB"
			}
		},
		"./src/reddit/controls/ImageDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/ImageDisplay/index.m.less"),
				i = n.n(l);
			t.a = e => {
				let {
					backgroundImage: t,
					children: n,
					className: a
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(i.a.imageDisplay, a),
					style: {
						backgroundImage: "url('".concat(t, "')")
					},
					children: n
				})
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			class s extends r.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = n || a;
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
					}), !s && r.a.createElement("input", {
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
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.search.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/Search/index.tsx"),
				i = n("./src/reddit/controls/SearchBar/index.m.less"),
				o = n.n(i);
			t.a = e => r.a.createElement("div", {
				className: Object(s.a)(o.a.searchContainer, e.className)
			}, r.a.createElement("input", {
				className: Object(s.a)(o.a.search, {
					[o.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), r.a.createElement("div", {
				className: Object(s.a)(o.a.searchIconContainer, {
					[o.a.mClickable]: !!e.onSearch,
					[o.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, r.a.createElement(l.a, null)))
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/helpers/dragDropContext/index.ts"),
				l = n("./node_modules/lodash/flow.js"),
				i = n.n(l),
				o = n("./node_modules/react-dnd/lib/index.js");
			class d extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? i()(e.connectDropTarget, e.connectDragSource)(r.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var c = i()(Object(o.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(o.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(d);
			class u extends r.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const a = n.values.slice(),
								r = a.indexOf(e),
								s = a.splice(r, 1)[0];
							let l = a.indexOf(t);
							return r <= l && (l += 1), a.splice(l, 0, s), this.props.onDrop(e, t, a), {
								values: a
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: n,
						render: a
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, this.state.values.map((e, s) => r.a.createElement(c, {
						id: e,
						key: t && t(e),
						index: s,
						render: a,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(s.a)(u)
		},
		"./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_1MHSX9NVr4C2QxH2dMcg4M",
				inputWrapper: "anPJr_ybRailY8NbAunl2",
				searchBar: "_3cWzf-usAKfGV1Ay7h2zM_",
				commonIconStyles: "_3UX5zf2Jh7UCwxr3e1Rrt2",
				dropdownIcon: "_15FJlGHQ_lg8wmnMsXlnes",
				iconEmpty: "_3adQsrepNO01e3sMjt2z0P",
				subredditRoundIcon: "jpIFeDw811_DQwlQEqBjm",
				userIcon: "_1Xb3_WGBJKTWZNy0MHWTsR",
				searchIcon: "_2MCEtCukiOUDUHF1PDgWwH",
				mDisabled: "I8Mbkr_v6UNBq2UjXD24r"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, n) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				l = n("./node_modules/react/index.js"),
				i = n.n(l),
				o = n("./src/lib/classNames/index.ts");
			const d = {
				leading: !0,
				trailing: !1
			};
			var c = function(e, t, n) {
					let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
					const r = Object.assign(Object.assign({}, d), a),
						s = t > e ? 1 : -1;
					let l = e;
					if (e !== t) {
						for (r.leading || (l += s); l !== t;) n(l), l += s;
						r.trailing && n(l)
					} else(r.leading || r.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				m = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				h = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				p = n.n(h);
			class g extends l.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return i.a.createElement("div", {
						className: Object(o.a)(p.a.entry, this.props.disabled && p.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			n("./node_modules/core-js/modules/es6.symbol.js");
			var b = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				E = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
					}
					return n
				},
				x = e => {
					var {
						className: t,
						children: n,
						title: a
					} = e, r = v(e, ["className", "children", "title"]);
					return i.a.createElement("div", f({
						className: Object(o.a)(E.a.dropdownSection, t)
					}, r), a && i.a.createElement("div", {
						className: E.a.title
					}, a), n)
				},
				C = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				S = n("./src/reddit/helpers/name/index.ts"),
				I = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/components/SubredditIcon/index.tsx"),
				k = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				w = n("./src/reddit/icons/svgs/Link/index.tsx"),
				_ = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				O = n("./src/reddit/icons/svgs/Video/index.tsx"),
				D = n("./src/reddit/layout/row/Inline/index.tsx"),
				T = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				j = n.n(T);
			const P = [{
				type: "text",
				Icon: _.a
			}, {
				type: "images",
				Icon: k.a
			}, {
				type: "videos",
				Icon: O.a
			}, {
				type: "links",
				Icon: w.a
			}];
			var R = e => {
					const {
						allowedPostTypes: t,
						className: n
					} = e;
					return i.a.createElement(D.a, {
						className: Object(o.a)(j.a.rowStyle, n)
					}, P.map(e => {
						let {
							type: n,
							Icon: a
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(j.a.iconWrapper, {
								[j.a.mDisabled]: !t[n]
							})
						}, i.a.createElement(a, null))
					}))
				},
				N = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				A = n.n(N);
			const W = I.a.wrapped(y.b, "subredditIcon", A.a);
			var F = e => {
					const {
						highlight: t,
						icon: n,
						title: a,
						secondaryText: r,
						item: s
					} = e, {
						allowedPostTypes: l
					} = s;
					return i.a.createElement("div", {
						className: Object(o.a)(A.a.container, {
							[A.a.mHighlight]: t
						})
					}, n, i.a.createElement("div", {
						className: A.a.main
					}, i.a.createElement("span", {
						className: A.a.title
					}, a), r && i.a.createElement("span", {
						className: A.a.secondary
					}, r)), t && l && i.a.createElement(R, {
						allowedPostTypes: l
					}))
				},
				B = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				L = n.n(B);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var M = e => {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, r = Object(S.c)(t), s = void 0 !== n ? a.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [a.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, l = i.a.createElement(C.a, {
					className: Object(o.a)(L.a.profileIcon, A.a.subredditIcon)
				});
				return i.a.createElement(F, U({
					icon: l,
					title: r,
					secondaryText: s
				}, e))
			};

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var V = e => {
					const {
						item: {
							primaryColor: t,
							iconUrl: n,
							name: r,
							subscribers: s
						}
					} = e, l = Object(S.b)(r), o = void 0 !== s ? a.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [a.fbt._plural(s, "number")], {
						hk: "2SvJUX"
					}) : void 0, d = i.a.createElement(W, {
						iconUrl: n,
						primaryColor: t,
						redditStyle: !0
					});
					return i.a.createElement(F, q({
						icon: d,
						title: l,
						secondaryText: o
					}, e))
				},
				K = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				H = n.n(K);
			const G = {
				[m.a.OWN_PROFILE]: () => a.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => a.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => a.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => a.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			t.a = class extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = s()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case m.a.OWN_PROFILE:
							return M;
						default:
							return V
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(i.a.createElement(x, {
						key: "no-matches"
					}, i.a.createElement("div", {
						className: H.a.noMatches
					}, a.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (a, r, s, l) => {
						const o = [];
						c(s, l, n => {
							const a = t[n],
								r = n === e,
								s = this.getEntryContentComponent(a.type, a.name);
							s && o.push(i.a.createElement(g, {
								entryIndex: n,
								disabled: a.disabled,
								key: a.id || a.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, i.a.createElement(s, {
								highlight: r,
								item: a
							})))
						});
						const d = G[r];
						n.push(i.a.createElement(x, {
							key: r,
							title: d && d()
						}, o))
					}), i.a.createElement("div", {
						className: Object(o.a)(H.a.container, this.props.className, {
							[H.a.mIsValid]: this.props.isValid,
							[H.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz"
			}
		},
		"./src/reddit/controls/SubredditPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var a = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				s = n("./src/reddit/helpers/name/index.ts"),
				l = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				i = n("./src/reddit/models/User/index.ts");
			const o = (e, t, n) => {
					if (Object(s.a)(e, t.name)) {
						const {
							id: e,
							name: l
						} = t, {
							url: i,
							color: o
						} = Object(r.a)({
							shouldHideNsfwIcon: n,
							subredditOrProfile: t
						});
						return {
							rawString: Object(s.b)(l),
							record: {
								id: e,
								name: l,
								iconUrl: i,
								primaryColor: o,
								type: a.a.SUBREDDIT
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				d = (e, t, n) => {
					const r = Object(i.e)(t);
					if (Object(s.a)(e, r)) {
						const {
							id: e,
							accountIcon: n
						} = t;
						return {
							rawString: Object(s.c)(r),
							record: {
								id: e,
								name: r,
								iconUrl: n,
								type: a.a.PROFILE
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				c = (e, t, n, a) => {
					if (t && (!n || Object(s.d)(e))) return o(e, t, a);
					if (n && (!t || Object(s.e)(e))) return d(e, n);
					if (t && n) {
						const r = o(e, t, a);
						return r.record ? r : d(e, n)
					}
					return {
						rawString: e,
						record: null
					}
				},
				u = e => {
					let t;
					return t = e.type === a.a.PROFILE ? l.a.OWN_PROFILE : l.a.OTHER_SUBREDDIT, Object.assign(Object.assign({}, e), {
						type: t
					})
				},
				m = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				h = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				p = e => m.test(e) || h.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/lodash/isEqual.js"),
				l = n.n(s),
				i = n("./src/reddit/helpers/name/index.ts"),
				o = class extends r.a.Component {
					constructor(e) {
						super(e), this.isFocused = !1, this.onFocus = () => {
							this.isFocused = !0, this.props.onFocus && this.props.onFocus()
						}, this.onChange = (e, t) => {
							this.setState({
								value: e
							}, () => {
								t && (this.props.onSelect(e), this.isFocused = !1)
							})
						}, this.state = {
							value: e.value
						}
					}
					componentWillReceiveProps(e) {
						const {
							value: t
						} = this.state, {
							value: n
						} = e;
						if (!l()(t, n) && !this.isFocused) {
							t.record && !n.record && Object(i.a)(t.record.name, n.rawString) ? this.setState({
								value: {
									rawString: n.rawString,
									record: t.record
								}
							}) : this.setState({
								value: n
							})
						}
					}
					render() {
						return r.a.createElement(r.a.Fragment, null, this.props.renderPicker({
							onChange: this.onChange,
							onFocus: this.onFocus,
							value: this.state.value
						}))
					}
				},
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/objectSelector/index.ts"),
				m = n("./src/reddit/actions/subredditAutocomplete.ts"),
				h = n("./src/reddit/actions/subredditCrosspostable.ts"),
				p = n("./src/reddit/actions/subscription/index.ts"),
				g = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				b = n("./node_modules/lodash/debounce.js"),
				E = n.n(b),
				f = n("./src/lib/classNames/index.ts"),
				v = n("./src/reddit/constants/keycodes.ts"),
				x = n("./src/reddit/constants/posts.ts"),
				C = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				S = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				I = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/components/SubredditIcon/index.tsx"),
				k = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				w = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Search/index.tsx"),
				O = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				D = n.n(O);
			const T = I.a.wrapped(y.b, "subredditRoundIcon", D.a),
				j = I.a.wrapped(_.a, "searchIcon", D.a),
				P = I.a.wrapped(k.a, "userIcon", D.a),
				R = I.a.span("iconEmpty", D.a),
				N = e => {
					let {
						className: t,
						disabled: n
					} = e;
					return r.a.createElement(w.b, {
						className: Object(f.a)(D.a.dropdownIcon, t, {
							[D.a.mDisabled]: n
						})
					})
				};

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var W = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			const F = e => {
				e.preventDefault(), e.stopPropagation()
			};
			var B = e => {
					const {
						className: t,
						disabled: n,
						isActive: a,
						onDropdownClick: s,
						inputRef: l,
						record: i,
						value: o
					} = e, d = W(e, ["className", "disabled", "isActive", "onDropdownClick", "inputRef", "record", "value"]);
					let c = r.a.createElement(R, null);
					return a ? c = r.a.createElement(j, null) : i && (c = i.type === x.a.SUBREDDIT ? r.a.createElement(T, i) : r.a.createElement(P, null)), r.a.createElement("div", {
						className: Object(f.a)(D.a.searchBar, t)
					}, c, r.a.createElement("div", {
						className: D.a.inputWrapper
					}, r.a.createElement("input", A({
						className: D.a.input,
						ref: l,
						disabled: n,
						placeholder: a ? S.fbt._("Search communities", null, {
							hk: "1mtF5A"
						}) : S.fbt._("Choose a community", null, {
							hk: "44gKTd"
						}),
						spellCheck: !1,
						value: o
					}, d))), r.a.createElement("div", {
						onClick: s,
						onMouseDown: F
					}, r.a.createElement(N, {
						disabled: n
					})))
				},
				L = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				U = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				M = n.n(U);
			class q extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(g.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = E()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === C.a.OWN_PROFILE ? Object(i.c)(t.name) : Object(i.b)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.getPickerValue = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						const n = t.state.inputValue,
							a = t.state.focusedIndex,
							{
								items: r,
								value: s
							} = t.props;
						if (s && s.record && Object(i.a)(n, s.record.name)) return Object.assign(Object.assign({}, s), {
							rawString: n
						});
						const l = r[a] || e && r.find(e => Object(i.a)(e.name, n));
						if (!l) return {
							rawString: n,
							record: null
						};
						const {
							type: o,
							id: d,
							name: c,
							iconUrl: u,
							primaryColor: m,
							allowedPostTypes: h
						} = l;
						return {
							rawString: n,
							record: Object(i.a)(n, c) ? {
								id: d,
								name: c,
								iconUrl: u,
								primaryColor: m,
								allowedPostTypes: h,
								type: o === C.a.OWN_PROFILE ? x.a.PROFILE : x.a.SUBREDDIT
							} : null
						}
					}, this.findNextEnabledItemIndex = e => {
						const t = e ? -1 : 1;
						let n = this.state.focusedIndex + t,
							a = this.props.items[n];
						for (; a;) {
							if (!a.disabled) return n;
							n += t, a = this.props.items[n]
						}
						return n
					}, this.moveSelection = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						const {
							value: n,
							items: a
						} = t.props;
						let r = t.findNextEnabledItemIndex(e);
						r < -1 ? r = a.length - 1 : r >= a.length && (r = -1);
						const s = -1 === r ? n.rawString : a[r].name;
						s && t.setState({
							focusedIndex: r,
							inputValue: s
						})
					}, this.placeCursorAtTheEnd = () => {
						const e = this.state.inputValue.length;
						this.inputRef && this.inputRef.setSelectionRange(e, e)
					}, this.onDropdownClick = e => {
						const {
							inputRef: t
						} = this;
						this.state.isOpen ? this.setState({
							isOpen: !1
						}) : (t && t.focus(), this.setState({
							isOpen: !0
						}), this.placeCursorAtTheEnd()), e.preventDefault(), e.stopPropagation()
					}, this.onFocus = () => {
						this.props.onFocus && this.props.onFocus(), this.setState({
							isActive: !0,
							isOpen: !0
						}), this.inputRef && this.inputRef.select()
					}, this.onBlur = () => {
						this.props.selectOnBlur && this.state.isOpen ? (this.commitSelection(), this.setState({
							isActive: !1
						})) : this.setState({
							isActive: !1,
							isOpen: !1
						})
					}, this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntryFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.onEntrySelect = e => {
						this.selectItem(e)
					}, this.onInputChange = e => {
						this.state.isOpen || this.setState({
							isOpen: !0
						});
						const t = e.target.value;
						this.requestAutocomplete(t), this.setState({
							inputValue: t
						}, this.callOnChange)
					}, this.onKeyDown = e => {
						e.which === v.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === v.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === v.a.Enter || e.which === v.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== v.a.Tab && e.preventDefault()) : e.which === v.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
					}, this.state = {
						isActive: !1,
						isOpen: !1,
						focusedIndex: 0,
						inputValue: e.value.rawString
					}
				}
				componentDidMount() {
					const {
						value: {
							rawString: e
						}
					} = this.props;
					e && this.requestAutocomplete(e)
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState({
						focusedIndex: -1,
						inputValue: e.value.rawString
					})
				}
				render() {
					const {
						className: e,
						disabled: t,
						isValid: n = !0,
						items: a,
						value: s
					} = this.props, {
						isActive: l,
						isOpen: i
					} = this.state, o = s.record;
					return r.a.createElement("div", {
						className: Object(f.a)(M.a.container, e, {
							[M.a.mIsActive]: l,
							[M.a.mIsInvalid]: !n
						})
					}, r.a.createElement(B, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						inputRef: this.setInputRef,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						record: o
					}), i && r.a.createElement(L.a, {
						items: a,
						isValid: n,
						focusedIndex: this.state.focusedIndex,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect
					}))
				}
			}
			var V = q,
				K = n("./src/reddit/selectors/subredditAutocomplete.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(u.a)(Object(c.a)((e, t) => t.value, (e, t) => {
					let {
						allowCrosspostableOnly: n,
						includeUserProfile: a,
						value: r
					} = t;
					return Object(K.a)(e, {
						allowCrosspostableOnly: n,
						includeUserProfile: a,
						substring: r.rawString
					})
				}, (e, t) => {
					const {
						suggestedItems: n,
						fallbackItems: a,
						isAllDataRetrieved: r
					} = t, s = n.length ? n : e.record ? [Object(g.a)(e.record)] : [];
					return {
						items: 0 === s.length && r ? a : s,
						haveSuggestions: s.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending
					}
				})),
				z = {
					onGetInitialData: e => t => t(e ? h.d() : p.e()),
					onGetSubredditAutocomplete: m.d
				};
			class Q extends r.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return r.a.createElement(V, H({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var Y = Object(d.b)(G, z)(Q);
			t.a = class extends r.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => r.a.createElement(Y, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: this.props.className,
						disabled: this.props.disabled || !1,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.props.inputRef,
						isValid: this.props.isValid,
						onChange: e.onChange,
						onFocus: e.onFocus,
						value: e.value,
						selectOnBlur: this.props.selectOnBlur || !1
					})
				}
				render() {
					return r.a.createElement(o, {
						onFocus: this.props.onFocus,
						onSelect: this.props.onSelect,
						renderPicker: this.renderPicker,
						value: this.props.value
					})
				}
			}
		},
		"./src/reddit/controls/ToggleInput/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2uq1gh0F_Wl3Cb183l1njW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				l = n.n(s);
			t.a = a.a.wrapped(r.a, "unstyledInternalLink", l.a)
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-dnd/lib/index.js"),
				r = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				s = n.n(r);
			t.a = Object(a.DragDropContext)(s.a)
		},
		"./src/reddit/helpers/isValidHexColor/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const a = /^#[0-9a-f]{6}$/i,
				r = /^#?[0-9a-f]{6}$/i,
				s = 7;
			t.b = (e, t) => {
				return !!e && (t ? r : a).test(e)
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = n.n(l);
			const o = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(s.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = o
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, n) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/Info/index.m.less"),
				i = n.n(l);
			const o = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(s.b)("info"), " ").concat(e.className)
			}), "InfoIcon", i.a);
			t.a = o
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = n.n(l);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, i.a.grapple, {
					[i.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				i = n.n(l);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(l);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), r.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/PositionRight/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1dCUcobmYK3gyzqbl9T8UR"
			}
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
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
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = n.n(l);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", null, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), r.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				transform: "translate(3, 4)"
			}, r.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				s = n.n(r);
			t.a = a.a.div("dynamicTwoCol", s.a)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				o = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			t.a = Object(s.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: a,
					widthLeft: s,
					gutter: i
				} = e, u = c(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return r.a.createElement("div", d({
					className: Object(l.a)(o.a.expandRightContainer, t)
				}, u), r.a.createElement("div", {
					className: o.a.left,
					style: {
						flexBasis: s,
						height: a,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: o.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/selectors/apiRequestState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = e => e.apiRequestState
		}
	}
]);
//# sourceMappingURL=StructuredStyles.7f3912bbc0af406d4d0b.js.map