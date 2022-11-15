// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.0290cb007255eb4d926c.js
// Retrieved at 11/15/2022, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/endpoints/modQueue/modActivity.ts"),
				b = s("./src/reddit/helpers/graphql/helpers.ts"),
				v = s("./src/reddit/helpers/trackers/modListing.ts"),
				p = s("./src/reddit/hooks/useGqlContext.ts"),
				h = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/selectors/modQueue.ts"),
				w = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				O = s.n(C),
				y = s("./src/config.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./src/lib/timeAgo/index.ts"),
				E = s("./src/redditGQL/types.ts");
			const j = `${y.a.assetPath}/img/snoo-sunglasses.png`,
				A = e => {
					let {
						data: t
					} = e;
					var s, n, r, a, i, l, u;
					const m = (null === (s = t.info) || void 0 === s ? void 0 : s.displayName) || (null === (n = t.info) || void 0 === n ? void 0 : n.name),
						{
							lastModAction: v
						} = t;
					return d.a.createElement("div", {
						className: Object(o.a)(O.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, d.a.createElement(c.a, {
						className: O.a.modIcon,
						userName: m || "",
						iconUrl: null === (a = null === (r = null == t ? void 0 : t.info) || void 0 === r ? void 0 : r.icon) || void 0 === a ? void 0 : a.url,
						isNSFW: !!(null === (l = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === l ? void 0 : l.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), d.a.createElement("div", {
						className: O.a.subredditRowText
					}, d.a.createElement("div", {
						className: Object(o.a)(O.a.username, "text-neutral-content-strong")
					}, m), d.a.createElement("div", {
						className: Object(o.a)(O.a.detailText, "text-neutral-content-weak")
					}, v && d.a.createElement(d.a.Fragment, null, ((e, t) => {
						switch (e) {
							case E.w.AddNote:
								return x.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case E.w.AddRemovalReason:
								return x.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case E.w.AdjustPostCrowdControlLevel:
								return x.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case E.w.EnablePostCrowdControlFilter:
								return x.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case E.w.DisablePostCrowdControlFilter:
								return x.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case E.w.ApproveComment:
								return x.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case E.w.ApproveLink:
								return x.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case E.w.BanUser:
								return x.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case E.w.Collections:
								return x.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case E.w.DeleteNote:
								return x.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case E.w.Distinguish:
								return "SubredditPost" === t ? x.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : x.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case E.w.EditFlair:
								return "SubredditPost" === t ? x.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : x.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case E.w.IgnoreReports:
								return "SubredditPost" === t ? x.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : x.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case E.w.Lock:
								return "SubredditPost" === t ? x.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : x.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case E.w.MarkNsfw:
								return x.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case E.w.MarkOriginalContent:
								return x.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case E.w.MuteUser:
								return x.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case E.w.RemoveComment:
								return x.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case E.w.RemoveLink:
								return x.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case E.w.SetContestMode:
								return x.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case E.w.SetSuggestedsort:
								return x.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case E.w.ShowComment:
								return x.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case E.w.SpamComment:
								return x.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case E.w.SpamLink:
								return x.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case E.w.Spoiler:
								return x.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case E.w.Sticky:
								return "SubredditPost" === t ? x.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : x.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case E.w.UnbanUser:
								return x.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case E.w.Unlock:
								return "SubredditPost" === t ? x.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : x.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case E.w.UnmuteUser:
								return x.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case E.w.UnsetContestMode:
								return x.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case E.w.UnsnoozeReports:
								return "SubredditPost" === t ? x.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : x.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case E.w.Unspoiler:
								return x.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case E.w.Unsticky:
								return "SubredditPost" === t ? x.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : x.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case E.w.UpdateRemovalReason:
							case E.w.WikiBanned:
							case E.w.WikiContributor:
							case E.w.WikiPageListed:
							case E.w.WikiPermLevel:
							case E.w.WikiRevise:
							case E.w.WikiUnbanned:
							case E.w.AcceptModeratorInvite:
							case E.w.AddCommunityTopics:
							case E.w.AddContributor:
							case E.w.AddModerator:
							case E.w.CreateAward:
							case E.w.CreateScheduledPost:
							case E.w.CreateRemovalReason:
							case E.w.CommunityStyling:
							case E.w.CommunityWidgets:
							case E.w.CreateRule:
							case E.w.DeleteAward:
							case E.w.DeleteRule:
							case E.w.DeleteScheduledPost:
							case E.w.DeleteOverriddenClassification:
							case E.w.DeleteRemovalReason:
							case E.w.DisableAward:
							case E.w.EditPostRequirements:
							case E.w.EditRule:
							case E.w.EditScheduledPost:
							case E.w.EditSettings:
							case E.w.EnableAward:
							case E.w.Events:
							case E.w.HiddenAward:
							case E.w.InviteModerator:
							case E.w.InviteSubscriber:
							case E.w.ModAwardGiven:
							case E.w.ModmailEnrollment:
							case E.w.OverrideClassification:
							case E.w.RemoveCommunityTopics:
							case E.w.RemoveContributor:
							case E.w.RemoveModerator:
							case E.w.RemoveWikiContributor:
							case E.w.ReorderModerators:
							case E.w.ReorderRules:
							case E.w.SetPermissions:
							case E.w.SnoozeReports:
							case E.w.SubmitContentRatingSurvey:
							case E.w.SubmitScheduledPost:
							case E.w.UnignoreReports:
							case E.w.UninviteModerator:
							default:
								return x.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == v ? void 0 : v.action, null === (u = null == v ? void 0 : v.target) || void 0 === u ? void 0 : u.__typename), " ", Object(S.d)(Object(b.g)(v.createdAt) / 1e3)))))
				},
				N = e => {
					let {
						mostRecentAction: t
					} = e;
					return d.a.createElement("div", {
						className: O.a.emptyTooltip
					}, d.a.createElement("img", {
						alt: x.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: j,
						className: O.a.snooImage
					}), d.a.createElement("div", {
						className: Object(o.a)(O.a.emptyText, "text-neutral-content-strong")
					}, x.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), d.a.createElement("div", {
						className: Object(o.a)(O.a.emptyDetailText, "text-neutral-content-weak")
					}, x.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && d.a.createElement("div", {
						className: O.a.lastActionContainer
					}, d.a.createElement("div", {
						className: Object(o.a)(O.a.lastActionTitle, "text-neutral-content-weak")
					}, x.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), d.a.createElement(A, {
						data: t
					})))
				},
				T = e => {
					let {
						orderedModsList: t,
						subredditName: s,
						mods: n,
						mostRecentAction: r
					} = e;
					return 0 === t.length ? d.a.createElement(N, {
						mostRecentAction: r
					}) : d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: Object(o.a)(O.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", x.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [x.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), s), n && t.slice(0, 10).map(e => d.a.createElement(A, {
						data: n[e],
						key: e
					})), t.length > 10 && d.a.createElement("div", {
						className: Object(o.a)(O.a.detailText, O.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", x.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				R = Object(n.a)(u.a),
				M = e => e ? Object.keys(e).sort((t, s) => ((e, t, s) => {
					var n, o, r, a;
					const d = null === (o = null === (n = s[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === o ? void 0 : o.createdAt,
						i = null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.lastModAction) || void 0 === a ? void 0 : a.createdAt,
						l = Object(b.g)(d || "");
					return Object(b.g)(i || "") - l
				})(t, s, e)).filter(t => {
					var s, n;
					return (new Date).getTime() - Object(b.g)((null === (n = null === (s = e[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * r.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: s,
					maxMods: n,
					isModqueue: r
				} = e;
				const u = Object(i.e)(w.c),
					b = s || u,
					C = Object(i.e)(e => Object(_.h)(e, {
						subredditId: b || ""
					})) || "",
					y = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[b || ""]) || {}
					}),
					{
						mods: x
					} = y,
					S = Object(a.useCallback)(e => M(e), [])(x),
					[E, j] = Object(a.useState)(void 0),
					A = Object(p.a)();
				Object(a.useEffect)(() => {
					(async () => {
						var e, t, s, n;
						if (0 === S.length && C) {
							const o = null === (t = null === (e = (await Object(m.c)(A(), {
								subredditName: C
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == o ? void 0 : o.actions) && (null === (n = null === (s = o.actions) || void 0 === s ? void 0 : s.edges) || void 0 === n || n.map(e => {
								var t;
								const {
									moderatorInfo: s,
									...n
								} = null == e ? void 0 : e.node, o = null === (t = null == s ? void 0 : s.displayName) || void 0 === t ? void 0 : t.toLowerCase();
								"reddit" !== o && "automoderator" !== o && j({
									info: s,
									lastModAction: n
								})
							}))
						}
					})()
				}, [A, S.length, C]);
				const N = (e => `mod_activity_tooltip_id-${e}`)(C || ""),
					P = Object(i.d)(),
					I = Object(h.a)(),
					D = Object(a.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), P(Object(l.h)({
							tooltipId: N
						})), I(Object(v.a)(!!r, C))
					}, [P, N, I, C, r]),
					L = Object(i.e)(e => Object(k.b)(N)(e)),
					U = Object(i.e)(g.c),
					W = Object(i.e)(f.l),
					B = n || 5;
				return d.a.createElement("div", {
					className: Object(o.a)(O.a.preview, t),
					id: N,
					onClick: D,
					"data-testid": "mod-activity-preview"
				}, x && S.length > 0 ? S.slice(0, B).map((e, t) => {
					var s, n, r, a, i, l, u, m, b, v;
					return d.a.createElement(c.a, {
						className: Object(o.a)(O.a.userIcon, {
							[O.a.noMargin]: t === S.length - 1 && !(t === B - 1 && S.length > B)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (n = null === (s = x[e]) || void 0 === s ? void 0 : s.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (a = null === (r = x[e]) || void 0 === r ? void 0 : r.info) || void 0 === a ? void 0 : a.displayName) || "",
						iconUrl: null === (u = null === (l = null === (i = x[e]) || void 0 === i ? void 0 : i.info) || void 0 === l ? void 0 : l.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (v = null === (b = null === (m = x[e]) || void 0 === m ? void 0 : m.info) || void 0 === b ? void 0 : b.profile) || void 0 === v ? void 0 : v.isNsfw)
					})
				}) : U ? null : d.a.createElement(c.a, {
					className: Object(o.a)(O.a.userIcon, O.a.noMargin),
					userName: (null == W ? void 0 : W.displayName) || "",
					iconUrl: null == W ? void 0 : W.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), S.length > B && d.a.createElement("div", {
					className: Object(o.a)(O.a.moreMods, "text-neutral-content-weak")
				}, "+", S.length - B), d.a.createElement(R, {
					tooltipId: N,
					isOpen: L,
					className: O.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, d.a.createElement(T, {
					orderedModsList: S,
					subredditName: C || "",
					mods: x,
					mostRecentAction: E
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, s) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SNOO_NO_MOUTH_IMAGE_PATH", (function() {
				return N
			})), s.d(t, "SNOO_THUMBS_UP_IMAGE_PATH", (function() {
				return T
			})), s.d(t, "INACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return P
			})), s.d(t, "ACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/filterQueryParams/index.ts"),
				m = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/graphql/helpers.ts"),
				_ = s("./src/reddit/helpers/trackers/modListing.ts"),
				k = s("./src/reddit/hooks/useLocalStorage.ts"),
				f = s("./src/reddit/hooks/usePageLayer.ts"),
				C = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				y = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				E = s.n(S),
				j = s("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = `${n.a.assetPath}/img/snoo-no-mouth.png`,
				T = `${n.a.assetPath}/img/snoo-thumbs-up.png`,
				R = e => {
					let {
						subredditId: t,
						activityData: s,
						origin: n,
						currentPageUrl: c
					} = e;
					var b;
					const p = Object(d.e)(e => Object(x.Y)(e, {
							subredditId: t
						})),
						h = Object(C.a)(),
						k = Object(r.useCallback)(() => {
							h(Object(_.b)(Object.keys((null == s ? void 0 : s.mods) || {}).length > 0, p.name, !0))
						}, [h, s.mods, p.name]);
					return a.a.createElement(g.default, {
						className: Object(l.a)(E.a.subredditRow, "hover:bg-neutral-background-hover"),
						key: null == p ? void 0 : p.displayText,
						to: Object(i.a)(Object(u.a)(`${n}${c}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == p ? void 0 : p.name
						}),
						onClick: k
					}, a.a.createElement(v.b, {
						className: E.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: p
					}), a.a.createElement("div", {
						className: E.a.subredditRowText
					}, a.a.createElement("div", {
						className: Object(l.a)(E.a.subredditName, "text-neutral-content-strong")
					}, null == p ? void 0 : p.displayText), a.a.createElement("div", {
						className: Object(l.a)(E.a.detailText, "text-neutral-content-weak")
					}, (null === (b = null == s ? void 0 : s.sub) || void 0 === b ? void 0 : b.lastModActionAt) ? a.a.createElement(a.a.Fragment, null, o.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(m.d)(Object(w.g)(s.sub.lastModActionAt) / 1e3)) : o.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), a.a.createElement(j.default, {
						subredditId: t,
						maxMods: 3,
						isModqueue: !0
					}))
				},
				M = e => {
					let {
						subredditIdsList: t,
						totalSubs: s,
						modActivitySummaryData: n,
						isActive: r,
						origin: d,
						currentPageUrl: i,
						isCollapsed: u,
						setIsCollapsed: m
					} = e;
					const b = t.sort((e, t) => ((e, t, s) => {
						var n, o, r, a;
						const d = Object(w.g)(null === (o = null === (n = s[e]) || void 0 === n ? void 0 : n.sub) || void 0 === o ? void 0 : o.lastModActionAt),
							i = Object(w.g)(null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.sub) || void 0 === a ? void 0 : a.lastModActionAt);
						return d > i ? -1 : d < i ? 1 : 0
					})(e, t, n)).filter(e => {
						var t, s;
						return !r || (new Date).getTime() - Object(w.g)((null === (s = null === (t = n[e]) || void 0 === t ? void 0 : t.sub) || void 0 === s ? void 0 : s.lastModActionAt) || "") < 15 * c.pb
					}).slice(0, 10);
					return a.a.createElement(p.a, {
						title: a.a.createElement("div", {
							className: E.a.titleContainer
						}, r ? o.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : o.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: E.a.widget,
						contentOnly: !0,
						headerButton: a.a.createElement("div", {
							className: E.a.headerButtonContainer
						}, a.a.createElement(O.a, {
							className: Object(l.a)(E.a.headerButtonIcon, {
								[E.a.up]: u
							}, "text-neutral-content-strong")
						})),
						headerStyles: {
							borderRadius: 4
						},
						onHeaderClick: () => m(u ? "false" : "true"),
						redditStyle: !0
					}, !u && a.a.createElement("div", {
						className: E.a.widgetContent
					}, 0 === b.length && a.a.createElement("div", {
						className: E.a.emptyCard
					}, a.a.createElement("img", {
						alt: o.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: r ? N : T,
						className: E.a.snooImage
					}), a.a.createElement("div", {
						className: Object(l.a)(E.a.emptyText, "text-neutral-content-strong")
					}, r ? o.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : o.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), a.a.createElement("div", {
						className: Object(l.a)(E.a.emptyDetailText, "text-neutral-content-weak")
					}, r ? o.fbt._("Look up above at the “inactive” section to see what communities might require moderation.", null, {
						hk: "2yELqG"
					}) : o.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), b.map(e => {
						const t = n[e];
						return a.a.createElement(R, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: d,
							currentPageUrl: i
						})
					}), s > 10 && a.a.createElement("div", {
						className: Object(l.a)(E.a.detailText, E.a.more, "text-neutral-content-weak")
					}, "+", s - 10, " ", r ? o.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : o.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				},
				P = "inactive_mod_summaries_collapsed",
				I = "active_mod_summaries_collapsed";
			t.default = () => {
				const e = Object(d.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					s = [];
				let n = 0,
					o = 0;
				Object.keys(e).map(r => {
					e[r].sub.activeMods.length > 0 ? (n < 10 && t.push(r), n++) : (o < 10 && s.push(r), o++)
				});
				const r = Object(d.e)(y.k),
					i = Object(f.a)(),
					l = {
						origin: r,
						currentPageUrl: Object(h.f)(i),
						modActivitySummaryData: e
					},
					[c, u] = Object(k.a)(P, "false"),
					[m, v] = Object(k.a)(I, "false");
				return a.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, a.a.createElement(b.a, null, a.a.createElement(M, A({
					subredditIdsList: s,
					totalSubs: o,
					isCollapsed: "true" === c,
					setIsCollapsed: u
				}, l))), a.a.createElement(b.a, null, a.a.createElement(M, A({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: n,
					isCollapsed: "true" === m,
					setIsCollapsed: v
				}, l))))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/widgets.ts"),
				v = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				p = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/models/Theme/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const k = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				f = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = k(e);
					return Object(w.f)(t)
				},
				O = e => {
					const t = f(e);
					return Object(w.f)(t)
				};
			var y = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = s.n(y);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = Object(u.v)(), j = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.o)(e, t) || void 0,
						n = t.redditStyle || Object(h.l)(e, {
							subredditId: s
						}),
						o = Object(g.eb)(e);
					return n || o
				},
				nigtmode: g.eb,
				subredditId: u.o,
				topPostVariant: p.d
			}));
			class A extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.borderColor = Object(v.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = f(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						id: a,
						onClick: i,
						onHeaderClick: c,
						title: u,
						titleClassName: b,
						truncateThreshold: v
					} = this.props, p = s ? x.a.widgetContentOnly : x.a.widgetContent, h = !n && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, w = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(d.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: n,
							[x.a.clickable]: !!i,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: g
					}, u && o.a.createElement("div", {
						className: Object(d.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!c
						}),
						id: a,
						style: {
							...w,
							...this.props.headerStyles
						},
						onClick: c
					}, o.a.createElement("div", {
						className: Object(d.a)(x.a.widgetTitle, b)
					}, o.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), r), o.a.createElement("div", {
						className: Object(d.a)(p, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? v : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(m.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = E(j(Object(i.a)(Object(c.c)(A))))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const d = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				i = (e, t) => s => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.K(s, e),
					subreddit: a.kb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.o(s)
				}),
				l = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.o(e)
				}),
				c = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.0290cb007255eb4d926c.js.map